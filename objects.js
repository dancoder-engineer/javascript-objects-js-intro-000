var playlist = {"Meat Loaf": "Seize the Night"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}


playlist = updatePlaylist(playlist,'a','a')
console.log(playlist)