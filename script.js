// funcion domcontentloaded
document.addEventListener('DOMContentLoaded', function(){
    // mostrar json
    function mostrarItems() { // -> mostrar los productos en la página
        document.getElementById('bienes').innerHTML = bienes.map(item => ` 
        <main id="items" class="col-sm-9 row">
            ${item.nature}
        </main>
        `).join('');
    }

    mostrarItems()

})




