var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button id="btnSee" class="button button2" ></button>';
var btnedit = '<button id="btnEdit" class="button button2" ></button>';
var btndelete = '<button id="btnDelete" class="button button2" ></button>';

var label = document.getElementById("sab");
var td = document.createElement('td');

var label2 = document.getElementById("sab2");


export default class databasemanagementproduct {

 // MODAL DE VISUALIZAR
  funcmodalsee(dados) {

    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      td.setAttribute('id', 'unique1');

      Object.keys(all.val()[dados]).find((a)=>{

        let dados = "<input id='flavor1' type='text' value=" + a + " disabled/>";
        td.innerHTML += dados;
        label.appendChild(td);

      })
    })

    firebaseref.once('value', (resultado) => {

      Object.keys(resultado.val()).map((keyname)=> {
        
        if (keyname === dados) {
          
          document.getElementById("nome").value = keyname;

          var tr = document.createElement('tr');
          var var_lista2 = document.getElementById("tbody-sabores-valores");

          // FALTA TRANSFORMAR ISSO EM STRING E FAZER O APPEND CHILD
          // VC CONSEGUE FAZER :) KKKKKK

          // <td id="input-sabores-id">
          //   <input id="tipo" type="text" placeholder="" disabled />
          // </td>
          
        }
        
      })

    })

  }

  // MODAL DE EDITAR
  funcmodaledit(dados) {

    var self = this;
    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){

      td.setAttribute('id', 'unique1');

      Object.keys(all.val()[dados]).find((a)=>{

        let dados = "<input id='flavor1' type='text' placeholder=" + a + " />";
        td.innerHTML += dados;
        label2.appendChild(td);

      })
    })

    firebaseref.once('value', (resultado) => {

      firebaseref.once('value', (resultado) => {

        Object.keys(resultado.val()).map((keyname)=> {
          
          if (keyname === dados) {
            
            document.getElementById("nome2").placeholder = keyname;
            
          }
          
        })
  
      })

      // resultado.forEach(element => {
      //   console.log(element.val())

      //   if (element.child("value").val() == dados) {

      //     document.getElementById("nome").placeholder = element.val().name;
      //     document.getElementById("tipo").placeholder = element.val().type;
      //     document.getElementById("valor").placeholder = element.val().value;

      //     var btn = document.getElementById("btn_salvar");
      //     btn.addEventListener("click", function (e) {
      //       var inputnome = document.getElementById("nome").value;
      //       var inputtipo = document.getElementById("tipo").value;
      //       var inputvalor = document.getElementById("valor").value;

      //       if (inputnome === "") {
      //         inputnome = element.val().name;
      //       }
      //       if (inputtipo === "") {
      //         inputtipo = element.val().type;
      //       }
      //       if (inputvalor === "") {
      //         inputvalor = element.val().value;
      //       }

      //       self.funcUpd(element.key, inputnome, inputtipo, inputvalor);
      //     })

      //   }

      // });

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