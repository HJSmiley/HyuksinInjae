// const db = require("./models"); // 전체 db 객체를 가져옴
// const User = db.User; // db 객체에서 User 모델을 가져옴

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const { sequelize, User, Comment } = require("./models");
const { Op } = require("sequelize");

const exp = require("constants");

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), async () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
  // User.create({
  //   name: "zero",
  //   age: 24,
  //   married: false,
  //   comment: "자기소개1",
  // });
  // let data = await User.findAll({
  //   attributes: ["name", "married"],
  //   where: {
  //     [Op.or]: [{ married: 0 }, { age: { [Op.gt]: 30 } }],
  //   },
  // });
  // console.log(data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "DESC"]],
  // });
  // console.log("order => ", data);

  // data = await User.findAll({
  //   attributes: ["name", "married"],
  //   order: [["age", "DESC"]],
  //   limit: 1,
  // });
  // console.log("limit => ", data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "DESC"]],
  //   limit: 1,
  //   offset: 1,
  // });
  // console.log("offset => ", data);

  // User.update(
  //   {
  //     comment: "바꿀 내용",
  //   },
  //   { where: { id: 2 } }
  // );
  // User.destroy({
  //   where: { id: 2 },
  // });
  // let data = await User.findOne({});
  // console.log(data.name);
  let data = await User.findOne({
    include: [
      {
        model: Comment,
      },
    ],
  });
  console.log(data.Comments);
});
