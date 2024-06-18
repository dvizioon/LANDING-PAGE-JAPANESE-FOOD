var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var btn_OpenContact = document.getElementById("openContact");
var span = document.querySelector("#myModal .close"); // Seleciona o .close dentro de #myModal
var form = document.querySelector("form");
var modalContact = document.getElementById("modalContact");

btn.onclick = function () {
    modal.style.display = "block";
}

if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    }
}

btn_OpenContact.onclick = () => {
    modalContact.style.display = "block";
}

var spanContact = document.querySelector("#modalContact .close");
if (spanContact) {
    spanContact.onclick = function () {
        modalContact.style.display = "none";
    }
}



form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    var name = form.elements["name"].value;
    var food = form.elements["food"].value;

    // console.log("Nome:", name);
    // console.log("Comida:", food);

    if (name === "") {
        alert("Nome Vazio...")
    }

 
    var whatsappLink = "https://wa.me/+5599924787522?text=" + encodeURIComponent(`Nome:${name}${food?",Comida: "+food:""}`);

    window.location.href = whatsappLink;

    modalContact.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalContact) {
        modalContact.style.display = "none";
    }
}
