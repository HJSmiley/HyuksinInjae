const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
let symbol = "TSLA";
let startDate = Math.floor((Date.now() - ONE_WEEK_MS) / 1000); // One week ago in UNIX timestamp
let endDate = Math.floor(Date.now() / 1000); // Current date in UNIX timestamp

async function getStockData(url) {
  const proxyUrl = `http://cors-anywhere.herokuapp.com/${url}`; // just to bypass CORS cross-check
  // console.log(proxyUrl)    <= check the URL
  // your code to get csv data from the yahoo
  let response = await fetch(proxyUrl).then((response) => {
    return response.text();
  });
  return response;
}

function parseCSVData(csvData) {
  // your code to get csv data to a list of objects {date; '2024-06-11', open: '173.123121', ... }
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
  // your code to insert table body to existing yahoo.html
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

async function loadStockData() {
  const URL = `https://query1.finance.yahoo.com/v7/finance/download/${symbol}?period1=${startDate}&period2=${endDate}&interval=1d&events=history`;
  try {
    const csvData = await getStockData(URL);
    const stockData = parseCSVData(csvData);
    populateStockTable(stockData);
    document.querySelector("title").innerHTML = `${symbol} Stock Data`;
    document.querySelector("h1").innerHTML = `${symbol} Stock Data`;
  } catch (error) {
    alert("Failed to fetch stock data:", error);
  }
}

// SUBMIT 버튼 제출 시 실행
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
    alert("Please Enter a Stock Symbol.");
  }
});

// datepicker의 초기값 설정
document.getElementById("startDate").valueAsDate = new Date(
  Date.now() - ONE_WEEK_MS
);
document.getElementById("endDate").valueAsDate = new Date();

// datepicker에서 값 선택 시 반영
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

// 웹 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", loadStockData);