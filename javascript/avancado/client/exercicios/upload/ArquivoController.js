
/*
Veja que o método envia, de ArquivoController, não está completo porque temos um problema. O problema é que o designer 
achou melhor ter apenas um campo onde o usuário digita na sequência o nome, o tamanho e o tipo do arquivo. 
Infelizmente o construtor de Arquivo não está preparado para receber a string com todos os dados, mas cada um em separado como parâmetro do construtor. 
E por fim, para complicar só mais um pouquinho, a entrada do usuário deve ser toda considerada em caixa alta, ou seja, maiúsculo.

Sua tarefa é implementar o método envia de ArquivoController. Ele deverá ler a entrada do usuário e adequá-la ao construtor de Arquivo. 
Assim que você conseguir criar uma instância de arquivo, você deve imprimir seus dados no console.

Lembre-se que o usuário digita no campo de entrada os dados do arquivo no formato: nome / tamanho / tipo e deve estar em caixa alta!
*/

class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}
