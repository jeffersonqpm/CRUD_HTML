
// let login = document.getElementById('login').value;
// senha = document.getElementById('senha').value;
// let senha = document.getElementById('senha');



// const login = document.getElementById('exampleInputEmail1');
// const senha = document.getElementById('exampleInputPassword1');

// const loginn = document.getElementById('login').value;
// const senhaa = document.getElementById('senha').value;

const butaoLoga = document.getElementById('button-entrar');

function logar() {

    // const login = document.formLogin.txtLogin.value;
    // const senha = document.formLogin.txtSenha.value;

    const login = document.getElementById('exampleInputEmail1').value;
    const senha = document.getElementById('exampleInputPassword1').value;

    if (senha === "123" && login == "123") {

        alert('logado');
        window.location.href = "page1.html";

    } else {
        alert('Login inválido!')
    }


}

//butaoLoga.addEventListener('click', logar); return false



