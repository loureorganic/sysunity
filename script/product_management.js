import databaseuser from "./database/databaseUser.js";
import databasemanagementproduct from "./database/databaseManagement-product.js";

const managementproduct = new databasemanagementproduct();
managementproduct.managementproduct();
const dados = new databaseuser();
dados.objectuser();