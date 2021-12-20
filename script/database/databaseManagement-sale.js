var dados = "";
var var_lista = document.getElementById("tablebody");

var td = document.createElement("td");
var td2 = document.createElement("td");

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

          // console.log(vec)

          Object.keys(vec).forEach(function(item) {

            // console.log(vec)
            
            let vc = vec[item];

            // console.log(vc)

            var val1 = vc[Object.keys(vc)[0]];

            let dados = "<input type='text' value=" + val1 + " disabled/>";
            td.innerHTML += dados;
            document.getElementById("formapay1").appendChild(td);

            // for(let key in vc) {
              
              // let ct = vc[key]

              // console.log(ct)

              // if(ct == "Dinheiro") {

              //   document.getElementById("formapagamento1").value = "Dinheiro";

              // }
            // }

          })

          document.getElementById("vendedor1").value = element.val().seller;
          document.getElementById("total1").value = element.val().totalGeneral;
          document.getElementById("valorpago1").value = element.val().totalPaid;
          document.getElementById("datavenda1").value = element.val().date;
          document.getElementById("datapagamento1").value = element.val().date;
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
          document.getElementById("formapay2").appendChild(td2);


        })

          document.getElementById("vendedor2").placeholder = element.val().seller;
          document.getElementById("total2").placeholder = element.val().totalGeneral;
          document.getElementById("valorpago2").placeholder = element.val().totalPaid;
          document.getElementById("datavenda2").placeholder = element.val().date;
          document.getElementById("datapagamento2").placeholder = element.val().date;
          
          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){
            var inputnome = document.getElementById("vendedor2").value;
            var inputtipo = document.getElementById("total2").placeholder.value;
            var inputvalor =  document.getElementById("valorpago2").placeholder.value;

            if(inputnome === ""){
              inputnome = element.val().name;
            } 
            if (inputtipo === ""){
              inputtipo = element.val().type;
            } 
            if (inputvalor === ""){
              inputvalor = element.val().value;
            }

            self.funcUpd(element.key, inputnome, inputtipo, inputvalor);
          })   
        } 
      });
    })
  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, nome, tipo, valor){
    const database = firebase.database();
    let active = false;
    // database.ref('sale/'+chave+'/name').set(nome);
    // database.ref('sale/'+chave+'/type').set(tipo);
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