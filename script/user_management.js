import databaseuser from "./database/databaseUser.js";
import databasemanagementuser from "./database/databaseManagement-user.js";

const gerenciar = new databasemanagementuser;
gerenciar.managementuser();
const dados = new databaseuser();
dados.objectuser();
