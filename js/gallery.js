'use strict';

const tsItem = (results, update) => {
  const colPokemon = $('<div class="col s12 m4 center-align"></div>');
  const contentPokemon = $('<div class="content-pokemon">HOLA</div>');
  const contentImg = $('<div class="img-pokemon"></div>');

  contentPokemon.append(contentImg);

  return colPokemon;
};

const reRender = (rowPokemon, pokelist, update) => {
  rowPokemon.empty();
  if(pokelist.length != 0){
    pokelist.forEach(e => {
      rowPokemon.append(tsItem(e,update));
    });
  }
  else{
    rowPokemon.html('<div class="col s12">No se encontraron pokemónes</div>');
  }
};

const Gallery = (update) => {

  const contentPokemon = $('<div class="row"></div>');
  const divInput = $('<div class="input-field col s8 offset-s1">');
  const rowPokemon = $('<div class="row container"></div>');
  const sectionMod = $('<section class="overlay"></section>');
  $("#tracks").after(sectionMod);

  contentPokemon.append(divInput);
  contentPokemon.append(rowPokemon);

  state.songs.forEach((results)=>{
    rowPokemon.append(tsItem(results, update));
  });


  return contentPokemon;
};

