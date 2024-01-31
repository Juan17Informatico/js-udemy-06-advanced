import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
    const id1 = "5d86371f2343e37870b91ef1";
    const id2 = "5d86371f25a058e5b1c8a65e";

    findHero(id1, (error, nombre) => {
        // element.innerHTML = nombre?.name || 'No hay Heroe';

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero2.name}, ${nombre.name}`;

        });

    });
};

/**
 *
 * @param {String} id
 * @param {(error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const heroe = heroes.find((hero) => hero.id === id);

    if (!heroe) {
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, heroe);
};
