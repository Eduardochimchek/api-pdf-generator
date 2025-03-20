# API PDF Generator

Este projeto é uma **API em Node.js** que consulta outra API externa, processa os dados recebidos e gera um **PDF** dinâmico, disponibilizando-o para download.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação da API.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **PDFKit**: Biblioteca para gerar arquivos PDF.

## Funcionalidades

- Consulta uma API externa (exemplo: JSONPlaceholder).
- Gera um PDF dinâmico com os dados retornados.
- Disponibiliza o PDF gerado para download.

## Como Usar

1. Clone o repositório:

    ```bash
    git clone https://github.com/Eduardochimchek/api-pdf-generator.git
    cd api-pdf-generator
    ```

2. Instale as dependências:

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

   O PDF gerado será automaticamente baixado.

## Exemplos

A rota `/gerar-pdf` consulta a API externa e cria um PDF com informações como nome, email e telefone de usuários. Os dados são exibidos no PDF de forma simples e organizada.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.