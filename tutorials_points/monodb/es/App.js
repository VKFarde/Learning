const { mongoclient } = require("mongodb");
const uri = require("./atlas_url");

console.log(uri);
const client = new mongoclient(uri);
const dbname = "bank";

const connectToDatabase = async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

main();
