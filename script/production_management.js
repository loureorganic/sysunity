import databaseuser from "./database/databaseUser.js";
import databasemanagementproduction from "./database/databaseManagement-production.js";

const managementproduction = new databasemanagementproduction();
managementproduction.managementproduction();

const dados = new databaseuser();
dados.objectuser();

let data = document.getElementById('suc');

document.getElementById('a').addEventListener('click', function(){
  managementproduction.managementproduction();
});
