// npm install mongodb 설치

const { MongoClient, ObjectId } = require("mongodb");
let mongoDB = null;

// ()(); 즉시 실행함수, 함수를 호출하지 않더라도 실행
(async function () {
  const urlMongoDB = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?maxPoolSize=${process.env.MONGODB_LIMIT}`;
  const client = new MongoClient(urlMongoDB, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("MongoDB에 정상적으로 접속되었습니다.");
    mongoDB = client.db(process.env.MONGODB_DB);
  } catch (err) {
    console.log(err);
  }
})();

// find함수 선언
const find = async (collectionName, condition = {}) => {
  const r = await mongoDB.collection(collectionName).find(condition).toArray(); // 일단은 무조건 collection에 접속해야 함.
  return r;
};

const findById = async (collectionName, _id) => {
  const r = await mongoDB
    .collection(collectionName)
    .findOne({ _id: ObjectId(_id) });
  return r;
};

const insertOne = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertOne(data); // data는 오브젝트 형식
  return r;
};

const insertMany = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertMany(data);
  return r;
};

const updateById = async (collectionName, data, _id) => {
  const r = await mongoDB.collection(collectionName).updateOne(
    { _id: ObjectId(_id) }, // id를 찾는다
    { $set: data, $currentDate: { lastModified: true } } // 형식 암기하기, lastModified최종 수정보이게 true
  );
  return r;
};

const updateMany = async (collectionName, data, condition) => {
  const r = await mongoDB.collection(collectionName).updateMany(condition, {
    $set: data,
    $currentDate: { lastModified: true },
  });
  return r;
};

const deleteById = async (collectionName, _id) => {
  const r = await mongoDB
    .collection(collectionName)
    .deleteOne({ _id: ObjectId(_id) });
  return r;
};

const deleteMany = async (collectionName, condition) => {
  // {"email": /@gmail/}
  const r = await mongoDB.collection(collectionName).deleteMany(condition);
  return r;
};

module.exports = {
  find,
  findById,
  insertOne,
  insertMany,
  updateById,
  updateMany,
  deleteById,
  deleteMany,
};
