import knex from "knex";
import path from "path";

//Criação da conexão do BD usando o  query Builder Knex
const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});
export default connection;
