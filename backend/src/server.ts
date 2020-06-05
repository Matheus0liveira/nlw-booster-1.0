import express from "express";
import cors from "cors";
import path from "path";
import { errors } from "celebrate";
import routes from "./routes";

const app = express();

//Configurando o express para receber dados json
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());
// Cadastro dos items para mostrar para o usuário
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
