const express = require("express");
const session = require("express-session");

const app = express();
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

// console.log(app.get("env"));

// require("dotenv").config({ path: "mysql/.env" });
require("dotenv").config({ path: `mysql/.env.${app.get("env")}` });
console.log(process.env);
const mysql = require("./mysql");

require("dotenv").config({ path: `nodemailer/.env.${app.get("env")}` });
const nodemailer = require("./nodemailer");

app.use("/static/images", express.static("public/images"));

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

let sess = {
  secret: "secret key",
  resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie 해도 쿠키 정보를 볼 수 없음
    secure: false, // https
    maxAge: 1000 * 60 * 60, // 쿠키가 유지되는 시간(60분)
  },
};

app.use(session(sess));

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 파일명 만드는 함수
const generator = (time, index) => {
  if (!time) return "file.log";

  const yearmonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearmonth}/${yearmonth}${day}-${hour}${minute}-${index}-file.log`;
};

const accessLogStream = rfs.createStream(generator, {
  interval: "1d", // 1d 면 하루단위, 실무에서는 주로 하루단위로
  size: "10M",
  path: path.join(__dirname, "log"), // 어디에 만드느냐
});

// app.use(morgan("combined", { stream: accessLogStream }));
app.use(
  morgan("combined", {
    // combined는 로그를 남기는 폼 같은건데..그냥 쓰면 됨
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장
  },
});

// multer라는 애로 파일 업로드 할건데 그때 스토리지는 이렇게 정의된 얘를 쓸거야
const imageUpload = multer({ storage: imageStorage });

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장
  },
});

// multer라는 애로 파일 업로드 할건데 그때 스토리지는 이렇게 정의된 얘를 쓸거야
const fileUpload = multer({ storage: fileStorage });

const productRoute = require("./routes/product");
app.use("/api/product", productRoute);

// app.post("/login", (req, res) => {
//   const { email, pw } = req.body.param;
//   // 데이터베이스에 사용자가 있는지, 비밀번호는 맞는지 체크
//   req.session.email = email;
//   req.session.isLogined = true;
//   req.session.save((err) => {
//     if (err) throw err;

//     res.send(req.session);
//   });
// });

// app.post("/logout", (req, res) => {
//   if (req.session.email) {
//     req.session.destroy();
//     res.redirect("/login");
//   }
// });

// // 모든 라이터 마다  if(!req.session.email){
// //     res.redirect("/login")
// //   }하는 것은 비효율 적임,
// // 어떤 요청이 들어오더라도 로그인 상태인지 체크하도록 함!
// app.all("*", (req, res, next) => {
//   // all은 get, post, put, delete모든 것을 아우르는 것
//   // 파라미터 next사용
//   // 모든 라우터 앞에 이부분이 실행되고 로그인 되었으면 next통해서 다음 코드로 넘어감
//   if (req.session.email) {
//     console.log(req.cookies);
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

app.get("/api/file/:filename", (req, res) => {
  const file = "./uploads/" + req.params.filename;
  try {
    if (fs.existsSync(file)) {
      res.download(file);
    } else {
      res.send("요청한 파일이 존재하지 않습니다.");
    }
  } catch (e) {
    console.log(e);
    res.send("파일을 다운로드 하는 중 에러가 발생했습니다.");
  }
});

// multer는 순서가 path와 함수 사이에
app.post(
  "/api/upload/file",
  fileUpload.single("attachment"),
  async (req, res) => {
    const fileInfo = {
      product_id: parseInt(req.body.product_id),
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      filename: req.file.filename,
      path: req.file.path,
    };

    res.send(fileInfo);
  }
);

app.post(
  "/api/upload/image    ",
  imageUpload.single("attachment"),
  async (req, res) => {
    const fileInfo = {
      product_id: parseInt(req.body.product_id),
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      filename: req.file.filename,
      path: req.file.path,
    };

    res.send(fileInfo);
  }
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
