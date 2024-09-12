let numero;

while (true) {
  numero = prompt("Inserisci un numero (1, 2 o 3):");

  if (numero == 1) {
    console.log("E' stata selezionata acqua");
    break;
  } else if (numero == 2) {
    console.log("E' stata selezionata coca cola");
    break;
  } else if (numero == 3) {
    console.log("E' stata selezionata birra");
    break;
  } else {
    console.log("Numero non valido. Riprova.");
  }
}
