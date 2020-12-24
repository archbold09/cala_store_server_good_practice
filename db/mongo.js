const mongoose = require("mongoose");
const { config } = require("../config/");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class Mongoose {
  constructor() {
    this.client = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  async connect() {
    try {
      await this.client.then(
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        () => {
          console.log(`Connect succesfully to mongo: ${this.dbName}`);
        },
        /** handle initial connection error */
        (err) => {
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(schema) {
    try {
      return await schema.find()
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}
module.exports = Mongoose;
