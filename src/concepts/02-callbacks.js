import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371f2343e37870b91ef1';

    findHero(id, (nombre)=>{
        element.innerHTML = nombre.name;
    });

}

/**
 * 
 * @param {String} id 
 * @param {(hero: Object) => void} callback 
 */
const findHero = (id, callback) =>{
    const heroe = heroes.find(hero => hero.id === id);

    callback(heroe);

}