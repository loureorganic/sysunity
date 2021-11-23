
var label = document.getElementById("label1");
var label1 = document.getElementById("label2");
var item = document.getElementById('unique');
var select1 = document.createElement('select');

export default class databasecreateproduction{

    secondData(data){
      const firebaseref = firebase.database().ref("product");
      console.log(select1)
      if (select1.hasChildNodes){
        select1.innerHTML = '';
      }
      firebaseref.once('value', function(all){
        select1.setAttribute('id', 'unique');
        Object.keys(all.val()[data]).find((a)=>{
          console.log(a)
          let dados = "<option " + "id="+ a +" >" + a + "</option>"
          select1.innerHTML += dados;
          label1.appendChild(select1);
        })
    })
    
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

   signup(){ 

    const database = firebase.database();
    let newClientKey = database.ref().child('production').push().key;
    database.ref('production/'+newClientKey+'/batch').set("Kibe");
    database.ref('production/'+newClientKey+'/batch').set("Carne");
    database.ref('production/'+newClientKey+'/time').set(90);
    database.ref('production/'+newClientKey+'/lastname').set(1259);
    database.ref('production/'+newClientKey+'/unity').set(3);
    database.ref('production/'+newClientKey+'/packages').set(20);
   }
}