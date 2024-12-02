//Validaciones de formularios
document.getElementById("myForm").addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        e.preventDefault(); // Evitar el envío
        alert("Por favor, introduce un correo válido.");
    }
});

//Manipulacion del DOM
const button = document.getElementById("changeTextButton");
button.addEventListener("click", () => {
    document.getElementById("textElement").textContent = "¡Texto cambiado dinámicamente!";
});

//Eventos
document.getElementById("hoverElement").addEventListener("mouseover", () => {
    console.log("Elemento resaltado con el mouse.");
});

// codigo para un servidor básico:
const express = require("express");
const app = express();

app.use(express.static("public")); // Servir archivos estáticos

app.get("/", (req, res) => {
    res.send("¡Hola desde el servidor con Express!");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

//crear API simple
app.get("/api/data", (req, res) => {
    res.json({ message: "¡Hola API!", items: [1, 2, 3, 4] });
});


//Desde el front-end, consumir la API
/fetch("/api/data")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
