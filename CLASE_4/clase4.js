let Actual;

const start = async () => {
    try{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const {info, results} = await response.json();
    Actual = 'https://rickandmortyapi.com/api/character'
    mostrarTarjetas(results);

    }
    catch(err){
        console.error(err);
    }
}

const mostrarTarjetas = (results) =>{
    document.getElementById("cards").innerHTML = '';
    results.forEach((character) => {
        const card = `
        <div class = "col">
        <div class="card h-100" >
        <img height="200px" src="${character.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Origen : ${character.origin.name}.</p>
            <p class="card-text">Estado : ${character.status}.</p>
            <p class="card-text">Especie : ${character.species}.</p>
        </div>
        </div>
        </div>`;

        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })

};

const buscarPorNombre = async () => {
        
    try{
        const name = document.getElementById('name').value;
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
        const {info, results} = await response.json();

        mostrarTarjetas(results);
    
     
    } catch(err){
        console.error(err);
    }
}

const buscarPorEstado = async () => {
    try{
        const select = document.getElementById('status');
        const status = select.options[select.selectedIndex].text;
        const response = await fetch(`https://rickandmortyapi.com/api/character?status=${status}`);
        const {info, results} = await response.json();

        mostrarTarjetas(results);
       
    } catch(err){
        console.error(err);
    }
}

const buscarPorEspecie = async () => {
        
    try{
        const species = document.getElementById('species').value;
        console.log(species);
        const response = await fetch(`https://rickandmortyapi.com/api/character?species=${species}`);
        const {info, results} = await response.json();
        mostrarTarjetas(results);
    
} catch(err){
    console.error(err);
}

}

const next = async() => {
    try{
        const response = await fetch(Actual);
        const {info} = await response.json();
        if(info.next != null){
        const resp = await fetch(info.next);
        const {results} = await resp.json();

        Actual = info.next;

        mostrarTarjetas(results);

    } else {
        window.alert("No hay más páginas siguientes")
    }    
    } catch(err){
        console.error(err);
    }
}

const prev = async() => {
    try{
        const response = await fetch(Actual);
        const {info} = await response.json();
        if(info.prev != null){
            const resp = await fetch(info.prev);
            const {results} = await resp.json();
        
            Actual = info.prev;

            mostrarTarjetas(results);
        } else {
            window.alert("No hay páginas previas")
        }

    } catch(err){
        console.error(err);
    }
}

window.onload = start();