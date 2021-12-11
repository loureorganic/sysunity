var dados = ""
var var_lista = document.getElementById("tablebody");

var btnsee = '<button id="btnSee" class="button button2" ></button>';
var btnedit = '<button id="btnEdit" class="button button2" ></button>';
var btndelete = '<button id="btnDelete" class="button button2" ></button>';

document.getElementById("sab2");
document.getElementById("val2");

var td = document.createElement('td');
var td2 = document.createElement('td');


export default class databasemanagementproduct {

 // MODAL DE VISUALIZAR
  funcmodalsee(dados) {

    const firebaseref = firebase.database().ref("product");

    if (td.hasChildNodes){
      td.innerHTML = '';
    }
    if (td2.hasChildNodes){
      td2.innerHTML = '';
    }

    firebaseref.once('value', function(all){

      // CRIACAO DO INPUT NOME
      Object.keys(all.val()).map((keyname)=> {
        
        if (keyname === dados) {
          
          document.getElementById("nome").value = keyname;
          
        }
        
      })

      let abe = all.val()[dados];

      // CRIACAO DO INPUT SABOR
      Object.keys(abe).find((a)=>{

        let dados = "<input id='flavor1' type='text' value=" + a + " disabled/>";
        td2.innerHTML += dados;
        document.getElementById("sab").appendChild(td2);

      })

      // CRIACAO DO INPUT VALOR
      Object.keys(abe).forEach(function(item) {

        let cab = abe[item].value

        let dados = "<input id='value1' type='text' value=" + cab + " disabled/>";
        td.innerHTML += dados;
        document.getElementById("val").appendChild(td);

      })

    })

  }

  // MODAL DE EDITAR
  funcmodaledit(dados) {

    var self = this;
    const firebaseref = firebase.database().ref("product");

    if (td.hasChildNodes){
      td.innerHTML = '';
    }

    // CRIACAO DO INPUT NOME
    firebaseref.once('value', function(all){

      Object.keys(all.val()).map((keyname)=> {
          
        if (keyname === dados) {
          
          document.getElementById("nome2").placeholder = keyname;
          
        }
        
      })

      let abe = all.val()[dados];

      // CRIACAO DO INPUT SABOR
      Object.keys(abe).find((a)=>{

        let dados = "<input id='flavor1' type='text' placeholder=" + a + " />";
        td.innerHTML += dados;
        document.getElementById("sab2").appendChild(td);

      })

      // CRIACAO DO INPUT VALOR
      Object.keys(abe).forEach(function(item) {

        let cab = abe[item].value

        let dados = "<input id='value1' type='text' placeholder=" + cab + " />";
        td.innerHTML += dados;
        document.getElementById("val2").appendChild(td);

      })

    })

  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, nome, tipo, valor) {
    const database = firebase.database();
    let active = false;
    database.ref('product/' + chave + '/name').set(nome);
    database.ref('product/' + chave + '/type').set(tipo);
    database.ref('product/' + chave + '/value').set(valor);

    window.location.reload(active);
  };

  // MODAL DE DELETAR
  funcmodaldelete(dados) {

    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', (resultado) => {

      resultado.forEach(element => {

        if (element.key == dados) {

          var btn = document.getElementById("confirm");
          btn.addEventListener("click", function(e){

            valu = element.key;
            database.ref('product/' + valu).remove();
  
            window.location.reload(active);
          })
        }
      });
    })

  }

  // CRIACAO DA TABELA
  managementproduct() {

    var self = this;

    const firebaseref = firebase.database().ref("product");
    
    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaseref.once('value', function (all) {

      Object.keys(all.val()).map((keyname)=> {

        var tr = document.createElement('tr');
        tr.classList.add('dot');
        tr.setAttribute("id",keyname);

        dados =
        "<td id="+ keyname +">" + keyname + "</td>" +
        "<td>" + '    ' + "</td>" + "<td id='gridModal' >" + btnsee + btnedit + btndelete + "</td>";
        
        tr.innerHTML = dados;
        var_lista.appendChild(tr);
          
      })
      
      // VALIDACAO DO MODAL CLICADO
      var everclass = document.querySelectorAll(".dot td");
      for (var i = 0; i < everclass.length; i++) {

        everclass[i].addEventListener("click", function (data) {

          var parent = this.parentNode;
          var div = document.createElement('div');


          if(data.path[0].id === 'btnDelete'){
            self.iniciaModal("modal-delete", parent.getElementsByTagName('td')[0].innerHTML)
          }

          else if(data.path[0].id === 'btnSee'){
            self.iniciaModal("modal-see", parent.getElementsByTagName('td')[0].innerHTML);
          }

          else if(data.path[0].id === 'btnEdit'){
            self.iniciaModal("modal-edit", parent.getElementsByTagName('td')[0].innerHTML);
          }

        })
      }
    })
  }

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

}