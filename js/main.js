import { servicesProducts } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
    const libroContainer = document.querySelector("[data-libro]");
    const form = document.querySelector("[data-form]");

    function createCard(titulo, autor, precio, imagen, id) {
        const card = document.createElement("div"); 
        card.classList.add("libro-item"); 
        card.innerHTML = `
            <img class="libro-imagen" src="${imagen}" alt="${titulo}">
            <p class="libro-descripcion">${titulo}</p> 
            <p class="libro-autor">${autor}</p> 
            <p class="libro-precio">$ ${precio}</p> 
            <button class="icono-borrar" data-id="${id}">
                <div class="icono-basurero">
                    <img src="imagenes/trash.png" alt="Eliminar">
                </div>
            </button> 
        `;

        const deleteButton = card.querySelector(".icono-borrar");
        deleteButton.addEventListener("click", () => {
            servicesProducts.deleteProduct(id)
                .then(() => {
                    card.remove();
                })
                .catch(err => console.log(err));
        });

        libroContainer.appendChild(card);
        return card;
    }

    const render = async () => {
        try {
            const listProducts = await servicesProducts.productList();
            libroContainer.innerHTML = ''; // Limpia el contenedor antes de renderizar
            console.log(listProducts);  // Verifica que se obtienen los productos correctamente
            listProducts.forEach((product) => {
                createCard(
                    product.titulo,
                    product.autor,
                    product.precio,
                    product.imagen,
                    product.id
                );
            });
        } catch (error) {
            console.log(error);
        }
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = document.querySelector("[data-titulo]").value;
        const autor = document.querySelector("[data-autor]").value;
        const precio = document.querySelector("[data-precio]").value;
        const imagen = document.querySelector("[data-imagen]").value;

        if (titulo.trim() === '' || autor.trim() === '' || precio.trim() === '' || imagen.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            return;
        }

        servicesProducts.createProducts(titulo, autor, precio, imagen)
            .then((res) => {
                createCard(titulo, autor, precio, imagen);
                form.reset();
                
            })
            .catch((err) => console.log(err));
    });
    render();
});

