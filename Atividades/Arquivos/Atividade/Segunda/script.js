function myfunction(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = document.getElementById("num3").value;
    let max = Math.max(n1, n2, n3);
    resultado.textContent = "O maior número é: "+ max;
}