let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Origin,X-Requested-With,Content-Type,Accept");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log("Listening on port:", port));
const { Client } = require("pg");
// const client = new Client({
//   user: "root",
//   password: "password",
//   database: "test",
//   port: 5432,
//   host: "localhost",
//   ssl: { rejectUnauthorized: false },
// });
const client = new Client({
  user: "mewqxtwbyorynw",
  password: "0b1851458183b37b4e0f7e3a1fa0aec0f0402232172e423ef0c813bf5a8e501c",
  database: "d7u25q3ovd74r5",
  port: 5432,
  host: "ec2-34-195-233-155.compute-1.amazonaws.com",
  ssl: { rejectUnauthorized: false },
});

client.connect(function (res, error) {
  // console.log(error, res);
  console.log(`Connected!!!`);
});
app.get("/connect", function (req, res, next) {
  const query = ` CREATE Table quiz(id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
  time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,error int)`;

  client.query(query, function (err, result) {
    if (err) {
      console.log(err); //always use console
      res.status(400).send(err);
    }

    res.status(200).send(result.rows);
    //client.end();
  });
});

app.post("/", function (req, res) {
  let body = { ...req.body };
  var query =
    `INSERT INTO quiz (name,error) VALUES ('` +
    body.name +
    `','` +
    body.errors +
    `')`;
  client.query(query, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send("Success");
  });
});
app.get("/data", function (req, res) {
  var query = `Select * from quiz`;
  client.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result.rows);
  });
});
