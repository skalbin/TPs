const personajes = [
    {
        id: 1,
        nombre: 'IronMan',
        tipo : 'superheroe',
        edad: 45
    },
    {
        id: 2,
        nombre: 'Viuda Negra',
        tipo : 'superheroe',
        edad: 35
    },
    {
        id: 3,
        nombre: 'Capitan America',
        tipo : 'superheroe',
        edad: 100
    },
    {
        id: 4,
        nombre: 'Hulk',
        tipo : 'superheroe',
        edad: 37
    },
    {
        id: 5,
        nombre: 'Thor',
        tipo : 'superheroe',
        edad: 105
    }
];

console.log(personajes);

const mostrarPorConsola = () => {
    let persId = document.getElementById("personajeId").value;
    let personajeBuscado = personajes.filter(p => p.id.toString() === persId);
    console.log(personajeBuscado);
}


const perFil = personajes.map(p => p.nombre);
console.log(perFil);

const promedio = (personajes.reduce((valPrevio, valActual) => valPrevio + valActual, 0))/personajes.length;
console.log(promedio);

const persTipo = personajes.filter(p => p.tipo);
console.log(persTipo);