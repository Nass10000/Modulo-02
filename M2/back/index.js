// definir las rutas
const app = require("./src/server");
const conDb = require("./src/config/conDb");

conDb()
  .then((res) => {
    app.listen(3000, () => {
      console.log("servidor escuchando en el puerto 3000");
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos");
  });


