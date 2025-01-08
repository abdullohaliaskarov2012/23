

let firstName = prompt("Введите свое имя:");
let lastName = prompt("Введите свою фамилию:");
let height = prompt("Введите свой возраст:");

let choice = prompt("1 или 2");

if (choice === "1") {
    let header = document.createElement("div");
    header.textContent = "Ваши данные в верхнем регистре:";
    header.style.backgroundColor = "black";
    header.style.color = "white";
    header.style.padding = "10px";
    header.style.margin = "5px 0";
    header.style.borderRadius = "5px";
    document.body.appendChild(header);

    let name = document.createElement("div");
    name.textContent = `Имя: ${firstName.toUpperCase()}`;
    name.style.backgroundColor = "black";
    name.style.color = "white";
    name.style.padding = "10px";
    name.style.margin = "5px 0";
    name.style.borderRadius = "5px";
    document.body.appendChild(name);

    let surname = document.createElement("div");
    surname.textContent = `Фамилия: ${lastName.toUpperCase()}`;
    surname.style.backgroundColor = "black";
    surname.style.color = "white";
    surname.style.padding = "10px";
    surname.style.margin = "5px 0";
    surname.style.borderRadius = "5px";
    document.body.appendChild(surname);

    let age = document.createElement("div");
    age.textContent = `Возраст: ${height}`;
    age.style.backgroundColor = "black";
    age.style.color = "white";
    age.style.padding = "10px";
    age.style.margin = "5px 0";
    age.style.borderRadius = "5px";
    document.body.appendChild(age);
} else if (choice === "2") {
    let header = document.createElement("div");
    header.textContent = "Ваши данные в нижнем регистре:";
    header.style.backgroundColor = "black";
    header.style.color = "white";
    header.style.padding = "10px";
    header.style.margin = "5px 0";
    header.style.borderRadius = "5px";
    document.body.appendChild(header);

    let name = document.createElement("div");
    name.textContent = `Имя: ${firstName.toLowerCase()}`;
    name.style.backgroundColor = "black";
    name.style.color = "white";
    name.style.padding = "10px";
    name.style.margin = "5px 0";
    name.style.borderRadius = "5px";
    document.body.appendChild(name);

    let surname = document.createElement("div");
    surname.textContent = `Фамилия: ${lastName.toLowerCase()}`;
    surname.style.backgroundColor = "black";
    surname.style.color = "white";
    surname.style.padding = "10px";
    surname.style.margin = "5px 0";
    surname.style.borderRadius = "5px";
    document.body.appendChild(surname);

    let age = document.createElement("div");
    age.textContent = `Возраст: ${height}`;
    age.style.backgroundColor = "black";
    age.style.color = "white";
    age.style.padding = "10px";
    age.style.margin = "5px 0";
    age.style.borderRadius = "5px";
    document.body.appendChild(age);
} 

