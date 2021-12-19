var dados = "";
var var_lista = document.getElementById("tablebody");

export default class databaseStorage{

    // CRIACAO DA TABELA
  managementstorage() {
    
    var self = this;

    const firebaseref = firebase.database().ref("storage");

    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaseref.once('value', function(all){

      all.forEach(

        function(curecord){
          
          var usuario = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');

          dados =
          "<td>" + usuario.product + "</td>" + "<td>" + usuario.type + "</td>" + "<td>" + usuario.total + "</td>" + "<td>" + usuario.totalValue + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);

        })
    })

  }

}