var playlist = {"Meat Loaf": "Seize the Night"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}


updatePlaylist(playlist,'a','a')
console.log(playlist)