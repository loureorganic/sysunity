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
          document.getElementById("dataentrega1").value = element.val().dateDelivery;
          // document.getElementById("valor").value = element.val().value;
          // document.getElementById("valor").value = element.val().value;

        }   
      });
    })
  }

  // MODAL DE EDITAR
  funcmodaledit(a){

    let i = 0;

    let y = 0;

    var self = this;

    const firebaseref = firebase.database().ref("sale");

    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("totalGeneral").val() == a) {

          // let abe = element.val().paymentWays.val()[dados];

          let vec3 = element.val().paymentWays;

          let vec4 = element.val().products;

          // console.log(vec3)

          if (var_lista5.hasChildNodes){
            var_lista5.innerHTML = '';
          }

          Object.keys(vec4).forEach(function(item4) {

            let idpro = "pro" + i;

            let idqua = "qua" + i;

            let idval = "val" + i;

            let idtip = "tip" + i;
              
            // console.log(vec)
            
            let vc4 = vec4[item4];

            // console.log(vc4)

            var tr4 = document.createElement('tr');

            var val5 = vc4[Object.keys(vc4)[0]];
            var val8 = vc4[Object.keys(vc4)[1]];
            var val6 = vc4[Object.keys(vc4)[3]];
            var val9 = vc4[Object.keys(vc4)[4]];

            let dados3 = "<input id = " + idpro + " placeholder = " + val5 + " ></input>" + "<input id = " + idtip + " placeholder = " + val9 + " ></input>" + "<input id = " + idqua + " placeholder = " + val6 + " ></input>" + "<input id = " + idval + " placeholder = " + val8 + " ></input>";

            // let dados = "<input type='text' value=" + val1 + " disabled/>";

            tr4.innerHTML = dados3;
            var_lista5.appendChild(tr4);

            // td.innerHTML += dados;
            // document.getElementById("formapay1").appendChild(td);

            // for(let key in vc) {
              
              // let ct = vc[key]

              // console.log(ct)

              // if(ct == "Dinheiro") {

              //   document.getElementById("formapagamento1").value = "Dinheiro";

              // }
            // }

            i++;
          })

          if (var_lista4.hasChildNodes){
            var_lista4.innerHTML = '';
          }

          Object.keys(vec3).forEach(function(item3) {

            let idfor2 = "for" + y;

            let idpag2 = "pag" + y;

            let iddat2 = "dat" + y;

            // console.log(vec3)
            
            let vc3 = vec3[item3];

            // console.log(vc3)

            var tr3 = document.createElement('tr');

            var val2 = vc3[Object.keys(vc3)[0]];

            var val7 = vc3[Object.keys(vc3)[1]];

            let dados1 = "<input id = " + idfor2 + " placeholder = " + val2 + " ></input>" + "<input id = " + idpag2 + " placeholder = " + val7 + " ></input>" + "<input id = " + iddat2 + " placeholder = " + element.val().date + " ></input>";
            tr3.innerHTML += dados1;
            var_lista4.appendChild(tr3);

            y++;
          })

          document.getElementById("vendedor2").placeholder = element.val().seller;
          document.getElementById("totalvenda2").placeholder = element.val().totalGeneral;
          document.getElementById("totalpago2").placeholder = element.val().totalPaid;
          document.getElementById("datavenda2").placeholder = element.val().date;
          document.getElementById("dataentrega2").placeholder = element.val().dateDelivery;
          
          var btn = document.getElementById("btn_salvar");

          btn.addEventListener("click", function(e){

            var inputvendedor = document.getElementById("vendedor2").value;
            var inputtotal = document.getElementById("totalvenda2").value;
            var inputvalorPago =  document.getElementById("totalpago2").value;
            var inputdataVenda =  document.getElementById("datavenda2").value;
            var inputdataEntrega =  document.getElementById("dataentrega2").value;

            const database = firebase.database();

            for(let abc = 0; abc < i; abc++) {

              let idpro = "pro" + abc;
              let idqua = "qua" + abc;
              let idval = "val" + abc;

              if(document.getElementById(idpro).value == '') {

                document.getElementById(idpro).style.borderColor = "red";
                // document.getElementById('alerta_valortotal').style.display = 'flex';
            
              } else {
            
                document.getElementById(idpro).style.borderColor = "blue";
                // document.getElementById('alerta_valortotal').style.display = 'none';
            
              }
              if (document.getElementById(idqua).value == ''){
                
                document.getElementById(idqua).style.borderColor = "red";
                // document.getElementById('alerta_formapagamento').style.display = 'flex';
            
              }
              else {
            
                document.getElementById(idqua).style.borderColor = "blue";
                // document.getElementById('alerta_formapagamento').style.display = 'none';
                
              }
              if (document.getElementById(idval).value == ''){
                
                document.getElementById(idval).style.borderColor = "red";
                // document.getElementById('alerta_formapagamento').style.display = 'flex';
            
              }
              else {
            
                document.getElementById(idval).style.borderColor = "blue";
                // document.getElementById('alerta_formapagamento').style.display = 'none';
                
              }
              if(document.getElementById(idpro).value !== '' && document.getElementById(idqua).value !== '' && document.getElementById(idval).value !== ''){

                database.ref('sale/' + element.key + '/products/' + 'product' + abc + '/' + abc).set(document.getElementById(idpro).value);
                database.ref('sale/' + element.key + '/products/' + 'product' + abc + '/' + 'quantity' + abc).set(document.getElementById(idqua).value);
                database.ref('sale/' + element.key + '/products/' + 'product' + abc + '/' + 'price' + abc).set(document.getElementById(idval).value);

              }

            }

            for(let def = 0; def < y; def++) {
                
              let idfor = "for" + def;
              let idpag = "pag" + def;

              if(document.getElementById(idfor).value == '') {

                document.getElementById(idfor).style.borderColor = "red";
                // document.getElementById('alerta_valortotal').style.display = 'flex';
            
              } else {
            
                document.getElementById(idfor).style.borderColor = "blue";
                // document.getElementById('alerta_valortotal').style.display = 'none';
            
              }
              if (document.getElementById(idpag).value == ''){
                
                document.getElementById(idpag).style.borderColor = "red";
                // document.getElementById('alerta_formapagamento').style.display = 'flex';
            
              }
              else {
            
                document.getElementById(idpag).style.borderColor = "blue";
                // document.getElementById('alerta_formapagamento').style.display = 'none';
                
              }

              if(document.getElementById(idfor).value !== '' && document.getElementById(idpag).value !== '') {

                database.ref('sale/' + element.key + '/paymentWays/' + 'paymentWay' + def + '/' + 'payment_method' + def).set(document.getElementById(idfor).value);
                database.ref('sale/' + element.key + '/paymentWays/' + 'paymentWay' + def + '/' + 'total-value' + def).set(document.getElementById(idpag).value);

              }

            }

            if(inputvendedor === ""){
              inputvendedor = element.val().seller;
            } 
            if (inputtotal === ""){
              inputtotal = element.val().totalGeneral;
            } 
            if (inputvalorPago === ""){
              inputvalorPago = element.val().totalPaid;
            }
            if (inputdataVenda === ""){
              inputdataVenda = element.val().date;
            }
            if (inputdataEntrega === ""){
              inputdataEntrega = element.val().dateDelivery;
            }

            self.funcUpd(element.key, inputvendedor, inputtotal, inputvalorPago, inputdataVenda, inputdataEntrega);
          })   
        } 
      });
    })
  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, vendedor, total, valorPago, dataVenda, dataEntrega){
    const database = firebase.database();
    let active = false;
    database.ref('sale/'+chave+'/seller').set(vendedor);
    database.ref('sale/'+chave+'/totalGeneral').set(total);
    database.ref('sale/'+chave+'/totalPaid').set(valorPago);
    database.ref('sale/'+chave+'/date').set(dataVenda);
    database.ref('sale/'+chave+'/dateDelivery').set(dataEntrega);
    
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