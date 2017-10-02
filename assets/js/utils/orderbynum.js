const orderByNum = (songs) => {
  return songs.sort((a, b) => a.id - b.id);
};