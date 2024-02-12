
// let login = document.getElementById('login').value;
// senha = document.getElementById('senha').value;
// let senha = document.getElementById('senha');

const login = document.formLogin.txtLogin.value;
const senha = document.formLogin.txtSenha.value;

// const login = document.getElementById('login');
// const senha = document.getElementById('senha');

// const loginn = document.getElementById('login').value;
// const senhaa = document.getElementById('senha').value;

const butaoLoga = document.getElementById('bt-login');

function logar(){

    if(login === "123" && senha === "123"){

        window.location.href = "page1.html";

    }else{
        alert('Login inválido!')
    }
}

butaoLoga.addEventListener('click', logar);



