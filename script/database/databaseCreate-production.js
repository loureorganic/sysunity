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

    let today = new Date();
    let cadastrationDate = today.toLocaleDateString();
    let cadastrationHour = today.toLocaleTimeString();
    let a;
    let cab;

    let newtotal;
    let newtotalVal;
    let newty;
    let newpro;

    let oldpro;
    let oldtotalVal;
    let oldty;
    let oldtotal;

    let authUser = localStorage.getItem("id");

    const pfirebaseref = firebase.database().ref("product");
    const firebaseref = firebase.database().ref("user");
    const sfirebaseref = firebase.database().ref("storage");

    pfirebaseref.once('value', function(all){

      let abe = all.val()[production.product];

      Object.keys(abe).forEach(function(item) {

        cab = abe[item].value;
      })
    })

    firebaseref.once('value').then(function (snapshot) {

      snapshot.forEach(element => {

        if(element.key === authUser)
        {
          a = element;
        }
      });

      const database = firebase.database();
      let newClientKey = database.ref().child('production').push().key;
      database.ref('production/'+newClientKey+'/product').set(production.product);
      database.ref('production/'+newClientKey+'/type').set(production.type);
      database.ref('production/'+newClientKey+'/validate').set(production.days);
      database.ref('production/'+newClientKey+'/initialdatavalidate').set(production.initialdatavalidate);
      database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
      database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
      database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
      database.ref('production/'+newClientKey+'/cadastrationDate').set(cadastrationDate);
      database.ref('production/'+newClientKey+'/cadastrationHour').set(cadastrationHour);
      database.ref('production/'+newClientKey+'/batch').set(production.batch);
      database.ref('production/'+newClientKey+'/value').set(cab);
      database.ref('production/'+newClientKey+'/user').set(a.key);

      sfirebaseref.once('value').then(function (resultado) {

        resultado.forEach(element => {
  
          if(element.child("product").val() == production.product && element.child("type").val() == production.type) {
  
            const database = firebase.database();
  
            oldpro = element.child("product").val();
            oldty = element.child("type").val();
            oldtotalVal = element.child("totalValue").val();
            oldtotal = element.child("total").val();

            console.log(oldpro, oldty, oldtotalVal, oldtotal)
  
            database.ref('storage/' + element.key).remove();
  
            newpro = production.product;
            newty = production.type;
            newtotal = production.totalquantity;
            newtotalVal = production.totalquantity * cab;

            console.log(newpro, newty, newtotalVal, newtotal)
  
            let newClientKey4 = database.ref().child('storage').push().key;
            database.ref('storage/'+newClientKey4+'/product').set(newpro);
            database.ref('storage/'+newClientKey4+'/type').set(newty);
            database.ref('storage/'+newClientKey4+'/total').set(newtotal + oldtotal);
            database.ref('storage/'+newClientKey4+'/totalValue').set(newtotalVal + oldtotalVal);
  
          }
          
        })
      })

      let newClientKey2 = database.ref().child('user').push().key;
      database.ref('historic/'+newClientKey2+'/userAction').set(authUser);
      database.ref('historic/'+newClientKey2+'/date').set(cadastrationDate);
      database.ref('historic/'+newClientKey2+'/hour').set(cadastrationHour);
      database.ref('historic/'+newClientKey2+'/action').set("cadastrarProduction");

    });
    
    this.clickImprimir2(production);
   }

   validateProduction(production){

    let a;
    let authUser = localStorage.getItem("id");
    const firebaseref = firebase.database().ref("user");

    firebaseref.once('value').then(function (snapshot) {

      snapshot.forEach(element => {

        let authUser = localStorage.getItem("id");

        if(element.key === authUser)
        {
          a = element;
        }
      });

      let active = false;
      let today = new Date();
      let cadastrationDate = today.toLocaleDateString();
      let cadastrationHour = today.toLocaleTimeString();
    
      const database = firebase.database();
      let newClientKey = database.ref().child('production').push().key;
      database.ref('production/'+newClientKey+'/product').set(production.product);
      database.ref('production/'+newClientKey+'/type').set(production.type);
      database.ref('production/'+newClientKey+'/fabricationdate').set(production.fabrication);
      database.ref('production/'+newClientKey+'/deadlinedate').set(production.deadline);
      database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
      database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
      database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
      database.ref('production/'+newClientKey+'/cadastrationDate').set(cadastrationDate);
      database.ref('production/'+newClientKey+'/cadastrationHour').set(cadastrationHour);
      database.ref('production/'+newClientKey+'/batch').set(production.batch);
      database.ref('production/'+newClientKey+'/user').set(a.key);

      // let today = new Date();
      let authUser = localStorage.getItem("id");
      // let cadastrationDate = today.toLocaleDateString();
      // let cadastrationHour = today.toLocaleTimeString();
      let newClientKey2 = database.ref().child('user').push().key;

      database.ref('historic/'+newClientKey2+'/userAction').set(authUser);
      database.ref('historic/'+newClientKey2+'/date').set(cadastrationDate);
      database.ref('historic/'+newClientKey2+'/hour').set(cadastrationHour);
      database.ref('historic/'+newClientKey2+'/action').set("deletarProduct");

    });

    this.clickImprimir(production);
  }

  clickImprimir(production) {

    let active = false;

    const modal = document.getElementById("modal-reg");

    if(modal){

      modal.classList.add('mostrar');

      modal.addEventListener("click", (e) => {

        if(e.target.id == "modal-reg" || e.target.className == 'fechar'){

          modal.classList.remove('mostrar');
          window.location.reload(active);

        } else if(e.target.id == 'confirm') {

          // CAPTURAR O PRODUTO, O TIPO, O LOTE, A DATA DE PRODUCAO, A DATA DE VENCIMENTO E A UNIDADE
          // const doc = new jsPDF()

          
          const doc = new jsPDF("portrait","mm",[210,297])
          doc.setFont("helvetica")
          doc.setFontStyle("normal")
          doc.setFontSize(11)
          doc.text("Produto: " + production.product + " de " + production.type, 10, 10)
          doc.text("Data de produção: " + production.fabrication, 10, 20)
          doc.text("Data de produção: " + production.deadline, 10, 30)
          doc.text("Unidades: " + production.totalquantity, 10, 40)
          doc.text("Lote: " + production.batch, 10, 50)          
          doc.save("bilhete-producao");
          // doc.autoPrint();
          // doc.output("dataurlnewwindow");

          window.location.reload(active);
        }
      })
    }
  }

  clickImprimir2(production) {

    let active = false;

    const modal = document.getElementById("modal-reg");

    if(modal){

      modal.classList.add('mostrar');

      modal.addEventListener("click", (e) => {

        if(e.target.id == "modal-reg" || e.target.className == 'fechar'){

          modal.classList.remove('mostrar');
          window.location.reload(active);

        } else if(e.target.id == 'confirm') {

          // CAPTURAR O PRODUTO, O TIPO, O LOTE, A DATA DE PRODUCAO, A DATA DE VENCIMENTO E A UNIDADE
          // const doc = new jsPDF()

          
          const doc = new jsPDF("portrait","mm",[210,297])
          doc.setFont("helvetica")
          doc.setFontStyle("normal")
          doc.setFontSize(11)
          doc.text("Produto: " + production.product + " de " + production.type, 10, 10)
          doc.text("Validade: " + production.days, 10, 20)
          doc.text("Unidades: " + production.totalquantity, 10, 30)
          doc.text("Lote: " + production.batch, 10, 40)          
          doc.save("bilhete-producao");
          // doc.autoPrint();
          // doc.output("dataurlnewwindow");

          window.location.reload(active);
        }
      })
    }
  }
}








