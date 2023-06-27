function myfunction(){
    let upper = document.getElementById("texto");
    upper.value = upper.value.toUpperCase();
    carac.textContent = "O número de caracteres é: "+ upper.value.length;
}