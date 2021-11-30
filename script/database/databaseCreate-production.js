
var label = document.getElementById("label1");
var label1 = document.getElementById("label2");
var item = document.getElementById('unique');
var select1 = document.createElement('select');

export default class databasecreateproduction{

    secondData(data){
      const firebaseref = firebase.database().ref("product");
      if (select1.hasChildNodes){
        select1.innerHTML = '';
      }
      firebaseref.once('value', function(all){
        select1.setAttribute('id', 'unique1');
        Object.keys(all.val()[data]).find((a)=>{
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

   daysProduction(production){ 
    const database = firebase.database();
    let newClientKey = database.ref().child('production').push().key;
    database.ref('production/'+newClientKey+'/product').set(production.product);
    database.ref('production/'+newClientKey+'/type').set(production.type);
    database.ref('production/'+newClientKey+'/validate').set(production.days);
    database.ref('production/'+newClientKey+'/initialdatavalidate').set(production.initialdatavalidate);
    database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
    database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
    database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
   }

   validateProduction(production){
    const database = firebase.database();
    let newClientKey = database.ref().child('production').push().key;
    database.ref('production/'+newClientKey+'/product').set(production.product);
    database.ref('production/'+newClientKey+'/type').set(production.type);
    database.ref('production/'+newClientKey+'/fabricationdate').set(production.fabrication);
    database.ref('production/'+newClientKey+'/deadlinedate').set(production.deadline);
    database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
    database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
    database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
   }
}