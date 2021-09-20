
 var div = document.getElementById('button');
    var icon = document.getElementById('icon');
    var open = false;

 div.addEventListener('click', function(){
       if (open){
           icon.clas
       }
});

$(document).ready(function() {
    const btn_usuario = $('dropdown-menu');
    const dropDown = $('usuario_configuracoes');    
   
    btn_usuario.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(btn_usuario == usuario)
    {
       window.location.href = 'editar_usuario.html';
    } else {
        window.location.href = 'index.html';
    }
});
$(document).ready(function() {
    const btn = $('link-dark rounded');
    const dropDown = $('ul_usuario');    
   
    btn.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(btn == ul_usuario)
    {
       window.location.href = 'cadastrar_usuario.html';
    } else {
        window.location.href = 'gerenciar_usuario.html';
    }
});

$(document).ready(function() {
    const btn2= $('link-dark rounded');
    const dropDown = $('ul_vendas');    
   
    btn2.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(btn2 == ul_vendas)
    {
       window.location.href = 'cadastrar_vendas.html';
    } else {
        window.location.href = 'gerenciar_vendas.html';
    }
});

$(document).ready(function() {
    const btn3 = $('link-dark rounded');
    const dropDown = $('ul_produtos');    
   
    btn3.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(btn3 == ul_produtos)
    {
       window.location.href = 'cadastrar_produto.html';
    } else if( btn3 == ul_produtos) {
        window.location.href = 'cadastrar_producao.html';
    } else {
        window.location.href = 'gerenciar_produto.html';
    }

});

$(document).ready(function() {
    const btn4 = $('link-dark rounded');
    const dropDown = $('ul_relatorios');    
   
    btn4.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });

    if(btn4 == ul_relatorios)
    {
       window.location.href = 'relatorios_gerais.html';
    } else if(btn4 == ul_relatorios){
        window.location.href = 'relatorios_vendas.html';
    } else {
        window.location.href = 'relatorios_produtos.html';
    }
});

$(document).ready(function() {
    const btn5 = $('link-dark rounded');
   
    btn5.on('click', function(){
        window.location.href = 'encomendas.html';
    });
});

$(document).ready(function() {
    const btn6 = $('link-dark rounded');
   
    btn6.on('click', function(){
        window.location.href = 'historico.html';
    });
});

$(document).ready(function() {
    const btn7 = $('link-dark rounded');
   
    btn7.on('click', function(){
        window.location.href = 'configuracao.html';
    });
});

$(document).ready(function() {
    const btn8 = $('link-dark rounded');
   
    btn8.on('click', function(){
        window.location.href = 'suporte.html';
    });
});