var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button type="button" id="btnSee" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" id="btnEdit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

export default class databasemanagementproduct {
    managementproduct() {

        var self = this;
    
        const firebaseref = firebase.database().ref("product");
    
        firebaseref.once('value', function(all){
          all.forEach(
            function(curecord){
              var usuario = curecord.val();
              var tr = document.createElement('tr');
              tr.classList.add('dot');
              dados =
              "<td>" +  + " " +  + "</td>" + 
              "<td id='username2' >" +  + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";
    
              tr.innerHTML = dados;
              var_lista.appendChild(tr);
            }
          )
          
          var everclass = document.querySelectorAll(".dot td");
          for( var i = 0; i < everclass.length; i++){
            
            everclass[i].addEventListener("click", function(data){
              var parent = this.parentNode;
              var div = document.createElement('div');
              if(data.path[0].id === 'btnDelete'){
                div.innerHTML = modaldelete;
                var_lista.appendChild(div);
                document.getElementById('confirm').addEventListener("click", function(){
                  self.funcmodaldelete(parent.getElementsByTagName('td')[1].innerHTML)
                });
              }
              else if(data.path[0].id === 'btnSee'){
                div.innerHTML = modalsee;
                var_lista.appendChild(div);
                var parent = this.parentNode;
                self.funcmodalsee(parent.getElementsByTagName('td')[1].innerHTML);
              }
              else if(data.path[0].id === 'btnEdit'){
                div.innerHTML = modaledit;
                var_lista.appendChild(div);  
                var parent = this.parentNode;
                self.funcmodaledit(parent.getElementsByTagName('td')[1].innerHTML);
              }
            })
          }
        })
      }
}