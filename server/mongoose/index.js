// npm install mongoose 설치

const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);

  mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`, // 첫번째 파라미터
    {
      dbName: process.env.MONGODB_DB, // 두번째 파라미터
    },
    (error) => {
      // 세번째 파라미터
      if (error) {
        console.log("MongoDB 연결 에러", error);
      } else {
        console.log("MongoDB 연결 성공");
      }
    }
  );
};

// 특정 이벤트 발생시 체크할 수 있는 함수가 있음. 몇 가지만 해볼게요
mongoose.connection.on("error", (error) => {
  // 에러가 발생하면 그 에러를 콜백함수에 넣어주는...
  console.log("MongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  // 연결이 끊겼을때 콜백함수로..
  console.log("MongoDB 연결이 종료되어 연결을 재시도 합니다.");
  connect(); // 다시 연결해야 하니까 connect함수 다시 호출
});

module.exports = {
  connect,
};
