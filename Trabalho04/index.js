const matriz = [ [1,2,3,4],
                 [5,6,7,8],
                 [9,10,11,12],
                 [13,14,15,16]];

// Calculo da primeira coluna

let somacoluna = 0
for(let i = 0; i < matriz.length; i++)
{
  somacoluna += matriz[i][0];
}
console.log(somacoluna)

// Calculo da primeira linha
let somalinha = 0
for(let i = 0; i < matriz.length; i++)
{
  somalinha += matriz[0][i];
}
console.log(somalinha)


// Calculo dos valores totais
let somatotal = 0
for(let i = 0; i < matriz.length; i++)
{
  somatotal += matriz[i][0];
  somatotal += matriz[i][1];
  somatotal += matriz[i][2];
  somatotal += matriz[i][3];
}
console.log(somatotal)

// Calculo dos valores diagonais
let somadiag = 0
for(let i = 0; i < matriz.length; i++)
{
  somadiag += matriz[i][i];
}
console.log(somadiag)





