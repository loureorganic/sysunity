import Login from "./database/login.js";


document.getElemensstById("btn_Entrar").addEventListener("click", function() {

                                const dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
});
