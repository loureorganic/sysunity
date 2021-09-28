
export default class Login{
    constructor(usuario,senha){
    this.login(usuario,senha)
    }
    
    login(usuario,senha) {
        const firebaseref = firebase.database().ref("Usuario");
        firebaseref.once('value',(resultado)=>{
            let user = false;
            let erruser = false;
            let errsenha = false;
            resultado.forEach(element => {
               if(element.child("user").val() == usuario && element.child("password").val() == senha) {
                   user = true;
                   this.redirecionar();
               } 
               else if (element.child("user").val() != usuario && element.child("password").val() == senha)
               {
                   erruser = true;
               }
               else if (element.child("user").val() == usuario && element.child("password").val() != senha)
               {
                   errsenha = true;
               }
            });
            if(!user && erruser) 
            {
                this.errousuario();
            }
            else if (!user && errsenha) {
                this.errosenha();
            }
        })
    };

     redirecionar(){
          window.location.replace('home.html');
     }
     
     errousuario(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O usuário não foi encontrado no sistema!',
          })
     }

     errosenha(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha incorreta informada!',
          })
     }

}