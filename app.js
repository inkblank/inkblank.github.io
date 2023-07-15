const container = document.querySelector(".container")
const image = document.querySelector("#music-image")
const title = document.querySelector("#music-details .title")
const singer = document.querySelector("#music-details .singer")
const prev = document.querySelector("#controls #prev")
const play = document.querySelector("#controls #play")
const next = document.querySelector("#controls #next")
const duration = document.querySelector("#duration")
const currentTime = document.querySelector("#current-time")
const progressBar = document.querySelector("#progress-bar")

const player = new MusicPlayer(musicList)

window.addEventListener("load",()=>{
    let music = player.getMusic()
    displayMusic(music)
})

function displayMusic(music){
    title.innerText = music.getName()
    singer.innerText = `${music.singer}`
    image.src = "img/" + music.img
    audio.src = "mp3/" + music.file
}

play.addEventListener("click",()=>{
    const isPlaying = container.classList.contains("playing")
    isPlaying ? pauseMusic() : playMusic()
})

prev.addEventListener("click",()=>{
    prevMusic()
})

next.addEventListener("click",()=>{
    nextMusic()
})

const prevMusic = () => {
    player.previous()
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
}

const pauseMusic =() => {
    audio.pause()
    container.classList.remove('playing')
    play.classList = "fa-solid fa-play"
    play.style.color = "red"
}

const playMusic = () => {
    audio.play()
    container.classList.add('playing')
    play.classList = "fa-solid fa-pause"
    play.style.color = "blue"
}

const nextMusic = () => {
    player.next()
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
}


audio.addEventListener("loadedmetadata",()=>{
    duration.textContent = calculateTime(audio.duration)
    progressBar.max = Math.floor(audio.duration)
})
const calculateTime = (time) =>`${Math.floor(time/60)}:${Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}`: Math.floor(time % 60) }`

audio.addEventListener("timeupdate",()=>{
    progressBar.value = Math.floor(audio.currentTime)
    currentTime.textContent = calculateTime(progressBar.value)
})

progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value
    currentTime.textContent = calculateTime(progressBar.value)
})