console.log("File1")
function cambiarColorPagina(color) {
    var body = document.body;
    body.style.backgroundColor = color;
    var luminosidad = calcularLuminosidad(color);
    if (luminosidad < 0.5) {
        body.style.color = '#fff'; 
    } else {
        
        body.style.color = '#000';
    }
}

function cambiarColorForm(color){
    var bg = document.getElementById("forms");
    bg.style.backgroundColor = color;
    var luminosidad = calcularLuminosidad(color);
    if (luminosidad < 0.5) {
        bg.style.color = '#fff'; 
    } else {
        
        bg.style.color = '#000';
    }
}
function calcularLuminosidad(color) {
    var r = parseInt(color.slice(1, 3), 16) / 255;
    var g = parseInt(color.slice(3, 5), 16) / 255;
    var b = parseInt(color.slice(5, 7), 16) / 255;
    //Formula de luminosidad (YUV)= Y=0.299⋅R+0.587⋅G+0.114⋅B
    var luminosidad = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminosidad;
}