// var label = document.getElementById("label1");
// var label1 = document.getElementById("label2");
// var item = document.getElementById('unique');
// var select1 = document.createElement('select');

// export default class databasecreateproduction{

//   secondData(data){
    
//     const firebaseref = firebase.database().ref("product");

//     if (select1.hasChildNodes){
//       select1.innerHTML = '';
//     }

//     firebaseref.once('value', function(all){

//       select1.setAttribute('id', 'unique1');

//       Object.keys(all.val()[data]).find((a)=>{

//         let dados = "<option " + "id="+ a +" >" + a + "</option>"
//         select1.innerHTML += dados;
//         label1.appendChild(select1);

//       })
//     })
//   }

//   data(){

//     const firebaseref = firebase.database().ref("product");

//     firebaseref.once('value', function(all){

//       var select = document.createElement('select');
//       select.setAttribute('id', 'unique');

//       Object.keys(all.val()).map((keyname)=> {
//         var dados2 = "<option " + "id="+keyname +" >" + keyname + "</option>"
//         select.innerHTML += dados2;
//         label.appendChild(select);
//       })
//     })
//   }

//    daysProduction(production){

//     let today = new Date();
//     let cadastrationDate = today.toLocaleDateString();
//     let cadastrationHour = today.toLocaleTimeString();
//     let a;
//     let cab;
//     let authUser = localStorage.getItem("id");

