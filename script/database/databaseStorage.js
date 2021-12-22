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
          // var usuario = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');

          dados =
          "<td>" + usuario.product + "</td>" + "<td>" + usuario.type + "</td>" + "<td>" + usuario.total + "</td>" + "<td>" + usuario.totalValue + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);

        })
        console.log(arrayItems);
        arrayItemsFiltered = arrayItems.filter(function(item, pos) {
          return arrayItems.indexOf(item) == pos})
        console.log(arrayItemsFiltered);
        //cadastrar arrayItemsFiltered  no storage.
        
    })

  }

}