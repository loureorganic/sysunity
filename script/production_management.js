import databaseuser from "./database/databaseUser.js";
import databasemanagementproduction from "./database/databaseManagement-production.js";

const managementproduction = new databasemanagementproduction();
managementproduction.managementproduction();
console.log(document.getElementById('suc'));
let data = document.getElementById('suc');
console.log(document.getElementById('a'))
document.getElementById('a').addEventListener('click', function(){
  console.log('a');
  managementproduction.managementproduction();
});
const dados = new databaseuser();
dados.objectuser();