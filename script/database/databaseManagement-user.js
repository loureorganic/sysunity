var dados = ""
var var_lista = document.getElementById("name");

export default class databasemanagementuser {

    managementuser() {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                    var nome = curecord.key;
                    var usuario = curecord.child("username").val();
                    console.log(nome)
                    dados = "<table>" + "<tr><td>" + nome + "<td><tr>" + dados;

                    //var_lista.innerHTML = dados;
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