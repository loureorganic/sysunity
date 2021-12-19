var dados = ""
var label = document.getElementById('label1');
var select = document.getElementById("selectNameProduto")
var boolean = false;
var boolean2 = false;
export default class databasecreateproduct{

  // CRIAÇÃO DO PRODUTO NO BANCO
  createproduct(name, type, value){

    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      Object.keys(all.val()).map((keyname)=> {
          
        if (keyname === name) {
          
          boolean = true;
          
        }
        
      })

      console.log(boolean)

      if(boolean == true) {

        alert("Esse produto já existe no banco de dados")

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

        const modal = document.getElementById("modal-reg");

        if(modal){

          modal.classList.add('mostrar');

          modal.addEventListener("click", (e) => {
            if(e.target.id == "modal-reg" || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
            }
            if(e.target.id == 'deny') {
            modal.classList.remove('mostrar');
            window.location.reload(active);
            }
          })
        }
      }
    })
  }

  // CRIAÇÃO DO TIPO
  creatoption(optionselected, type, value){

    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      let abe = all.val()[optionselected];

      // CRIACAO DO INPUT SABOR
      Object.keys(abe).find((a)=>{

        if (a === type) {
          
          boolean2 = true;
          
        }
      })

      if(boolean2 == true) {

        alert("Esse tipo já existe no banco de dados")

      } else {

        const database = firebase.database();
        let active = false;
        database.ref('product/'+optionselected+'/'+type).set(type);
        database.ref('product/'+optionselected+'/'+type+'/value').set(value);
        
        let today = new Date();
        let authUser = localStorage.getItem("id");
        let cadastrationDate = today.toLocaleDateString();
        let cadastrationHour = today.toLocaleTimeString();
        let newClientKey = database.ref().child('user').push().key;
        database.ref('historic/'+newClientKey+'/userAction').set(authUser);
        database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
        database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
        database.ref('historic/'+newClientKey+'/action').set("cadastrarProductOption");

        const modal = document.getElementById("modal-reg");

        if(modal){

          modal.classList.add('mostrar');

          modal.addEventListener("click", (e) => {
            if(e.target.id == "modal-reg" || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
            }
            if(e.target.id == 'deny') {
            modal.classList.remove('mostrar');
            window.location.reload(active);
            }
          })
        }

      }

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