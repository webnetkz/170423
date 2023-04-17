import { HttpClient } from "./HttpClient.js";
import { loader } from "./loader.js";

const url = 'https://jsonplaceholder.typicode.com';
const getter = new HttpClient(url);


let startNames = await getter.get('users');
startNames = startNames.slice(0, 5);
let root = document.querySelector('.root');
let showMore = document.createElement('div');

if(window.innerWidth >= 1000) {
    showMore.classList.add('cartUser');
    showMore.innerText = 'Показать еще';
    showMore.id = 'showMore';
    showMore.addEventListener('click', insert);
} else {
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
            insert();
        }
    });      
}

function insert() {
    loader();
    if(document.querySelector('#showMore')) document.querySelector('#showMore').remove();
    for(let element in startNames) {
        let newUser = document.createElement('div');
        newUser.classList.add('cartUser');
        newUser.innerText = startNames[element].name;
        root.appendChild(newUser);
    }
    root.append(showMore);
}

insert();
