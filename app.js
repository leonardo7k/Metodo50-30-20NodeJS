var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o valor total que você deseja análisar?\n", function(answer) {
    var resp = answer;
    leitor.close();
    
    const valorTotal = resp;
    const valorEssencial = valorTotal * 0.5;
    const valorDesejos = valorTotal * 0.3;
    const valorInvestimentos = valorTotal * 0.2;
    
    const cotasMXRF11 = valorInvestimentos / 9.70;
    
    
    console.log("Valor total: R$" + valorTotal);
    console.log("Despesas essenciais: R$" + valorEssencial);
    console.log("Desejos: R$" + valorDesejos);
    console.log("Investimentos: R$" + valorInvestimentos);
    console.log("Total de " + Math.trunc(cotasMXRF11) + " cotas de MXRF11 que renderiam R$" + (Math.trunc(cotasMXRF11) * 0.11) + " ao mês.");
});


