// Function que recibe Array desde consola HTML

function calcularMediaAritmetica(lista) {
  //   let sumaLista = 0;

  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista += lista[i];
  //   }

  const sumaLista = lista.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue=0
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
