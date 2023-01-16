function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    element.className = arr1.join(" ");
  }
}
function filterObjects(filterVAlues) {
  let products, i
  products = document.getElementsByClassName('product_container')
  if (filterVAlues == 'all') filterVAlues = "";
  for (i = 0; i < products.length; i++){
    removeClass(products[i], 'show')
    if(products[i].className.indexOf(filterVAlues) > -1) addClass(products[i],'show')
  }
}
filterObjects("all");