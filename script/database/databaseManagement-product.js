var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button id="btnSee" class="button button2" onclick= '+ "iniciaModal('modal-see')" +' >  </button>';
var btnedit = '<button id="btnEdit" class="button button2" onclick= '+ "iniciaModal('modal-edit')" +' >  </button>';
var btndelete = '<button id="btnDelete" class="button button2" onclick= '+ "iniciaModal('modal-delete')" +' >  </button>';

var modalsee = ``;

var modaledit = ``;

var modaldelete = ``;

export default class databasemanagementproduct {

 // MODAL DE VISUALIZAR
  funcmodalsee(dados) {
    const firebaseref = firebase.database().ref("product");
    firebaseref.once('value', (resultado) => {
      Object.keys(resultado.val()).map((keyname)=> {
        
        if (keyname === dados) {
          document.getElementById("nome").value = keyname;
          var tr = document.createElement('tr');
          var var_lista2 = document.getElementById("tbody-sabores-valores");  
          //FALTA TRANSFORMAR ISSO EM STRING E FAZER O APPEND CHILD
          //VC CONSEGUE FAZER :)
          //  <td id="input-sabores-id">
          //           <input id="tipo" type="text" placeholder="" disabled />
          //         </td>
          
        }
        
      })

    })

  }

  // MODAL DE EDITAR
  funcmodaledit(a) {

    var self = this;

    const firebaseref = firebase.database().ref("product");
    firebaseref.once('value', (resultado) => {

      resultado.forEach(element => {

        if (element.child("value").val() == a) {

          document.getElementById("nome").placeholder = element.val().name;
          document.getElementById("tipo").placeholder = element.val().type;
          document.getElementById("valor").placeholder = element.val().value;

          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function (e) {
            var inputnome = document.getElementById("nome").value;
            var inputtipo = document.getElementById("tipo").value;
            var inputvalor = document.getElementById("valor").value;

            if (inputnome === "") {
              inputnome = element.val().name;
            }
            if (inputtipo === "") {
              inputtipo = element.val().type;
            }
            if (inputvalor === "") {
              inputvalor = element.val().value;
            }

            self.funcUpd(element.key, inputnome, inputtipo, inputvalor);
          })

        }

      });

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

          valu = element.key;
          database.ref('product/' + valu).remove();
          
          window.location.reload(active);
        }
      });
    })

  }

  // CRIACAO DA TABELA
  managementproduct() {

    var self = this;

    // CRIACAO E POPULAR OS DADOS NA TABELA
    const firebaseref = firebase.database().ref("product");
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
      // var everclass = document.querySelectorAll(".dot td");
      // for (var i = 0; i < everclass.length; i++) {

      //   everclass[i].addEventListener("click", function (data) {

      //     var parent = this.parentNode;
      //     var div = document.createElement('div');

      //     if (data.path[0].id === 'btnDelete') {
      //       div.innerHTML = modaldelete;
      //       var_lista.appendChild(div);
      //       document.getElementById('confirm').addEventListener("click", function () {
      //         self.funcmodaldelete(parent.getAttribute('id'))
      //       });
      //     }

      //     else if (data.path[0].id === 'btnSee') {
      //       div.innerHTML = modalsee;
      //       var_lista.appendChild(div);
      //       var parent = this.parentNode;
      //       self.funcmodalsee(parent.getElementsByTagName('td')[0].getAttribute('id'));
      //     }

      //     else if (data.path[0].id === 'btnEdit') {
      //       div.innerHTML = modaledit;
      //       var_lista.appendChild(div);
      //       var parent = this.parentNode;
      //       self.funcmodaledit(parent.getElementsByTagName('td')[1].innerHTML);
      //     }
      //   })
      // }
    })
  }

}