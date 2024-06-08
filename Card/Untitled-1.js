var splashScreen = document.getElementById('splashScreen');
var mainPage = document.getElementById('mainPage');
var mainMusic = document.getElementById('mainMusic');

var musicFiles = [
  'https://github.com/amelicamelic/BANANAPOWER/raw/main/%E5%8F%AF%E6%84%9B%E3%81%8F%E3%81%A6%E3%81%94%E3%82%81%E3%82%93_%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%83%80%E3%82%A6%E3%83%B3.MP3',
  'https://github.com/amelicamelic/BANANAPOWER/raw/main/_%E6%B3%A1%E6%B2%AB%E3%83%8E%E8%A8%80%E8%91%89%EF%BC%8FFleeting%20Words%20-%20Another%20Edit%20Version_%20from%20NieR%20Replicant%20ver.1.22%20Soundtrack%20Weiss%20Edition.mp3',
  'https://github.com/amelicamelic/BANANAPOWER/raw/main/%E9%AD%94%E7%8E%8B.mp3',
  'https://github.com/amelicamelic/BANANAPOWER/raw/main/banana.MP3'
  // Add more music files as needed
];

var currentMusicIndex = 0;

function startMainScreen() {
  // Hide splash screen
  splashScreen.style.display = 'none';

  // Show main page
  mainPage.style.display = 'block';

  // Play main page music
  playNextMainMusic();
}

function playNextMainMusic() {
  // Play main music in order
  mainMusic.src = musicFiles[currentMusicIndex];
  mainMusic.load();
  mainMusic.play();

  // Update the current index for the next iteration
  currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;
}

function toggleMusic() {
  if (mainMusic.paused) {
    // If music is paused, play the next song
    playNextMainMusic();
  } else {
    // If music is playing, pause it
    mainMusic.pause();
  }
}

// Auto-play the first music when the page loads
playNextMainMusic();

function playPauseMusic() {
  if (mainMusic.paused) {
    // If music is paused, play it
    mainMusic.play();
  } else {
    // If music is playing, pause it
    mainMusic.pause();
  }
}
// Listen for the end of the music
mainMusic.addEventListener('ended', function () {
  // Play the next music when the current one ends
  playNextMainMusic();
}); 