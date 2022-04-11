const start = async () => {
    try{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const {info, results} = await response.json();
    //console.log(results);
    results.forEach((character) => {
        const card = mostrarTarjetas (character);
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })

    }
    catch(err){
        console.error(err);
    }
}

    const mostrarTarjetas = (character) =>{
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
    return card;

    };
    const buscarPorNombre = async () => {
        
        try{
            const name = document.getElementById('name').value;
            const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
            const {info, results} = await response.json();
        
            document.getElementById("cards").innerHTML = '';
            results.forEach((character) => {
            const card = mostrarTarjetas (character);
            document.getElementById('cards').insertAdjacentHTML('beforeend', card);
        })
       
        
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
        document.getElementById("cards").innerHTML = '';
        results.forEach((character) => {
             const card = mostrarTarjetas(character);
             document.getElementById('cards').insertAdjacentHTML('beforeend', card);           
        })
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
    
        document.getElementById("cards").innerHTML = '';
        results.forEach((character) => {
        const card = mostrarTarjetas (character);
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })
   
    
} catch(err){
    console.error(err);
}
}


    window.onload = start();