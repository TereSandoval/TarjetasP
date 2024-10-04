// Función que aplica los cambios a la tarjeta en tiempo real
function aplicarCambiosEnTiempoReal() {
    // Cambiar la imagen según la opción seleccionada
    let tarjetaTipo = document.getElementById('tarjetaTipo').value;
    let imagenTarjeta = document.getElementById('imagenTarjeta');
    let mensajeTarjeta = document.getElementById('mensajeTarjeta');
    let imagenesSeleccion = document.getElementById('imagenesSeleccion');

    // Reiniciar el contenedor de imágenes
    imagenesSeleccion.innerHTML = '';

    if (tarjetaTipo === 'cumple') {
        // Cambiar mensaje
        mensajeTarjeta.textContent = '¡Feliz Cumpleaños!';
        // Mostrar tres imágenes para seleccionar
        mostrarImagenes(['img/CumP.png', 'img/CumP2.png', 'img/CumP3.png']);
    } else if (tarjetaTipo === 'sanValentin') {
        // Cambiar mensaje
        mensajeTarjeta.textContent = '¡Feliz San Valentín!';
        // Mostrar tres imágenes para seleccionar
        mostrarImagenes(['img/SanV.png', 'img/SanV2.png', 'img/SanV3.png']);
    } else if (tarjetaTipo === 'navidad') {
        // Cambiar mensaje
        mensajeTarjeta.textContent = '¡Feliz Navidad!';
        // Mostrar tres imágenes para seleccionar
        mostrarImagenes(['img/Nav.png', 'img/Nav2.png', 'img/Nav3.png']);
    }

    // Cambiar el texto del mensaje
    let textoPersonalizado = document.getElementById('tarjetaTexto').value;
    if (textoPersonalizado) {
        mensajeTarjeta.textContent = textoPersonalizado;
    }

    // Cambiar el color de fondo de la tarjeta
    let colorTarjeta = document.getElementById('colorTarjeta').value;
    document.getElementById('tarjeta').style.backgroundColor = colorTarjeta;

    // Cambiar el color del texto
    let colorTexto = document.getElementById('colorTexto').value;
    mensajeTarjeta.style.color = colorTexto;

    // Cambiar el color del borde
    let colorBorde = document.getElementById('colorBorde').value;
    document.getElementById('tarjeta').style.borderColor = colorBorde;

    // Cambiar el estilo del borde de la tarjeta
    let bordeTarjeta = document.getElementById('bordeTarjeta').value;
    document.getElementById('tarjeta').style.borderStyle = bordeTarjeta;
}

// Función para mostrar las imágenes según la temática seleccionada
function mostrarImagenes(imagenes) {
    let imagenesSeleccion = document.getElementById('imagenesSeleccion');
    imagenes.forEach(function(imagenSrc) {
        let img = document.createElement('img');
        img.src = imagenSrc;
        img.classList.add('imagen-opcion');
        img.addEventListener('click', function() {
            document.getElementById('imagenTarjeta').src = imagenSrc;
        });
        imagenesSeleccion.appendChild(img);
    });
}

// Agregar eventos a todos los elementos de entrada para que apliquen cambios en tiempo real
document.getElementById('tarjetaTipo').addEventListener('change', aplicarCambiosEnTiempoReal);
document.getElementById('tarjetaTexto').addEventListener('input', aplicarCambiosEnTiempoReal);
document.getElementById('colorTarjeta').addEventListener('input', aplicarCambiosEnTiempoReal);
document.getElementById('bordeTarjeta').addEventListener('change', aplicarCambiosEnTiempoReal);
document.getElementById('colorTexto').addEventListener('input', aplicarCambiosEnTiempoReal);
document.getElementById('colorBorde').addEventListener('input', aplicarCambiosEnTiempoReal);
