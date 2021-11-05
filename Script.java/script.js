

const Nome = prompt('Inserisci il nome');
console.log(Nome);

const Cognome = prompt('Inserisci il cognome');
console.log(Cognome);

const ColoreP = prompt('Inserisci il tuo colore preferito');
console.log(ColoreP);

let a = '21';
let b = '@gmail';
let c = '.com';

let password = 'password: ' + Nome + Cognome + ColoreP + a;
document.getElementById('password').innerHTML = password;
console.log(password);

let email = 'Email: ' + Nome + Cognome + ColoreP + a + b + c;
document.getElementById('email').innerHTML = email;
console.log(email);

