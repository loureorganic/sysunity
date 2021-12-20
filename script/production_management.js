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

/**
 * Sorts a HTML table. -> Classifica uma tabela HTML.
 * 
 * @param {HTMLTableElement} table The table to sort -> A tabela a ser classificada
 * @param {Number} column The index of the column to sort -> O índice da coluna a classificar
 * @param {Boolean} asc Determines if the sorting will be in ascending  -> Determina se a classificação será em ordem crescente
 */

 function sortTableByColumn(table, column, asc = true){
  const dirModifier = asc ? 1: -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row -> classificar cada linha
  const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();     
      const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();     
      
      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });
   
  // Remove all existing TRs from the table -> Remova todos os TRs existentes da tabela
  while(tBody.firstChild){
      tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows -> Adicionar novamente as linhas recém-classificadas
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll("#myTable th").forEach(headerCell =>{
  headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);

      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});