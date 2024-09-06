document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        // Remover la clase activa de todas las cajas
        document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));

        // Añadir la clase activa a la caja seleccionada
        this.classList.add('active');

        // Obtener la imagen de la caja seleccionada
        const imageSrc = this.querySelector('img').getAttribute('src');
        const infoText = this.getAttribute('data-info');

        // Cambiar la información y la imagen en la caja principal
        const infoBox = document.getElementById('info-box');
        infoBox.innerHTML = `
            <div class="info-content">
                <img src="${imageSrc}" alt="Imagen seleccionada" style="width: 100%; height: auto; margin-bottom: 10px;">
                <p>${infoText}</p>
            </div>
        `;
    });
});
