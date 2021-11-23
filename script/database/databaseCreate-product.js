var dados = ""
var label = document.getElementById('label1');
var select = document.getElementById("selectNameProduto")
export default class databasecreateproduct{

    createproduct(name, type, value){
        const database = firebase.database();
        let active = false;
        let newProductKey = database.ref().child('product').push().key;
        database.ref('product/'+name).set(name);
        database.ref('product/'+name+'/'+type).set(type);
        database.ref('product/'+name+'/'+type+'/value').set(value);

        window.location.reload(active);
    }

    creatoption(optionselected, type, value){
        const database = firebase.database();
        let active = false;
        database.ref('product/'+optionselected+'/'+type).set(type);
        database.ref('product/'+optionselected+'/'+type+'/value').set(value);
        window.location.reload(active);
    }

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