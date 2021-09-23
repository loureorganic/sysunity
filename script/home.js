
 var div = document.getElementById('button');
    var icon = document.getElementById('icon');
    var open = false;

 div.addEventListener('click', function(){
       if (open){
           icon.clas
       }
});

/*$(document).ready(function(){
    
    const classeUsuario = $('.collapse');
    const ul = $('#ul_usuario');

    classeUsuario.on('click', function(event){
        ul.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(classeUsuario == ul_usuario)
    {
        window.location.href = 'cadastrar_usuario.html';
    } else {
        window.location.href = 'gerenciar_usuario.html';
    }

})*/

function redirecionarUsuario(){

    const usuario;

    if (usuario == ul_usuario) {
        window.location.href = 'cadastrar_usuario.html';
    } else {
        window.location.href = 'gerenciar_usuario.html';
    }

}