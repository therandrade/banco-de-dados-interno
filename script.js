import { json } from "body-parser";
 
if (localStorage.getItem('usuarios') === null) {
    localStorage.getItem('usuarios' , JSON.stringify([
        {usuarios: 'esther' , senha: '1234'},
        {usuarios: 'larissa' , senha: '5678'},
        {usuarios: 'lana' , senha: '9012'}
    ]));
}
 
function getUsuarios(){
    return JSON.parse(localStorage.getItem('usuarios'));
}
 
function saveUsuarios(usuarios){
    localStorage.setItem('usuarios' , JSON.stringify(usuarios));
}
 
document.getElementById('loginform').addEventListener('submit' , function login(event){
    event.preventDefault();
 
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var usuarios = getUsuarios();
    var loginValido = false;
 
    for (var i in usuarios) {
        if (user == usuarios[i].usuarios && senha == usuarios[i].senha){
            loginValido = true;
            break;
        }
    }
    if (loginValido){
        alert('usuarios Correto');
        location.href = '/home/home.html';
    } else {
        alert('usuarios ou senha incorreto');
    }
});
 
document.getElementById('registrar').addEventListener('click',function () {
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    var usuarios = usuarios();
    var loginExistente = false;
 
    for (var i in usuarios) {
        if (user == usuarios[i].usuario) {
            loginExistente = true;
            break;
        }
    }
 
    if(loginExistente) {
        alert('usuarios já existe');
    } else {
        usuarios.push({usuarios: user , senha: senha});
        saveUsuarios(usuarios);
        alert('usuario registrado');
    }
})