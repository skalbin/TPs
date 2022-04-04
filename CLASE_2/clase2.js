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
    },
    {
        id: 6,
        nombre: 'Flash',
        tipo : 'superheroe',
        edad: 30
    },
    {
        id: 7,
        nombre: 'Loki',
        tipo : 'villano',
        edad: 104
    },
    {
        id: 8,
        nombre: 'Thanos',
        tipo : 'villano',
        edad: 110
    },
    {
        id: 9,
        nombre: 'Duende Verde',
        tipo : 'villano',
        edad: 50
    },
    {
        id: 10,
        nombre: 'Ronan',
        tipo : 'villano',
        edad: 120
    }

];

//mostrar array por consola
console.log(personajes);

//buscar objeto por id y mostrarlo
const mostrarPorConsola = () => {
    const persId = document.getElementById("personajeId").value;
    const personajeBuscado = personajes.filter(p => p.id.toString() === persId);
    console.log(personajeBuscado);
   //CLASE 3- const row = `<p> ${personaje.nombre}</p>`;

}

//mostrar array filtrado por los nombres
const perFil = personajes.map(p => p.nombre);
console.log(perFil);

//hacer promedio de edad
const promedio = (personajes.reduce((valPrevio, valActual) => valPrevio + valActual.edad, 0))/personajes.length;
console.log(promedio);

//hacer array filtrado con los objetos por tipo
const persTipo = personajes.filter(p => p.tipo == "superheroe");
console.log(persTipo);