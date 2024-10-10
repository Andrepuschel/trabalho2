
// a) Função swap
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  
  // b) Função shuffle
  const shuffle = (arr, n) => {
    for (let i = 0; i < n; i++) {
      const r = Math.floor(Math.random() * (arr.length - 1)) + 1;
      swap(arr, i, r);
    }
  };
  
  // c) Função bubble_sort
  const bubble_sort = (arr) => {
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          swap(arr, i - 1, i);
          swapped = true;
        }
      }
    } while (swapped);
  };
  
  // d) Função selection_sort
  const selection_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      swap(arr, i, min);
    }
  };
  
  // e) Função quick_sort
  const quick_sort = (arr, ini, fim) => {
    if (ini < fim) {
      const p = particionamento(arr, ini, fim);
      quick_sort(arr, ini, p - 1);
      quick_sort(arr, p + 1, fim);
    }
  };
  
  // f) Função particionamento
  const particionamento = (arr, ini, fim) => {
    const pivot = arr[fim];
    let i = ini - 1;
    for (let j = ini; j <= fim - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, fim);
    return i + 1;
  };