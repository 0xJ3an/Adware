document.getElementById('descargarBtn').addEventListener('click', function() {
    // Mostrar el contenido inmediatamente
    document.getElementById('contenido').style.display = 'block';
    document.getElementById('audio').play();
    alert("Profesora se encuentra segura de continuar");
    alert("Segura segura");
    alert("Desde este momento no hay vuelta atras");
    document.getElementById('mensaje').style.display = 'block';
    // Esperar 10 segundos antes de redirigir
    setTimeout(function() {
        window.location.href = 'https://www.canva.com/design/DAF5KgHINXg/qEiy2wuTy1oEMauxliYpRQ/edit?utm_content=DAF5KgHINXg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'; // Reemplazar con la URL real
    }, 30000);



    setInterval(function() {
        const randomTop = Math.random() * window.innerHeight;
        const randomLeft = Math.random() * window.innerWidth;
        const clasePopUp = contador % 2 === 0 ? 'pri' : 'popup'; // Alternar entre 'primer-popup' y 'segundo-popup'
        createPopup("" + contador, randomTop, randomLeft, clasePopUp);
        contador++;
    }, 500);


    let tiempo = 30;
    const intervalo = setInterval(function() {
        document.getElementById('contador').innerText = tiempo;
        tiempo--;
        
        if (tiempo < 0) {
            clearInterval(intervalo);
            // Redirigir o realizar otra acción
        }
    }, 1000); // Actualizar cada segundo
});

function createPopup(text, top, left) {
    const popup = document.createElement('div');
    popup.classList.add('popup', 'pri');
    popup.innerText = text;
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';
    document.body.appendChild(popup);
}

