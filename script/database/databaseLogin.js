
export default class Login{
    constructor(usuario,senha){
    this.login(usuario,senha)
    }
    
    login(usuario,senha) {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value',(resultado)=>{
            let user = false;
            let errtotal = false;
            let erruser = false;
            let errsenha = false;
            resultado.forEach(element => {
               if(element.child("username").val() == usuario && element.child("password").val() == senha) {
                   user = true;
                   localStorage.setItem("id", element.key);
                   this.redirecionar();
               } 
               else if (element.child("username").val() != usuario && element.child("password").val() == senha)
               {
                   erruser = true;
               }
               else if (element.child("username").val() == usuario && element.child("password").val() != senha)
               {
                   errsenha = true;
               } else if (element.child("username").val() != usuario && element.child("password").val() != senha)
               {
                   errtotal = true;
                   console.log('ehere');
                }   
            });

            if (!errsenha && !erruser && !user){
                this.errosenhaeusuario();
            } else if(!user && erruser) 
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

     errosenhaeusuario(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário e senha incorretos!',
          })
     }

}