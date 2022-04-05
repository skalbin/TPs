const personajes = [
    {
        id: 1,
        nombre: 'Iron Man',
        tipo : 'Superheroe',
        edad: 45,
        lugarNac: 'Estados Unidos',
        imagen: 'imagenes/iron.png'
    },
    {
        id: 2,
        nombre: 'Viuda Negra',
        tipo : 'Superheroe',
        edad: 35,
        lugarNac: 'Rusia',
        imagen: 'imagenes/viuda.jpg'
    },
    {
        id: 3,
        nombre: 'Capitan America',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 100,
        imagen: 'imagenes/capitan.jpg'
    },
    {
        id: 4,
        nombre: 'Hulk',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 37,
        imagen: 'imagenes/hulk.jpg'
    },
    {
        id: 5,
        nombre: 'Thor',
        tipo : 'Superheroe',
        lugarNac: 'Asgard',
        edad: 105,
        imagen: 'imagenes/thor.jpg'
    },
    {
        id: 6,
        nombre: 'Flash',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 30,
        imagen: 'imagenes/flash.jpg'
    },
    {
        id: 7,
        nombre: 'Loki',
        tipo : 'Extraterrestre',
        lugarNac: 'Asgard',
        edad: 104,
        imagen:'imagenes/loki.jpg'
    },
    {
        id: 8,
        nombre: 'Thanos',
        tipo : 'Extraterrestre',
        lugarNac: 'Titan',
        edad: 110,
        imagen:'imagenes/thanos.jpg'
    
    },
    {
        id: 9,
        nombre: 'Duende Verde',
        tipo : 'Villano',
        lugarNac: 'Estados Unidos',
        edad: 50,
        imagen:'imagenes/duende.jpg'
    },
    {
        id: 10,
        nombre: 'Ronan',
        tipo : 'Extraterrestre',
        lugarNac: 'Hala',
        edad: 120,
        imagen: 'imagenes/ronan.jpg'
    },
    {
        id: 11,
        nombre: 'Superman',
        tipo : 'SuperHeroe',
        lugarNac: 'Krypton',
        edad: 170,
        imagen:'imagenes/superman.jpg'
    },
    {
        id: 12,
        nombre: 'Deadpool',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 35,
        imagen:'imagenes/deadpool.jpg'
    },
    {
        id: 13,
        nombre: 'Supergirl',
        tipo : 'Superheroe',
        lugarNac: 'Krypton',
        edad: 150,
        imagen:'imagenes/supergirl.jpg'
    },
    {
        id: 14,
        nombre: 'Literna Verde',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 35,
        imagen:'imagenes/literna.jpg'
    },
    {
        id: 15,
        nombre: 'Batman',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 45,
        imagen:'imagenes/batman.jpg'
    },
    {
        id: 16,
        nombre: 'Harley Quinn',
        tipo : 'Villano',
        lugarNac: 'Estados Unidos',
        edad: 28,
        imagen:'imagenes/harley.jpg'
    },
    {
        id: 17,
        nombre: 'Joker',
        tipo : 'Villano',
        lugarNac: 'Estados Unidos',
        edad: 50,
        imagen:'imagenes/joker.jpg'
    },
    {
        id: 18,
        nombre: 'Groot',
        tipo : 'Extraterrestre',
        lugarNac: 'Planeta X',
        edad: 15,
        imagen:'imagenes/groot.jpg'
    },
    {
        id: 19,
        nombre: 'Rocket',
        tipo : 'Extraterrestre',
        lugarNac: 'Planeta X',
        edad: 30,
        imagen:'imagenes/rocket.jpg'
    },
    {
        id: 20,
        nombre: 'Dr Strange',
        tipo : 'Mago',
        lugarNac: 'Estados Unidos',
        edad: 40,
        imagen:'imagenes/strange.jpg'
    },
    {
        id: 21,
        nombre: 'Spiderman',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 19,
        imagen:'imagenes/spiderman.jpg'
    },
    {
        id: 22,
        nombre: 'Wanda',
        tipo : 'Bruja',
        lugarNac: 'Rusia',
        edad: 27,
        imagen:'imagenes/wanda.jpg'
    },
    {
        id: 23,
        nombre: 'Wolverine',
        tipo : 'Superheroe',
        lugarNac: 'Estados Unidos',
        edad: 50,
        imagen:'imagenes/wolverine.jpg'
    },
    {
        id: 24,
        nombre: 'Aquaman',
        tipo : 'Superheroe',
        lugarNac: 'Poseidón',
        edad: 135,
        imagen:'imagenes/aquaman.jpg'
    },
    {
        id: 25,
        nombre: 'Tormenta',
        tipo : 'Superheroe',
        lugarNac: 'Wakanda',
        edad: 35,
        imagen:'imagenes/tormenta.jpg'
    },

];

const Tarjetas = (personaje) => {

    const card =    `<div class="col" id="${personaje.id}">
                        <div class="card h-100">
                        <img  height="200px" src="${personaje.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.nombre}</h5>
                            <p class="card-text">Tipo: ${personaje.tipo} <br> Lugar de Nacimiento: ${personaje.lugarNac} <br> Edad: ${personaje.edad}.</p>
                        </div>
                        </div>
                    </div>`


    document.getElementById("tarjetas").insertAdjacentHTML('beforeend', card);
}

const buscarPorId = () => {
    const id = document.getElementById('id').value;
    const personaje = personajes.find(personaje => personaje.id.toString() === id);
    document.getElementById("tarjetas").innerHTML = '';

    Tarjetas(personaje);
    
}

const buscarPorTipo = () => {
    const select = document.getElementById('tipo');

    const tipo = select.options[select.selectedIndex].text;

   // console.log(tipo);

    const persoTipo = personajes.filter(personaje => personaje.tipo === tipo);
    
    if(tipo != "Seleccionar Tipo"){
        document.getElementById("tarjetas").innerHTML = '';
        persoTipo.forEach(Tarjetas);
    }else{
        primera();
    }

}

const primera = () => {
    personajes.forEach(Tarjetas);
}

window.onload = primera();