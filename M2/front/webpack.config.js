const path = require("path");

module.exports = {
  entry: ["./scripts/index.js", "./scripts/form.js"], // Define un único punto de entrada que incluya ambos archivos
  output: {
    path: path.resolve(__dirname, "public"), // Carpeta de salida
    filename: "index.bundle.js", // Nombre del archivo generado
  },
  mode: "development", // Modo del proyecto
};