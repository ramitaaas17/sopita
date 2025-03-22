// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { "text": "Watching the video that you sent me", "time": 0 },
  { "text": "The one where you're showering with wet hair dripping", "time": 10 },
  { "text": "You know that I'm obsessed with your body", "time": 20 },
  { "text": "But it's the way you smile that does it for me", "time": 31 },
  { "text": "It's so sweet, knowing that you love me", "time": 40 },
  { "text": "Though we don't need to say it to. each other, sweet", "time": 50 },
  { "text": "Knowing that I love you", "time": 60 },
  { "text": "And running my fingers through your hair", "time": 64 },
  { "text": "It's so sweet", "time": 70 },
  { "text": "Watching the video where you're lying", "time": 75 },
  { "text": "In your red lingerie ten times nightly", "time": 85 },
  { "text": "You know I think your skin's the perfect color", "time": 95 },
  { "text": "But it's always your eyes that pull me under", "time": 105 },
  { "text": "It's so sweet knowing that you love me", "time": 115 },
  { "text": "Though we don't need to say it to each other, sweet", "time": 125 },
  { "text": "        ♡ ♡ ♡ ♡ ♡ ♡ ♡          ","time": 132 },
  { "text": "Knowing that I love you", "time": 135 },
  { "text": "And running my fingers through your hair", "time": 140 },
  { "text": "It's so sweet", "time": 145 },
  { "text": "        ♡ ♡ ♡ ♡ ♡ ♡ ♡          ","time": 148 },
  { "text": "And I would gladly break it", "time": 170 },
  { "text": "I would gladly break my heart for you", "time": 173 },
  { "text": "And I would gladly break it", "time": 180 },
  { "text": "I would gladly break my heart for you", "time": 183 },
  { "text": "And I would gladly break it", "time": 190 },
  { "text": "I would gladly break my heart for you", "time": 193 },
  { "text": "And I would gladly break it", "time": 200 },
  { "text": "I would gladly break my heart for you", "time": 202 },
  { "text": "It's so sweet knowing that you love me", "time": 209 },
  { "text": "Though we don't need to say it to each other, sweet", "time": 219 },
  { "text": "Knowing that I love you", "time": 229 },
  { "text": "And running my fingers through your hair", "time": 234 },
  { "text": "It's so sweet", "time": 238 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line, index) => time >= line.time && (index === lyricsData.length - 1 || time < lyricsData[index + 1].time)
  );

  if (currentLine) {
    var fadeInDuration = 0.5;
    var fadeOutDuration = 0.5;
    var opacity;

    if (time < currentLine.time + fadeInDuration) {
      opacity = (time - currentLine.time) / fadeInDuration;
    } else if (lyricsData[lyricsData.indexOf(currentLine) + 1] && time >= lyricsData[lyricsData.indexOf(currentLine) + 1].time - fadeOutDuration) {
      opacity = 1 - (lyricsData[lyricsData.indexOf(currentLine) + 1].time - time) / fadeOutDuration;
    } else {
      opacity = 1;
    }

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 30); // Actualiza más seguido para transiciones suaves

// Función para ocultar el título
function ocultarTitulo() {
  lyrics.previousElementSibling.style.transition = "opacity 3s ease-in-out";
  lyrics.previousElementSibling.style.opacity = "0";
  setTimeout(() => {
    lyrics.previousElementSibling.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);