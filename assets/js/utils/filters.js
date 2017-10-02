const filterByName = (songs, query) => {
  return songs.filter((item)=>{
    return !(item.name.toLowerCase().indexOf(query.toLowerCase()) === -1);
  });
};
