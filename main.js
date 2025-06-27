let container = document.getElementById("container");
const inputSearch = document.getElementById("input");
const button = document.getElementById("button");

function showData(data) {
    container.innerHTML = "";

    data.forEach((value) => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="num-badge">${value.num}</div>
            <h1>${value.name}</h1>
            <img src="${value.img}" width="100" height="107" alt="">
            <div class="type-badge">${value.type}</div>
            <h3>${value.candy_count}</h3>
            <p class="weight">${value.weight}</p>
            <span class="weaknesses">${value.weaknesses}</span>
            <div class="spawn-time">${value.spawn_time}</div>
        `;

        container.appendChild(card);
    });
}

showData(data);

button.addEventListener("click", () => {
    let inpValue = inputSearch.value.toLowerCase();
    let filteredCards = data.filter((value) =>
        value.name.toLowerCase().includes(inpValue)
    );
    showData(filteredCards);
});


select .addEventListener("change", () => {
    let selectedValue = select.value;
    let sortedCards;

    if (selectedValue === "A-Z") {
        sortedCards = data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedValue === "Z-A") {
        sortedCards = data.sort((a, b) => b.name.localeCompare(a.name));
    }

    showData(sortedCards);
});