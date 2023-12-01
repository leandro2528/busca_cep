const input_cep = document.getElementById('cep');
const input_logradouro = document.getElementById('logradouro');
const input_numero = document.getElementById('numero');
const input_bairro = document.getElementById('bairro');
const input_cidade = document.getElementById('cidade');
const input_uf = document.getElementById('uf');

input_cep.addEventListener('blur', () => {
    let cep = input_cep.value;

    if(cep.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(resposta => resposta.json())
        .then(json => {
            input_logradouro.value = json.logradouro;
            input_bairro.value = json.bairro;
            input_cidade.value = json.localidade;
            input_uf.value = json.uf;

            input_numero.focus();
        });
});