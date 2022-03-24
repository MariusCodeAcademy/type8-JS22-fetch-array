console.log('main');
const baseUrl = 'https://jsonplaceholder.typicode.com';
// nusitaikom i mygtuka ir app el
const usersBtnEl = document.getElementById('user-btn');
const appEl = document.getElementById('app');

function getUsers() {
  fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log('data ===', data);
      generateUsersList(data);
    })
    .catch((err) => console.log(err.message));
}

// mygtuko paspaudimu parsisiusti visus vartotojus
usersBtnEl.addEventListener('click', getUsers);

// is gautu duomenu sugeneruoti li elementus (button)
// sugeneruoti ol el, ir sudeti i ji li elementus. ol el patalpini appEl
function generateUsersList(usersArr) {
  const olEl = document.createElement('ol');
  usersArr.forEach((uObj) => {
    const madeLi = makeOneLi(uObj.id, uObj.name, uObj.email, uObj.company.name);
    olEl.append(madeLi);
  });
  appEl.append(olEl);
}

function makeOneLi(id, name, email, compName) {
  const liEl = document.createElement('li');
  liEl.textContent = `${name}  ${email}  ${compName} `;
  const btnEl = document.createElement('button');
  btnEl.textContent = 'more info';
  btnEl.addEventListener('click', () => getSingleUser(id));
  liEl.append(btnEl);
  return liEl;
}

function getSingleUser(id) {
  console.log('getSingleUser', id);
}

// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info
// atvaizduojam papildomoj korteleje virs saraso
// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.
// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja
// 3. sukurti ir supildyti vartotojo korteles info.
// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase
