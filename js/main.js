'use strict';

const render = (tracks) => {
  tracks.empty();
  const wrapper = $('<div id="items"></div>');
 
  if(state.selectedSong === null){
    wrapper.append(Gallery(_ => render(tracks)));
  }
  tracks.append(wrapper);
};

const state = {
  songs:[],
  selectedSong: null,
  songInformation: null
};


$(_ =>{
  $.getJSON('https://itunes.apple.com/search?term=taylor+swift', data =>{
    $.each(data.results, (i,item) =>{
      state.songs.push({name: item.trackName, collection: item.collectionId, id: item.trackId });
      if ( i === 20 ) {
        const tracks = $('#tracks');
        render(tracks);
        return false;
      }
    });
  }).fail(() =>{alert("Error server");});
});