//     const pfirebaseref = firebase.database().ref("product");
//     const firebaseref = firebase.database().ref("user");

//     pfirebaseref.once('value', function(all){

//       let abe = all.val()[production.product];

//       Object.keys(abe).forEach(function(item) {

//         cab = abe[item].value;
//       })
//     })

//     firebaseref.once('value').then(function (snapshot) {

//       snapshot.forEach(element => {

//         if(element.key === authUser)
//         {
//           a = element;
//         }
//       });

//       const database = firebase.database();
//       let newClientKey = database.ref().child('production').push().key;
//       database.ref('production/'+newClientKey+'/product').set(production.product);
//       database.ref('production/'+newClientKey+'/type').set(production.type);
//       database.ref('production/'+newClientKey+'/validate').set(production.days);
//       database.ref('production/'+newClientKey+'/initialdatavalidate').set(production.initialdatavalidate);
//       database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
//       database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
//       database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
//       database.ref('production/'+newClientKey+'/cadastrationDate').set(cadastrationDate);
//       database.ref('production/'+newClientKey+'/cadastrationHour').set(cadastrationHour);
//       database.ref('production/'+newClientKey+'/batch').set(production.batch);
//       database.ref('production/'+newClientKey+'/value').set(cab);
//       database.ref('production/'+newClientKey+'/user').set(a.key);

//       let newClientKey2 = database.ref().child('user').push().key;
//       database.ref('historic/'+newClientKey2+'/userAction').set(authUser);
//       database.ref('historic/'+newClientKey2+'/date').set(cadastrationDate);
//       database.ref('historic/'+newClientKey2+'/hour').set(cadastrationHour);
//       database.ref('historic/'+newClientKey2+'/action').set("cadastrarProduction");

//     });
    
//     this.clickImprimir2(production);
//    }

//    validateProduction(production){

//     let today = new Date();
//     let cadastrationDate = today.toLocaleDateString();
//     let cadastrationHour = today.toLocaleTimeString();
//     let a;
//     let authUser = localStorage.getItem("id");
//     const firebaseref = firebase.database().ref("user");

//     firebaseref.once('value').then(function (snapshot) {

//       snapshot.forEach(element => {
//         if(element.key === authUser)
//         {
//           a = element;
//         }
//       });

//       let active = false;
    
//       // const database = firebase.database();
//       // let newClientKey = database.ref().child('production').push().key;
//       // database.ref('production/'+newClientKey+'/product').set(production.product);
//       // database.ref('production/'+newClientKey+'/type').set(production.type);
//       // database.ref('production/'+newClientKey+'/fabricationdate').set(production.fabrication);
//       // database.ref('production/'+newClientKey+'/deadlinedate').set(production.deadline);
//       // database.ref('production/'+newClientKey+'/packagequantity').set(production.packagequantity);
//       // database.ref('production/'+newClientKey+'/packageperunity').set(production.packageperunity);
//       // database.ref('production/'+newClientKey+'/totalquantity').set(production.totalquantity);
//       // database.ref('production/'+newClientKey+'/cadastrationDate').set(cadastrationDate);
//       // database.ref('production/'+newClientKey+'/cadastrationHour').set(cadastrationHour);
//       // database.ref('production/'+newClientKey+'/batch').set(production.batch);
//       // database.ref('production/'+newClientKey+'/user').set(a.key);

