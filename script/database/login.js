export default class Login{
    constructor(usuario,senha){
    this.login(usuario,senha)
    }

    login(usuario,senha) {
        const firebaseref = firebase.database().ref("Usuario");
        firebaseref.once('value',(resultado)=>{
            let user = false;
            resultado.forEach(element => {
               if(element.child("user").val() == usuario && element.child("password").val() == senha) {
                   user = true;
                   redirecionar();
               } 
            });
            if(!user) erro()
        })
    }
}