var dados = "";
var var_lista = document.getElementById("tablebody");

export default class databaseStorage{

    // CRIACAO DA TABELA
  managementstorage() {
    
    var self = this;
    const firebaserefproduction =firebase.database().ref("production");
    const firebaserefstorage = firebase.database().ref("storage");

    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaserefproduction.once('value', function(all){

      let arrayItems = [];
      let arrayItemsFiltered = [];
      all.forEach(
        function(curecord){
       arrayItems.push(curecord.val().product);
          // var usuario = curecord.val()

        })
        console.log(arrayItems);
        arrayItemsFiltered = arrayItems.filter(function(item, pos) {
          return arrayItems.indexOf(item) == pos})
        console.log(arrayItemsFiltered);
        arrayItemsFiltered.map((item)=>{
          var tr = document.createElement('tr');
          tr.classList.add('dot');


          dados =
          "<td>" + item + "</td>" + "<td>" + "</td>" + "<td>" + usuario.total + "</td>" + "<td>" + usuario.totalValue + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);
        })
        //cadastrar arrayItemsFiltered  no storage.
        
    })

  }

}