//       // let today = new Date();
//       // let authUser = localStorage.getItem("id");
//       // let cadastrationDate = today.toLocaleDateString();
//       // let cadastrationHour = today.toLocaleTimeString();
//       // let newClientKey2 = database.ref().child('user').push().key;
//       // database.ref('historic/'+newClientKey2+'/userAction').set(authUser);
//       // database.ref('historic/'+newClientKey2+'/date').set(cadastrationDate);
//       // database.ref('historic/'+newClientKey2+'/hour').set(cadastrationHour);
//       // database.ref('historic/'+newClientKey2+'/action').set("deletarProduct");

//     });

//     this.clickImprimir(production);
//   }

//   clickImprimir(production) {

//     const modal = document.getElementById("modal-note");
//     let active = false;

//     if(modal){

//       modal.classList.add('mostrar');

//       modal.addEventListener("click", (e) => {

//         if(e.target.id == modal || e.target.className == 'fechar'){

//           modal.classList.remove('mostrar');
//           window.location.reload(active);

//         }
//         if(e.target.id == 'deny') {

//           modal.classList.remove('mostrar');
//           window.location.reload(active);
          
//         }
//         else if(e.target.id == 'confirm') {

//           // CAPTURAR O PRODUTO, O TIPO, O LOTE, A DATA DE PRODUCAO, A DATA DE VENCIMENTO E A UNIDADE
//           // const doc = new jsPDF()

          
//           const doc = new jsPDF("portrait","mm",[210,297])
//           doc.setFont("helvetica")
//           doc.setFontStyle("normal")
//           doc.setFontSize(11)
//           doc.text("Produto: " + production.product + " de " + production.type, 10, 10)
//           doc.text("Data de produção: " + production.fabrication, 10, 20)
//           doc.text("Data de produção: " + production.deadline, 10, 30)
//           doc.text("Unidades: " + production.totalquantity, 10, 40)
//           doc.text("Lote: " + production.batch, 10, 50)          
//           doc.save("bilhete-producao");
//           // doc.autoPrint();
//           // doc.output("dataurlnewwindow");

//           window.location.reload(active);
//         }
//       })
//     }
//   }

//   clickImprimir2(production) {

//     const modal = document.getElementById("modal-note");
//     let active = false;

//     if(modal){

//       modal.classList.add('mostrar');

//       modal.addEventListener("click", (e) => {

//         if(e.target.id == modal || e.target.className == 'fechar'){

//           modal.classList.remove('mostrar');
//           window.location.reload(active);

//         }
//         if(e.target.id == 'deny') {
//           modal.classList.remove('mostrar');
//           window.location.reload(active);
//         }
//         else if(e.target.id == 'confirm') {

//           // CAPTURAR O PRODUTO, O TIPO, O LOTE, A DATA DE PRODUCAO, A DATA DE VENCIMENTO E A UNIDADE
//           // const doc = new jsPDF()

          
//           const doc = new jsPDF("portrait","mm",[210,297])
//           doc.setFont("helvetica")
//           doc.setFontStyle("normal")
//           doc.setFontSize(11)
//           doc.text("Produto: " + production.product + " de " + production.type, 10, 10)
//           doc.text("Validade: " + production.days, 10, 20)
//           doc.text("Unidades: " + production.totalquantity, 10, 30)
//           doc.text("Lote: " + production.batch, 10, 40)          
//           doc.save("bilhete-producao");
//           // doc.autoPrint();
//           // doc.output("dataurlnewwindow");

//           window.location.reload(active);
//         }
//       })
//     }
//   }
   
// }