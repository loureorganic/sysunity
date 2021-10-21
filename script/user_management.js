import databaseuser from "./database/databaseUser.js";
import databasemanagementuser from "./database/databaseManagement-user.js";

const tl = new databasemanagementuser;
tl.managementuser();
tl.test();
const dados = new databaseuser();
dados.objectuser();
