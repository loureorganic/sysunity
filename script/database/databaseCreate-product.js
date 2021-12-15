var dados = ""
var label = document.getElementById('label1');
var select = document.getElementById("selectNameProduto")
export default class databasecreateproduct{

  // CRIAÇÃO DO PRODUTO NO BANCO
  createproduct(name, type, value){

    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      Object.keys(all.val()).map((keyname)=> {
          
        if (keyname === name) {
          
          console.log("Esses produto já existe no banco de dados")
          
        }
        else {

          let newProductKey = database.ref().child('product').push().key;
          database.ref('product/'+name).set(name);
          database.ref('product/'+name+'/'+type).set(type);
          database.ref('product/'+name+'/'+type+'/value').set(value);

          let today = new Date();
          let authUser = localStorage.getItem("id");
          let cadastrationDate = today.toLocaleDateString();
          let cadastrationHour = today.toLocaleTimeString();
          let newClientKey = database.ref().child('user').push().key;
          database.ref('historic/'+newClientKey+'/userAction').set(authUser);
          database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
          database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
          database.ref('historic/'+newClientKey+'/action').set("cadastrarProduct");

          window.location.reload(active);
        }
      })
    })
  }

  // CRIAÇÃO DOS DADOS NO SELECT
  creatoption(optionselected, type, value){

    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      let abe = all.val()[optionselected];

      // CRIACAO DO INPUT SABOR
      Object.keys(abe).find((a)=>{
        console.log(a)

        if (a === type) {
          
          console.log("Esse tipo de produto já existe no banco de dados")
          
        }
        else {

          // const database = firebase.database();
          // let active = false;
          // database.ref('product/'+optionselected+'/'+type).set(type);
          // database.ref('product/'+optionselected+'/'+type+'/value').set(value);
          
          // let today = new Date();
          // let authUser = localStorage.getItem("id");
          // let cadastrationDate = today.toLocaleDateString();
          // let cadastrationHour = today.toLocaleTimeString();
          // let newClientKey = database.ref().child('user').push().key;
          // database.ref('historic/'+newClientKey+'/userAction').set(authUser);
          // database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
          // database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
          // database.ref('historic/'+newClientKey+'/action').set("cadastrarProductOption");

          // window.location.reload(active);
        }
      })
    })
  }

  // CRIAÇÃO DO SELECT
  data(){
    const firebaseref = firebase.database().ref("product");
    firebaseref.once('value', function(all){

      var select = document.createElement('select');
      select.setAttribute('id', 'unique');

      Object.keys(all.val()).map((keyname)=> {

        var dados2 = "<option " + "id="+keyname +" >" + keyname + "</option>"
        select.innerHTML += dados2;
        label.appendChild(select);

      })
    })
  }
    
}