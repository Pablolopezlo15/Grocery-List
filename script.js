window.onload = () => {
    asociarEventos();
}

function asociarEventos() {
    const itemList = document.getElementById("itemList");
    const itemInput = document.getElementById("item");

    const addProductButton = document.getElementById("addproduct");
    addProductButton.addEventListener("click", addItem);

    function addItem() {
        const itemName = itemInput.value.trim();

        if (itemName === "") {
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${itemName}</span>
            <div>
                <button class="edit"><img id="editar" src="img/editar.png"></button>
                <button class="delete"><img id="editar" src="img/borrar.png"></button>
            </div>
        `;

        const editButton = li.querySelector(".edit");
        const deleteButton = li.querySelector(".delete");

        editButton.addEventListener("click", () => editItem(li));
        deleteButton.addEventListener("click", () => deleteItem(li));

        itemList.appendChild(li);
        itemInput.value = "";
    }

    function editItem(li) {
        const span = li.querySelector("span");
        const itemName = prompt("Editar el producto:", span.textContent);

        if (itemName !== null) {
            span.textContent = itemName;
        }
    }

    function deleteItem(li) {
        itemList.removeChild(li);
    }
}