document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("articuloCal")) {
        document.getElementById("articuloCal").addEventListener("click", function() {
            window.location.href = "calentamiento.html";
        });
    }

    if (document.getElementById("articuloFent")) {
        document.getElementById("articuloFent").addEventListener("click", function() {
            window.location.href = "fentanilo.html";
        });
    }

    if (document.getElementById("articuloPan")) {
        document.getElementById("articuloPan").addEventListener("click", function() {
            window.location.href = "pandemia.html";
        });
    }

    if (document.getElementById("articuloInc")) {
        document.getElementById("articuloInc").addEventListener("click", function() {
            window.location.href = "incendio.html";
        });
    }

    if (document.getElementById("articuloVal")) {
        document.getElementById("articuloVal").addEventListener("click", function() {
            window.location.href = "valores.html";
        });
    }

    if (document.getElementById("articuloTec")) {
        document.getElementById("articuloTec").addEventListener("click", function() {
            window.location.href = "tecnologia.html";
        });
    }
});
