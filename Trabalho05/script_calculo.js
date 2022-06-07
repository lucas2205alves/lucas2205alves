var btn = document.querySelector("#enviar")
btn.addEventListener("click", calculo)
function calculo() {
     
        var media, aulas, faltas, presenca;
        
        var n1 = parseFloat(document.querySelector("#n1").value);
        var aulas = parseFloat(document.querySelector("#aulas").value);
        var faltas = parseFloat(document.querySelector("#faltas").value);
        
        presenca1 = (aulas - faltas)
        media = n1
        presenca_porcentagem = (100 * presenca1) 
        presenca = (presenca_porcentagem / aulas)
        
        if (presenca < 75) {
            document.write ("Reprovado");
        } 
        if (media >= 7 && presenca >= 75) {
            document.write("Aprovado")
        } 
        if (media < 7 && presenca >= 75 ) {
            var notaExame = parseFloat((prompt("digite sua nota aqui")))
            exame()
        } 
        function exame() {
            var resultado = (notaExame + n1) / 2
            if(resultado > 5) {
                document.write ("Aprovado");
            } else {
                document.write ("Reprovado");
            }
        }
    }
