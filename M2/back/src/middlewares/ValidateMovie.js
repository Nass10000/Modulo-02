module.exports = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body; // EL OBJETIVO DE TODOS ESTOS CODIGOS ES VALIDAR QUE LOS DATOS QUE SE ESTAN ENVIANDO SEAN LOS CORRECTOS
    const errors = [];

   
    if (!title || title.trim() === "") errors.push("El título es obligatorio.");
    if (!director || director.trim() === "") errors.push("El director es obligatorio.");

    
    if (year && (parseInt(year) < 1888 || parseInt(year) > new Date().getFullYear())) {
        errors.push("El año debe estar entre 1888 y el año actual.");
    }

    
    if (duration && !/^\d+h\s\d+m$/.test(duration)) {
        errors.push("La duración debe estar en el formato 'Xh Xm'.");
    }

    
    if (genre && !Array.isArray(genre)) {
        errors.push("El género debe ser una lista de cadenas.");
    }

 
    if (rate && (parseFloat(rate) < 0 || parseFloat(rate) > 10)) {
        errors.push("La calificación debe estar entre 0 y 10.");
    }

  
    if (!poster || !/\.(jpg|jpeg|png)$/i.test(poster)) {
        errors.push("El póster debe ser una URL válida que termine en .jpg, .jpeg o .png.");
    }

   
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};
