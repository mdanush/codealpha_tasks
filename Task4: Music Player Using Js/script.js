const songs = [
  {
    title: "Dreams",
    artist: "Bensound",
    src: "music1.mp3",
    cover: "cover1.jpg"
  },
  {
    title: "Adventure",
    artist: "Bensound",
    src: "music2.mp3",
    cover: "cover2.jpg"
  },
  {
    title: "Sunny",
    artist: "Bensound",
    src: "music3.mp3",
    cover: "cover3.jpg"
  }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
  currentSong = index;
  playSong();
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

function togglePlay() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

function setProgress(e) {
  const width = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
}

function setVolume(val) {
  audio.volume = val;
}

audio.addEventListener("ended", nextSong);
loadSong(currentSong);
