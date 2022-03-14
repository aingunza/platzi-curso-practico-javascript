// Function que recibe Array desde consola HTML

const list1 = [40000000, 400, 300, 500];


function ordenaArray(array) {
  let temp=0;
  for (let i = 0; i < array.length-1; i++) {

    for (let y = i; y < array.length-1; y++) {

      if (array[i] < array[y+1]) {
        temp = array[i];
        array[i] = array[y + 1];
        array[y + 1] = temp;
      }
    }
  }
  return array;
}

function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function hallarMediana(lista) {
  let mediana;
  const listaOrd = ordenaArray(lista);
  if (esPar(listaOrd.length)) {
    mediana =
    (listaOrd[parseInt(listaOrd.length/2)] + listaOrd[parseInt(listaOrd.length/2) + 1])/2;
    
  } else {
    mediana = listaOrd[parseInt(listaOrd.length/2)];
  }
  return mediana;
}

const resultMediana = hallarMediana(list1);

console.log("La mediana es: "+resultMediana);
