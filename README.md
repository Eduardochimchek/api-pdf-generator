# API PDF Generator

Este projeto � uma **API em Node.js** que consulta outra API externa, processa os dados recebidos e gera um **PDF** din�mico, disponibilizando-o para download.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execu��o JavaScript.
- **Express**: Framework para cria��o da API.
- **Axios**: Biblioteca para fazer requisi��es HTTP.
- **PDFKit**: Biblioteca para gerar arquivos PDF.

## Funcionalidades

- Consulta uma API externa (exemplo: JSONPlaceholder).
- Gera um PDF din�mico com os dados retornados.
- Disponibiliza o PDF gerado para download.

## Como Usar

1. Clone o reposit�rio:

    ```bash
    git clone https://github.com/Eduardochimchek/api-pdf-generator.git
    cd api-pdf-generator
    ```

2. Instale as depend�ncias:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    node server.js
    ```

4. Acesse a rota `/gerar-pdf` para gerar o PDF:

    ```bash
    http://localhost:3000/gerar-pdf
    ```

   O PDF gerado ser� automaticamente baixado.

## Exemplos

A rota `/gerar-pdf` consulta a API externa e cria um PDF com informa��es como nome, email e telefone de usu�rios. Os dados s�o exibidos no PDF de forma simples e organizada.

## Licen�a

Este projeto est� licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.