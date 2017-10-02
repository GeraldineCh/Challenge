'use strict';

const songItem = (song, update) => {
  const num = convertNum(song.number);
  const colsong = $('<div class="col s6 m12 center-align"></div>');
  const modal = $('<a href="#"></a>');
  const contentsong = $('<div class="content-song"></div>');
  const contentImg = $('<div class="img-song"></div>');
  const imgsong = $('<img src="' + song.image + '"/>');
  const contentIcon = $('<div class="img-icon">' + '#' + num + '    ' +song.name + '<br>'+song.collection +'</p></div>');


  modal.append(contentsong);
  colsong.append(modal);
  contentsong.append(contentImg);
  contentImg.append(imgsong);
  contentsong.append(contentIcon);


  return colsong;
};

const reRender = (rowsong, songlist, update) => {
  rowsong.empty();
  if(songlist.length != 0){
    songlist.forEach(e => {
      rowsong.append(songItem(e,update));
    });
  }
  else{
    rowsong.html('<div class="col s12">No match</div>');
  }
};

const Gallery = (update) => {

  const contentsong = $('<div class="row"></div>');
  const divInput = $('<div class="input-field col s8 offset-s1">');
  const iconSearch = $('<label><span class="material-icons prefix">search</span></label>');
  const inputName =  $('<input type="text" placeholder="Search song">');
  const buttonAz = $('<div class="col s2 left-align"><a class="waves-effect waves-light btn">A - Z</a></div>');
  const buttonNum = $('<div class="col s1"><a class="waves-effect waves-light btn">#</a></div>');
  const rowsong = $('<div class="row col m8"></div>');
  const colSuggest = $('<div class="suggest col s6 m3 center-align"></div>');
  const sectionMod = $('<section class="overlay"></section>');
  $("#root").after(sectionMod);

  contentsong.append(divInput);
  divInput.append(iconSearch);
  divInput.append(inputName);
  contentsong.append(buttonAz);
  contentsong.append(buttonNum);
  contentsong.append(rowsong);
  contentsong.append(colSuggest);

  state.songs.forEach((song)=>{
    rowsong.append(songItem(song, update));
  });

  inputName.keyup(function( ) {
    const songFilter = filterByName(state.songs, $(this).val());
    reRender(rowsong, songFilter, update);
  });

  buttonAz.click(_ =>{
    const songOrderName  = orderByName(state.songs,update);
    reRender(rowsong, songOrderName, update);
  });

  buttonNum.click(_ =>{
    const songOrderNum  = orderByNum(state.songs,update);
    reRender(rowsong, songOrderNum,update);
  });

  return contentsong;
};

