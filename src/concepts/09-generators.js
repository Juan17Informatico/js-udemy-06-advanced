
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () =>{
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);

}


function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction (){

    yield 'Primer valor';
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';
    yield 'quinto valor';

    return 'Valores';


}