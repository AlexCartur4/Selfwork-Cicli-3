let numero;

while (true) {
  numero = prompt("Inserisci un numero (1, 2 o 3):");

  if (numero == 1) {
    console.log("Hai inserito 1");
    break;
  } else if (numero == 2) {
    console.log("Hai inserito 2");
    break;
  } else if (numero == 3) {
    console.log("Hai inserito 3");
    break;
  } else {
    console.log("Numero non valido. Riprova.");
  }
}
