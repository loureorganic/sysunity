export default class databasesettingsuser {

    settingsuser() {

        const firebaseref = firebase.database().ref("user");
        let authUser = localStorage.getItem("id");

        firebaseref.once('value',(resultado)=>{

            resultado.forEach(element => {

                if(element.key == authUser) {
                    
                    document.getElementById("nome").placeholder = element.val().firstname;
                    document.getElementById("sobrenome").placeholder = element.val().lastname;
                    document.getElementById("email").placeholder = element.val().email;

                }

            })
        })
    }

    funUp(pro) {

        const firebaseref = firebase.database().ref("user");
        let authUser = localStorage.getItem("id");

        firebaseref.once('value',(resultado)=>{

            resultado.forEach(element => {

                if(element.key == authUser) {

                    const database = firebase.database();
                    let active = false;

                    console.log("eeee")

                    // database.ref('user/'+element.key+'/firstname').set(pro.nome);
                    // database.ref('user/'+element.key+'/lastname').set(sobrenome);
                    // database.ref('user/'+element.key+'/username').set(nomeusuario);
                    // database.ref('user/'+element.key+'/email').set(pro.email);
                    // database.ref('user/'+element.key+'/password').set(pro.confirmaSenhaAlterada);
                    // database.ref('user/'+element.key+'/job').set(job);
                    // database.ref('user/'+element.key+'/acesslevel').set(acesslevel);

                    // window.location.reload(active);

                }
                    
            });

        })
    }

}