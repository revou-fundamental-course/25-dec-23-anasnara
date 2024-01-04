function Hasil(){
    let angkatinggi = document.getElementById("input-tinggi").value;
    let angkaalas = document.getElementById("input-alas").value;

    let luassegitiga = parseInt(angkatinggi) * parseInt(angkaalas) /2;

    alert(luassegitiga)
    
}

function Reset(){
    let angkatinggi = document.getElementById("input-tinggi").value;
    let angkaalas = document.getElementById("input-alas").value;

    angkatinggi.value = null;
    angkaalas.value = null;

    alert("Berhasil Reset!");
}

function Luas1(){

    Luas1.innerHTML = `Luas Segitiga adalah ${luassegitiga}cm2`
}