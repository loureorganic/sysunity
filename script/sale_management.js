import databaseuser from "./database/databaseUser.js";
import management from "./database/databaseManagement-sale.js";

const venda = new management();
venda.managementsale();
const dados = new databaseuser();
dados.objectuser();