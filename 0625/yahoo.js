const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
let symbol = "TSLA";
let startDate = Math.floor((Date.now() - ONE_WEEK_MS) / 1000); // One week ago in UNIX timestamp
let endDate = Math.floor(Date.now() / 1000); // Current date in UNIX timestamp
let stockChart; // 전역 변수로 차트 객체 선언

async function getStockData(url) {
  const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`; // just to bypass CORS cross-check
  let response = await fetch(proxyUrl).then((response) => response.text());
  return response;
}

function parseCSVData(csvData) {
  const lines = csvData.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "") continue;
    const obj = {};
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentline[j] ? currentline[j].trim() : "";
    }

    result.push(obj);
  }

  return result;
}

function populateStockTable(stockData) {
  const tableBody = document.querySelector("#stockTable tbody");
  tableBody.innerHTML = "";

  stockData.forEach((element) => {
    const row = `
        <tr>
          <td>${element.Date}</td>
          <td>${element.Open}</td>
          <td>${element.High}</td>
          <td>${element.Low}</td>
          <td>${element.Close}</td>
          <td>${element.Volume}</td>
        </tr>
      `;
    tableBody.innerHTML += row;
  });
}

function plotStockChart(stockData, dataType) {
  const ctx = document.getElementById("stockChart").getContext("2d"); // canvas 요소인 stockChart에서 2D 렌더링 컨텍스트를 가져와 차트가 그려질 영역을 설정
  const labels = stockData.map((data) => data.Date);
  const datasets = [];

  if (dataType === "all" || dataType === "open") {
    datasets.push({
      label: "Open",
      data: stockData.map((data) => parseFloat(data.Open)),
      borderColor: "blue",
      fill: false,
    });
  }
  if (dataType === "all" || dataType === "high") {
    datasets.push({
      label: "High",
      data: stockData.map((data) => parseFloat(data.High)),
      borderColor: "green",
      fill: false,
    });
  }
  if (dataType === "all" || dataType === "low") {
    datasets.push({
      label: "Low",
      data: stockData.map((data) => parseFloat(data.Low)),
      borderColor: "red",
      fill: false,
    });
  }
  if (dataType === "all" || dataType === "close") {
    datasets.push({
      label: "Close",
      data: stockData.map((data) => parseFloat(data.Close)),
      borderColor: "orange",
      fill: false,
    });
  }

  if (stockChart) {
    stockChart.destroy();
  }

  stockChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: `${symbol} Stock Prices`,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Date",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Price",
          },
        },
      },
    },
  });
}

// 비동기 네트워크 요청으로 데이터를 불러와 화면에 표시
async function loadStockData() {
  const URL = `https://query1.finance.yahoo.com/v7/finance/download/${symbol}?period1=${startDate}&period2=${endDate}&interval=1d&events=history`;
  try {
    const csvData = await getStockData(URL);
    const stockData = parseCSVData(csvData);
    populateStockTable(stockData);
    const selectedDataType = document.getElementById("dataType").value;
    plotStockChart(stockData, selectedDataType);
    document.querySelector("title").innerHTML = `${symbol} Stock Data`;
    document.querySelector("h1").innerHTML = `${symbol} Stock Data`;
  } catch (error) {
    alert("Failed to fetch stock data:", error);
  }
}

// SUBMIT 버튼 클릭 시 데이터(헤더 title과 페이지 제목 등 DOM 요소, 날짜, 심볼 등 포함)를 동적으로 업데이트, 예외처리
document.getElementById("loadDataButton").addEventListener("click", () => {
  const inputSymbol = document.querySelector("#stockSymbol").value;
  const startDateInput = document.querySelector("#startDate").value;
  const endDateInput = document.querySelector("#endDate").value;
  if (inputSymbol) {
    symbol = inputSymbol.toUpperCase();
    if (startDateInput) {
      startDate = Math.floor(new Date(startDateInput).getTime() / 1000);
      loadStockData();
    } else {
      alert("Please Set a Start Date.");
    }
  } else {
    alert("Please Enter a Stock Ticker.");
  }
});

// datepicker(날짜 입력 필드)의 초기값 설정
document.getElementById("startDate").valueAsDate = new Date(
  Date.now() - ONE_WEEK_MS
);
document.getElementById("endDate").valueAsDate = new Date();

// datepicker에서 값 선택 시 반영해 loadStockData() 재실행
document.getElementById("startDate").addEventListener("input", () => {
  const startDateInput = document.querySelector("#startDate").value;
  if (startDateInput) {
    startDate = Math.floor(new Date(startDateInput).getTime() / 1000);
  }
});
document.getElementById("endDate").addEventListener("input", () => {
  const endDateInput = document.querySelector("#endDate").value;
  if (endDateInput) {
    endDate = Math.floor(new Date(endDateInput).getTime() / 1000);
  }
});

document.getElementById("dataType").addEventListener("change", () => {
  loadStockData();
});

// 웹 페이지 로드 시 loadStockData() 실행(화면에 데이터 출력)
document.addEventListener("DOMContentLoaded", loadStockData);