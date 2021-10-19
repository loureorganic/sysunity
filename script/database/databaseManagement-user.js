var dados = ""
var var_lista = document.getElementById("tablebody");
var a = '<button type="button" id="see" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var b = '<button type="button" id="edit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var c = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';
export default class databasemanagementuser {

    managementuser() {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                    var usuario = curecord.val();
                    var g = document.createElement('tr');
                    console.log(g);
                    dados = 
                                "<td>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
                                "<td>" + usuario.username + "</td>" + "<td>" + a + b + c + "</td>";
                    g.innerHTML += dados;
                    g.id = curecord.key;
                    var_lista.innerHTML += g.innerHTML;
                }
            )
            
var clicked = false;
document.getElementById('see').addEventListener("click", function(){
clicked = true;
console.log(clicked);
});
        })
    }
}
