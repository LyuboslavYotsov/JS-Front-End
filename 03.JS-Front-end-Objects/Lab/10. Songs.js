function printSongsWithGivenTypelist(input) {
  class Song {
    constructor(type, name, duration) {
      this.type = type;
      this.name = name;
      this.duration = duration;
    }
  }
  let songsCount = input.shift();
  const typeList = input.pop();

  let songs = [];

  for (const song of input) {
    [type, name, duration] = song.split("_");
    let currentSong = new Song(type, name, duration);
    songs.push(currentSong);
    songsCount--;
    if (songsCount === 0) {
      break;
    }
  }

  if (typeList === "all") {
    for (const song of songs) {
      console.log(song.name);
    }
  } else {
    songs = songs.filter((s) => s.type === typeList);
    for (const song of songs) {
      console.log(song.name);
    }
  }
}

printSongsWithGivenTypelist([
  2,
  "like_Replay_3:15",
  "ban_Photoshop_3:48",
  "all",
]);
