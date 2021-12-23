var dados = "";
var var_lista = document.getElementById("tablebody");

export default class databaseStorage{

    // CRIACAO DA TABELA
  managementstorage() {
    
    var self = this;
    const firebaserefproduction =firebase.database().ref("production");
    const firebaserefstorage = firebase.database().ref("storage");
    const database = firebase.database();
    let storageGeneral = []
    firebaserefstorage.once('value', function(all){
      all.forEach((storageItem)=>{
        storageGeneral.push(storageItem.val());
      })
    })
    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaserefproduction.once('value', function(all){
      console.log(storageGeneral)
      let arrayItems = [];
      let arrayItemsFiltered = [];
      all.forEach(
        function(curecord){
       arrayItems.push(curecord.val());
          // var usuario = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');

          dados =
          "<td>" + usuario.product + "</td>" + "<td>" + usuario.type + "</td>" + "<td>" + usuario.total + "</td>" + "<td>" + usuario.totalValue + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);

        })


        arrayItemsFiltered = arrayItems.filter(function(item, pos) {
          return arrayItems.indexOf(item) == pos})
        //cadastrar arrayItemsFiltered  no storage.
        storageGeneral.map((itemStorage) =>{
          let value = 0;
          arrayItems.map((itemArr)=>{

            if(itemStorage.name == itemArr.product){
              value = value + itemArr.totalquantity;
              // console.log(itemArr.totalquantity)
              console.log(value);
              //database.ref('storage/'+itemStorage+"/totalStorage").set(value);
            }
          })
          if(itemStorage){
            
            database.ref('storage/'+itemStorage.name+"/totalStorage").set(value);
          }
        })


        arrayItemsFiltered.map((item) =>{
          arrayItems.map((itemStorage) =>{

            if (item.product === itemStorage){
    
              if(item.batch === itemStorage.batch){

              }
            }
            else{
              let newStorageKey = database.ref().child('storage').push().key;
              database.ref('storage/'+item.product+"/name").set(item.product);
              // if(item)
              // database.ref('storage/'+item.product)
              
            }


          })  
          
        })
        
    })

  
  }

}