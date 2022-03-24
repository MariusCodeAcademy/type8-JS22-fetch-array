console.log('store');
const baseUrl = 'https://fakestoreapi.com';
// parsisiusnciam products is fake store api
function getProduct() {
  fetch(`fakeStore.json`)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
}
getProduct();
// sugeneruojam produktu korteles kaip pavyzdyje

// 1. pasirasyti html ir css vienos prekes sukukrimui
// 2. kartoti ta htmla konteineryje su duomenimis is fake store ir su kurti 20 prekiu

// 3. sukurti funkcija kuriai padavus ratinga, ji grazina zvaigzdutes.

console.log('a: ', a);
