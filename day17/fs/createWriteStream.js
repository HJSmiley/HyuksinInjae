const fs = require("fs");

// const writeStream = fs.createWriteStream("./writeme2.txt");
// writeStream.on("finish", () => {
//   console.log("파일 쓰기 완료");
// });

// writeStream.write("이 글을 씁니다.\n");
// writeStream.write("한 번 더 씁니다.");
// writeStream.end();

// 문제 : 아래와 같은 모양을 writeme2-1.txt에 저장하시오.

// 00001;
// 00011;
// 00111;
// 01111;
// 11111;

const writeStream = fs.createWriteStream("./writeme2-1.txt");
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j < 4 - i) {
      writeStream.write("0");
    } else {
      writeStream.write("1");
    }
  }
  writeStream.write("\n");
}
writeStream.end();
