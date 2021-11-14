var dados = "";
var test = document.getElementById("selectNomeProducao");

export default class databasecreateproduction{

    createproduction(){
        const firebaseref = firebase.database().ref("product");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                  var produto = curecord.val();
                  var option = document.createElement('option');
                  dados = produto.name;
        
                  option.innerHTML = dados;
                  test.appendChild(option);
                }
              )
        })
    }
}