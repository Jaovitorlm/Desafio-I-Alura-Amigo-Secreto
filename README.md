# Projeto: Sorteio de Amigo Secreto 🎁

Este projeto foi desenvolvido durante um desafio de curso da **Alura**, com foco no aprendizado de JavaScript. O HTML do desafio já veio pronto para que os alunos pudessem se concentrar exclusivamente na lógica e nas funcionalidades em JavaScript. Além das funcionalidades previstas no desafio, foi adicionado um botão de reiniciar a lista como melhoria extra. 🚀

## Funcionalidades

- ✅ Adicionar nomes à lista de amigos.
- 👀 Exibir a lista de amigos adicionados na tela.
- 🎲 Realizar o sorteio de um amigo aleatório.
- 📢 Exibir o resultado do sorteio na tela.
- 🔒 Desativar o botão de sorteio após a execução, evitando múltiplos sorteios.
- 🆕 **Botão extra**: Reiniciar a lista de amigos e reativar o botão de sorteio.

## Tecnologias Utilizadas

- **HTML**: Fornecido previamente no desafio.
- **CSS**: Para estilização básica dos elementos visuais (integrado ao HTML).
- **JavaScript**: Linguagem de programação utilizada para implementar toda a lógica do projeto.

## Estrutura do Código

### 1. Lista de Amigos 📝
```javascript
let amigos = [];
```
Array para armazenar os nomes dos amigos inseridos pelo usuário.

### 2. Função `adicionarAmigo` ➕
Adiciona um nome à lista de amigos após verificar se é válido:
- Remove espaços extras e formata o texto.
- Verifica se o nome não é vazio ou um número.
- Atualiza a lista exibida na tela.

### 3. Função `limparCampo` 🧹
Limpa o campo de entrada de texto após adicionar um nome:
```javascript
function limparCampo(input) {
    input.value = '';
}
```

### 4. Função `exibirTextoNaTela` 💻
Exibe o texto em um elemento específico identificado por `elementoId`.
- É utilizada para exibir a lista de amigos e o resultado do sorteio.

### 5. Função `sortearAmigo` 🎉
Realiza o sorteio de um amigo aleatório:
- Verifica se há amigos na lista.
- Gera um número aleatório para selecionar um nome.
- Exibe o resultado do sorteio.
- Desativa o botão de sorteio após a execução.

### 6. Função `formatarTexto` ✍️
Formata o texto para que a primeira letra de cada palavra fique maiúscula, enquanto palavras como 'de', 'do', 'e', etc., permanecem minúsculas, exceto quando são a primeira palavra do nome.

### 7. Função `reiniciarLista` 🔄
Botão extra adicionado por mim:
- Limpa o array `amigos` e a lista exibida na tela.
- Reseta o resultado do sorteio.
- Reativa o botão de sorteio, permitindo um novo ciclo.

## Como Executar o Projeto 🛠️
1. Clone este repositório ou copie os arquivos para o seu ambiente local.
2. Abra o arquivo HTML no navegador.
3. Interaja com os seguintes elementos:
   - **Campo de entrada**: Digite o nome de um amigo e clique em "Adicionar".
   - **Botão de sorteio**: Clique para sortear um amigo aleatório da lista.
   - **Botão de reiniciar lista**: Limpa a lista de amigos e reativa o botão de sorteio.

## Melhorias Adicionais ✨
Além das funcionalidades básicas previstas no desafio, adicionei o botão de reiniciar a lista, permitindo um novo ciclo de sorteios sem a necessidade de recarregar a página.
