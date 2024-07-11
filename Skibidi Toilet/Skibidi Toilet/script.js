function botaoLog(){
    let NomeLog = document.getElementById('nome_login').value
    let senhaLog =  document.getElementById('senha_login').value
    let materlogado = document.getElementById('materlogado').value

    
    if (materlogado.checked) {
        alert('Seu nome é: '+ NomeLog + '\n' + 'sua senha é: ' + senhaLog )
        window.location.href='TelaInicial.html'
    }
    else {
        alert("Nao selecionou os termos")
    }
}

function botaoCad(){
    let nome_cad = document.getElementById('nome_cad').value
    let email_cad = document.getElementById('email_cad').value
    let senha_cad = document.getElementById('senha_cad').value
    let genero = document.querySelector("input[name='genero']:checked").value
    let data = document.getElementById('data').value
    let check_cad = document.getElementById('check_cad').value


    

    if (check_cad.checked) {
        alert('Seu nome é: ' + nome_cad + '\n' + 'seu email é: ' + email_cad + '\n' + 'sua senha é: ' + senha_cad +  '\n' + 'Gênero: ' + genero+ '\n' + 'Sua data de nascimento é: ' + data)
    
        window.location.href='TelaInicial.html'
    }
    else {
        alert("Nao selecionou os termos")
    }
}

function botaoVolt() {
    window.location.href = 'cadastro.html' 
}