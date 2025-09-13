//Função para exibir os dados do formulário
function Enviar(form) {
        saida = <h1>Exibindo os Dados do Aluno:</h1>;
        saida = saida + "<br>AlunoId: " + form.alunoId.value;
        saida = saida + "<br>Nome: " + form.nome.value;
        saida = saida + "<br>Curso: " + form.curso.value;
        saida = saida + "<br>CPF: " + form.CPF.value;
        document.write(saida);
}

// Função para verificar se um campo está vazio 
function eVazio(_str) {
        if (_str === null || _str === "")
                return true;
        return false;
}

// Função para validar os dados do formulário
function validar(form) {
        if (eVazio(form.nome.value)) {
                alert('Nome deve ter um valor');
                return false;
        }

//Se os campos foram preenchidos corretamente, chama a função Enviar
        Enviar(form);
        return true;
}

//Função para permitir somente números e backspace
function somenteNumero(event) {
//Função isNan verifica se um valor não é um número
if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
        return false;
}
return true;
}
