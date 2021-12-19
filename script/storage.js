import databaseuser from "./database/databaseUser.js";
import databasestorage from "./database/databaseStorage.js";

const estoque = new databasestorage();
estoque.managementstorage();

const dados = new databaseuser();
dados.objectuser();