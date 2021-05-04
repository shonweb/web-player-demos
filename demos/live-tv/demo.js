// In order for this demo to work, duration must be included for each playlist item.
const playerInstance = jwplayer('player').setup({
  'playlist': 'http://176.221.147.226:8085/udp/237.7.7.153:17153'
});

playerInstance.on('displayClick', playerInstance.pause);

playerInstance.on('ready', function() {
  const thisDate = new Date();
  const seconds = (thisDate.getMinutes() * 60) + thisDate.getSeconds();
  var playlist = playerInstance.getPlaylist();
  var offset = 0;

  for (var index = 0; index < playlist.length; index++) {
    var duration = Math.round(playlist[index]['duration']);
    if (offset + duration > seconds) {
      playerInstance.playlistItem(index);
      playerInstance.seek(seconds - offset);
      break;
    } else {
      offset += duration;
    }
  }
});
