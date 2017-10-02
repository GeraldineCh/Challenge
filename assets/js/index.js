'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="gallery"></div>');

  if(state.selectedSong === null){
    wrapper.append(Gallery(_ => render(root)));
  }
  root.append(wrapper);
};

const state = {
  songs:[],
  selectedSong: null,
  songInformation: null
};

$(_ =>{
  $("#root").html('<div class="center-align load"><img src="assets/img/song-rewind.gif"/></div>');
  $.getJSON('https://itunes.apple.com/search?term=taylor+swift', data =>{
    $.each(data.results, (i,item) =>{
      state.songs.push({number: item.trackNumber,id: item.trackId, name: item.trackName, collection: item.collectionName, image: item.artworkUrl100});
      if ( i === 49 ) {
        const root = $('#root');
        render(root);
        return false;
      }
    });
  }).fail(() =>{alert("Error server");});
});