const valor = prompt("Insira um valor em Real:");

const moedas = prompt(
  "Para qual moeda você deseja converter?" +
    "\n1. Libra" +
    "\n2. Euro" +
    "\n3. Dolar"
);

switch (moedas) {
  case "1":
    alert("Resultado: " + valor / 6, 09 + " Libras ");
    break;
  case "2":
    alert("Resultado: " + valor / 5, 40 + " Euros ");
    break;
  case "3":
    alert("Resultado: " + valor / 4, 91 + " Dólares ");
    break;
  default:
    alert("Opção Inválida");
}
