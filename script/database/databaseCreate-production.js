
var label = document.getElementById("label1");
var label1 = document.getElementById("label2");
var item = document.getElementById('unique');
var item1 = document.getElementById('unique1');


export default class databasecreateproduction{
  
  
  
  secondData(data){
      console.log(document.getElementById("label1"));

      const firebaseref = firebase.database().ref("product");
      firebaseref.once('value', function(all){
        var select1 = document.createElement('select');
         Object.keys(all.val()[data]).find((a)=>{
          select1.setAttribute('id', 'unique');
          var dados = "<option " + "id="+ a +" >" + a + "</option>"
          select1.innerHTML += dados;
            label.appendChild(select1);
        })
    })}


    data(){
      const firebaseref = firebase.database().ref("product");
      firebaseref.once('value', function(all){
        var select = document.createElement('select');
        select.setAttribute('id', 'unique1');
        Object.keys(all.val()).map((keyname)=> {
          var dados2 = "<option " + "id="+keyname +" >" + keyname + "</option>"
          select.innerHTML += dados2;
          label.appendChild(select);
        })
    })
  }

   signup(){}
}