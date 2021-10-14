var dados = ""
var var_lista = document.getElementById("tablebody");
// const elem = document.createElement("td");
// const elemText = document.createTextNode("Wesley");
// elem.appendChild(elemText);
var a = "<td> <button type='button' class='visibility' data-bs-toggle='modal' data-bs-target='#MyModal'></button> </td>";
var b = "<td><button type='button' class='btn btn-primary'>Primary</button></td>";
var d = "<td><button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#MyModalEditar'></button></td>"
//var c = "<td><button type='button' class='btn btn-primary btn-sm'>Small button</button></td>"
export default class databasemanagementuser {

    managementuser() {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                    //var nome = curecord.key;
                    var usuario = curecord.val();
                    dados = "<tr>" + 
                                "<td>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
                                "<td>" + usuario.username + "</td>" + a +  +
                            "</tr>";
                    
                    var_lista.innerHTML += dados;
                }
            )
        })
    }
}

    // const firebaseref = firebase.database().ref("user").orderByKey();
    // firebaseref.once('value',function(snapshot){
    //     snapshot.forEach(element => {
    //         const senha = element.child("password").val();
    //     console.log(senha)
    //     });
    // })

    //     const firebaseref = firebase.database().ref("user").orderByKey();
    //     firebaseref.once('value',function(snapshot){
    //         var senha = snapshot.val();
    //         console.log(senha)
    //     })
    // }