export default class databasesettingsuser {
    settingsuser() {

        const firebaseref = firebase.database().ref("user");
        let authUser = localStorage.getItem("id");

        firebaseref.once('value',(resultado)=>{

            resultado.forEach(element => {

                if(element.key == authUser) {
                    
                    document.getElementById("nome").placeholder = element.val().firstname + " " + element.val().lastname;
                    document.getElementById("email").placeholder = element.val().email;
                    document.getElementById("email").placeholder = element.val().email;
                    document.getElementById("office").placeholder = element.val().job;
                    document.getElementById("access").placeholder = element.val().acesslevel;

                }

            })
        })
    }
}