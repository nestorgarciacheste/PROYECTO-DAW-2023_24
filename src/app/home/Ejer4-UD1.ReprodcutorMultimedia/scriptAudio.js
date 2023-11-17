//Denise: Cogemos todos los elementos del HTML

	//Botones
	const musicContainer = document.getElementById('music-container');
	const playBtn = document.getElementById('play');
	const prevBtn = document.getElementById('prev');
	const nextBtn = document.getElementById('next');

	//Denise: Elementos reproductor 
	const audio = document.getElementById('audio');
	const progress = document.getElementById('progress');
	const progressContainer = document.getElementById('progress-container');
	const title = document.getElementById('title');
	const cover = document.getElementById('cover');
	const currTime = document.querySelector('#currTime');
	const durTime = document.querySelector('#durTime');

//Denise: Títulos de las canciones
const songs = ['Rules', 'Streets', 'Need to Know', 'new rules' ,'vampire','Baticano','CaManolo','Holanda','Columbia','BabyHello','Picardia'];

//Denise: empezamos con la cancion i=2 del array (Need To Know)
let songIndex = 2;

//Denise: cargamos la canción
loadSong(songs[songIndex]);

//Denise: función para cargar la canción -> ruta a la carpeta de music y el nombre de la canción en mp3 (DEBE coincidir con el nombre puesto en el array y el nombre de la imagen del disco)
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

//Denise: le damos a "play". Aparece el botón correcto y desaparece el de pause.
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  //Denise: función js para iniciar el audio.
  audio.play();
}

//Denise: le damos a "pause". Aparece el botón correcto y desaparece el de play.
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  //Denise: función js para parar el audio.
  audio.pause();
}

//Denise: función para ir a la canción anterior y que se reproduzca.
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

//Denise: función para ir a la canción siguiente y que se reproduzca.
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

//Denise: función para actualizar el tiempo de la barra de progreso del reprodcutor.
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

//Denise: función para que pasemos por la barra de progreso y llevemos el audio hasta ahí.
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//Denise: función para saber el tiempo total de la canción y el progreso en minutos de esta además de la barra de progreso..
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	currTime.innerHTML = min +':'+ sec;

	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 
	get_sec_d (duration);
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

//Denise: añadimos los action listener para que se ejecuten las funciones al interactuar con los botones del reproductor.
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Denise: pasar canciones.
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//Denise: actualizar barra de progreso.
audio.addEventListener('timeupdate', updateProgress);

//Denise: modificar barra de progreso.
progressContainer.addEventListener('click', setProgress);

//Denise: pasar canción cuando haya acabado automáticamente.
audio.addEventListener('ended', nextSong);

//Denise: duración de la canción.
audio.addEventListener('timeupdate',DurTime);

const toggleButton = document.getElementById('toggle-button');

let isPlaying = false; // Variable para mantener el estado de reproducción

function ocultarAudio() {
  if (musicContainer.style.display === 'none') {
    musicContainer.style.display = 'flex';
    if (isPlaying) {
      audio.play();
    }
  } else {
    isPlaying = !audio.paused;
    if (isPlaying) {
      audio.pause();
    }
    musicContainer.style.display = 'none';
  }
}