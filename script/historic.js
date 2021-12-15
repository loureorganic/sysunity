import databaseuser from "./database/databaseUser.js";
import historic from "./database/databaseHistoric.js";

const historico = new historic();
historico.historic();

const dados = new databaseuser();
dados.objectuser();