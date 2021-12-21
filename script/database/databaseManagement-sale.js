var dados = "";
var var_lista = document.getElementById("tablebody");
var var_lista2 = document.getElementById("tablebody2");
var var_lista3 = document.getElementById("tablebody3");
var var_lista4 = document.getElementById("tablebody4");
var var_lista5 = document.getElementById("tablebody5");

// var td = document.createElement("td");
// var td2 = document.createElement("td");

var btnsee = '<button id="btnSee" class="button button2" ></button>';
var btnedit = '<button id="btnEdit" class="button button2" ></button>';
var btndelete = '<button id="btnDelete" class="button button2" ></button>';


export default class databasemanagementsale{

  // CRIACAO DA TABELA
  managementsale(){
    var self = this;

    const firebaseref = firebase.database().ref("sale");

    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaseref.once('value', function(all){
      all.forEach(
        function(curecord){
          var venda = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          dados =
          "<td id='dateVenda'>" + venda.date + "</td>" + "<td id='sellerVenda'>" + venda.seller + "</td>" + "<td id='totalVenda'>" + venda.totalGeneral + "</td>" +
          "<td>" + btnsee + btnedit + btndelete + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);
        }
      )
      
      // VALIDACAO DO MODAL CLICADO
      var everclass = document.querySelectorAll(".dot td");
      for( var i = 0; i < everclass.length; i++){
        
        everclass[i].addEventListener("click", function(data){
          var parent = this.parentNode;
          var div = document.createElement('div');
          if(data.path[0].id === 'btnDelete'){
            self.iniciaModal("modal-delete", parent.getElementsByTagName('td')[2].innerHTML);
          }
          else if(data.path[0].id === 'btnSee'){
            self.iniciaModal("modal-see", parent.getElementsByTagName('td')[2].innerHTML);
          }
          else if(data.path[0].id === 'btnEdit'){
            self.iniciaModal("modal-edit", parent.getElementsByTagName('td')[2].innerHTML);
          }
        })
      }
    })
  }

  // CRIACAO DO MODAL
  iniciaModal(modalID, product) {

    const modal = document.getElementById(modalID);

    if(modal){

      modal.classList.add('mostrar');

      modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
          modal.classList.remove('mostrar');
        }
        if(e.target.id == 'deny') {
          modal.classList.remove('mostrar');
        }
      })
    }

    if(modalID == "modal-see") {
      this.funcmodalsee(product);
    } 
    else if(modalID == "modal-edit") {
      this.funcmodaledit(product);
    } 
    else if(modalID == "modal-delete") {
      this.funcmodaldelete(product)
    }
  }

  // MODAL DE VISUALIZAR
  funcmodalsee(dados){

    const firebaseref = firebase.database().ref("sale");

    firebaseref.once('value',(resultado)=>{

      resultado.forEach(element => {

        if(element.child("totalGeneral").val() == dados) {

          // let abe = element.val().paymentWays.val()[dados];

          let vec = element.val().paymentWays;

          let vec2 = element.val().products;

          // console.log(vec)

          // console.log(vec2)
          
           if (var_lista3.hasChildNodes){
             var_lista3.innerHTML = '';
            }
          

          Object.keys(vec2).forEach(function(item2) {
            

            // console.log(vec)
            
            let vc2 = vec2[item2];

            // console.log(vc2)

            var tr3 = document.createElement('tr');

            var val3 = vc2[Object.keys(vc2)[0]];

            var val4 = vc2[Object.keys(vc2)[3]];

            let dados3 = "<td class='data-table'> " + val3 + " </td>" + "<td class='data-table'> " + val4 + " </td>" + "<td class='data-table'> " + element.val().date + " </td>";

            // let dados = "<input type='text' value=" + val1 + " disabled/>";

            tr3.innerHTML = dados3;
            var_lista3.appendChild(tr3);

            // td.innerHTML += dados;
            // document.getElementById("formapay1").appendChild(td);

            // for(let key in vc) {
              
              // let ct = vc[key]

              // console.log(ct)

              // if(ct == "Dinheiro") {

              //   document.getElementById("formapagamento1").value = "Dinheiro";

              // }
            // }

          })

          if (var_lista2.hasChildNodes){
            var_lista2.innerHTML = '';
          }
          

          Object.keys(vec).forEach(function(item) {


            // console.log(vec)
            
            let vc = vec[item];

            // console.log(vc)

            var tr2 = document.createElement('tr');

            var val1 = vc[Object.keys(vc)[0]];

            var val2 = vc[Object.keys(vc)[1]];

            let dados2 = "<td class='data-table'> " + val1 + " </td>" + "<td class='data-table'> " + val2 + " </td>" + "<td class='data-table'> " + element.val().date + " </td>";

            // let dados = "<input type='text' value=" + val1 + " disabled/>";

            tr2.innerHTML = dados2;
            var_lista2.appendChild(tr2);

            // td.innerHTML += dados;
            // document.getElementById("formapay1").appendChild(td);

            // for(let key in vc) {
              
              // let ct = vc[key]

              // console.log(ct)

              // if(ct == "Dinheiro") {

              //   document.getElementById("formapagamento1").value = "Dinheiro";

              // }
            // }

          })

          document.getElementById("vendedor1").value = element.val().seller;
          document.getElementById("totalvenda1").value = element.val().totalGeneral;
          document.getElementById("totalpago1").value = element.val().totalPaid;
          document.getElementById("datavenda1").value = element.val().date;
          document.getElementById("dataentrega1").value = element.val().date;
          // document.getElementById("valor").value = element.val().value;
          // document.getElementById("valor").value = element.val().value;

        }   
      });
    })
  }

  // MODAL DE EDITAR
  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("sale");

    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("totalGeneral").val() == a) {

        // let abe = element.val().paymentWays.val()[dados];

        let vec = element.val().paymentWays;

        // console.log(vec)

        Object.keys(vec).forEach(function(item) {

          // console.log(vec)
          
          let vc = vec[item];

          // console.log(vc)

          var val2 = vc[Object.keys(vc)[0]];

          let dados1 = "<input type='text' placeholder=" + val2 + " />";
          td2.innerHTML += dados1;
          var_lista4.appendChild(td2);


        })

        document.getElementById("vendedor2").placeholder = element.val().seller;
        document.getElementById("total2").placeholder = element.val().totalGeneral;
        document.getElementById("totalpago2").placeholder = element.val().totalPaid;
        document.getElementById("datavenda2").placeholder = element.val().date;
        document.getElementById("dataentrega2").placeholder = element.val().date;
          
        var btn = document.getElementById("btn_salvar");
        btn.addEventListener("click", function(e){
          var inputvendedor = document.getElementById("vendedor2").value;
          var inputtotal = document.getElementById("total2").value;
          var inputvalorPago =  document.getElementById("valorpago2").value;
          var inputdataVenda =  document.getElementById("datavenda2").value;
          var inputdataPagamento =  document.getElementById("datapagamento2").value;

          if(inputvendedor === ""){
            inputvendedor = element.val().seller;
          } 
          if (inputtotal === ""){
            inputtotal = element.val().type;
          } 
          if (inputvalorPago === ""){
            inputvalorPago = element.val().totalPaid;
          }
          if (inputdataVenda === ""){
            inputdataVenda = element.val().date;
          }
          if (inputdataPagamento === ""){
            inputdataPagamento = element.val().date;
          }

          self.funcUpd(element.key, inputvendedor, inputtotal, inputvalorPago, inputdataVenda, inputdataPagamento);
        })   
        } 
      });
    })
  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, vendedor, total, valorPago, dataVenda, dataPagamento){
    const database = firebase.database();
    let active = false;
    database.ref('sale/'+chave+'/seller').set(vendedor);
    database.ref('sale/'+chave+'/totalGeneral').set(total);
    database.ref('sale/'+chave+'/totalPaid').set(valorPago);
    database.ref('sale/'+chave+'/date').set(dataVenda);
    // database.ref('sale/'+chave+'/value').set(valor);
    
    window.location.reload(active);
  };

  // MODAL DE DELETAR
  funcmodaldelete(dados){

    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("sale");

    firebaseref.once('value',(resultado)=>{

    resultado.forEach(element => {

      if(element.child("totalGeneral").val() == dados) {

        var btn = document.getElementById("confirm");

        btn.addEventListener("click", function(e){

          valu = element.key;

          database.ref('sale/'+valu).remove();

          window.location.reload(active);
        })

      }
    });
  })
 }

}