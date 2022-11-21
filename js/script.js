function validaNome(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos obrigatórios";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.telaMensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.form-control');
for( let emFoco of camposObrigatorios) {
    validaNome(emFoco);
}

function validaEmail(elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem-email').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem-email').innerHTML = "Padrão incorreto";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    
    });
}

let campusEmail = document.querySelectorAll('input#obrigatorio-3');
for( let emFoco of campusEmail) {
    validaEmail(emFoco);
}


function disableButton() {
    let obrigatorio1 = document.querySelector('#obrigatorio-1').value;
    let obrigatorio2 = document.querySelector('#obrigatorio-2').value;
    let obrigatorio3 = document.querySelector('#obrigatorio-3').value;
    let obrigatorio4 = document.querySelector('#obrigatorio-4').value;
    if(obrigatorio1 && obrigatorio2 && obrigatorio3 && obrigatorio4) {
        document.querySelector('#btn').disabled = false;
        return
    } else {
        document.querySelector('#btn').disabled = true;
    }
}