function playAudio(word) {
  const audio = document.getElementById("audioPlayer");
  audio.src = "audio/" + word + ".mp3";
  audio.play();
}
  