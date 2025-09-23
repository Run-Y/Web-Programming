const samples = []

samples.push({src: "audio/bass.mp3", name: "Bass"})
samples.push({src: "audio/drum.mp3", name: "Drum"})
samples.push({src: "audio/piano.mp3", name: "Piano"})
samples.push({src: "audio/silence.mp3", name: "Silence"})
samples.push({src: "audio/strange-beat.mp3", name: "Strange Beat"})
samples.push({src: "audio/violin.mp3", name: "Violin"})

let tracks = []
tracks.push([])
tracks.push([])
tracks.push([])
tracks.push([])


tracksDiv = document.getElementById("tracks")

for(let i = 0; i < tracks.length; i++) {
    let trackDiv = document.createElement("div")
    trackDiv.setAttribute("id", "trackDiv" + i)
    let trackDivHeader = document.createElement("h2")
    trackDivHeader.innerText = "Track" + (i + 1)
    trackDiv.appendChild(trackDivHeader)
    tracksDiv.appendChild(trackDiv)
}

const addButtons = document.getElementById("addButtons")
let id = 0

samples.forEach((sample) => {
    console.log(sample.name)

    let newButton = document.createElement("button")
    newButton.setAttribute("data-id", id++)
    newButton.addEventListener("click", () => addSample(newButton))
    newButton.innerText = sample.name
    addButtons.appendChild(newButton)
})

function addSample(addButton) {
    console.log("Adding " + addButton.dataset.id)

    const sampleNumber = addButton.dataset.id

    const trackNumber = document.querySelector("input[name = 'track']:checked").value

    console.log("Sample number: " + sampleNumber)
    console.log("Track number: " + trackNumber)

    tracks[trackNumber].push(samples[sampleNumber])

    let trackDiv = document.getElementById("trackDiv" + trackNumber )
    let newItem = document.createElement("div")
    newItem.innerText = samples[sampleNumber].name
    trackDiv.appendChild(newItem)

}

const playButton = document.getElementById("play")
playButton.addEventListener("click", () => playSong())

function playSong() {
    let i = 0
    tracks.forEach((track) => {
        if (track.length > 0) {
            playTrack(track, i)
        }
        i++
    })
}

function playTrack(track, trackNumber) {
    let audio = new Audio()
    let i = 0
    
    audio.addEventListener("ended", () => {
        i = ++i < track.length ? i : 0
        audio.src = track[i].src
        audio.play()
        console.log("Starting: Track " + trackNumber + ", instrument " + track[i].name)
    }, true)
    
    audio.volume = 1.0
    audio.loop = false
    
    audio.src = track[0].src
    audio.play()
    console.log("Starting: Track " + trackNumber + ", instrument " + track[i].name)
    
}

const uploadButton = document.getElementById("upload")
uploadButton.addEventListener("click", () => {
    const file = document.getElementById("input-sample").files[0]
    let audioSrc = ""
    if (!file) return

    audioSrc = URL.createObjectURL(file)
    let sample = {src: audioSrc, name: "New Sample"}
    samples.push(sample)
    id = samples.length - 1

    let newButton = document.createElement("button")
    newButton.setAttribute("data-id", id)
    newButton.addEventListener("click", () => addSample(newButton))
    newButton.innerText = sample.name

    addButtons.appendChild(newButton)
})