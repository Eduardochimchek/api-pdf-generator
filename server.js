const express = require("express");
const axios = require("axios");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 3000;

// Rota que gera o PDF
app.get("/gerar-pdf", async (req, res) => {
    try {
        // Fazendo a requisi��o para outra API (altere a URL)
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = response.data;

        // Criando um novo documento PDF
        const doc = new PDFDocument();
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=arquivo.pdf");

        // Escrevendo no PDF
        doc.pipe(res);
        doc.fontSize(20).text("Lista de Usuários", { align: "center" });
        doc.moveDown();

        users.forEach(user => {
            doc.fontSize(14).text(`Nome: ${user.name}`);
            doc.fontSize(12).text(`Email: ${user.email}`);
            doc.fontSize(12).text(`Telefone: ${user.phone}`);
            doc.moveDown();
        });

        doc.end();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        res.status(500).json({ error: "Erro ao gerar o PDF" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//http://localhost:3000/gerar-pdf
