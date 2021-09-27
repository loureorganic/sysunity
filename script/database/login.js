// const firebaseref = firebase.database().ref("Usuario");
//     firebaseref.once('value',(resultado)=>{
//         resultado.forEach(element => {
//             console.log(element.key)
//         });
//     });

export default class Login{
    constructor(usuario,senha){
    this.login(usuario,senha)
    this.teste();
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
                   //console.log(element.child());
                   localStorage.setItem("id", element.key);
                   //console.log(localStorage.getItem("id"));
                   this.teste();
                   //this.redirecionar();
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
        });
    };

    teste(){
        let suco = localStorage.getItem("id")
        let usuariologado = {nome: '', sobrenome: '', usuario: ''};
        let firebaseref = firebase.database().ref("Usuario");
        firebaseref.once('value',(resultado)=>{
        resultado.forEach(element => {
            if(element.key != suco) 
            {
//                usuariologado.nome = element.val().firstname;
//                usuariologado.sobrenome = element.val().lastname;
//                usuariologado.usuario = element.val().user;
            usuariologado = { 
                nome : 'element.val().firstname',
                sobrenome : element.val().lastname,
                usuario : element.val().user,
            }
            } else {
                usuariologado = {nome: '', sobrenome: '', usuario: ''};
            };
            
        });
     });
     console.log(usuariologado)
     return usuariologado;
    }

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