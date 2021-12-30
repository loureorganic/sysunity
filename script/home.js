import databaseuser from "./database/databaseUser.js";
import databasehome from "./database/databaseHome.js";
const dados = new databaseuser();
dados.objectuser();
dados.objectinitial();
const databaseHome = new databasehome();

databaseHome.homePackage();
