const endPoint = "http://localhost:3000/api/v1/albums"

document.addEventListener('DOMContentLoaded', () => {
    getAlbums() 

    const createAlbumForm = document.querySelector("#create-album-form")

    createAlbumForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})

function getAlbums() {
    fetch(endPoint)
    .then(response => response.json())
    .then(albums => {  
        albums.data.forEach(album => {
            
            let newAlbum = new Album(album, album.attributes)
            render(album)
        })
    })
}

function render(album) {
    const albumMarkup = `
    <div data-id=${album.id}>
    <p>${album.attributes.name}</p>
    <h3>${album.attributes.artist}</h3>
    <p>${album.attributes.genre.name}</p>
    </div>
    <br><br>`;

    document.querySelector('#album-container').innerHTML += albumMarkup
}

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const descriptionInput = document.querySelector('#input-description').value
    const artistInput = document.querySelector('#input-artist').value
    
    const genreId = parseInt(document.querySelector('#genres').value)
    postFetch(nameInput, artistInput, descriptionInput, genreId)
}

function postFetch(name, artist, description, genre_id) {
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: name,
            description: description,
            artist: artist,
            genre_id: genre_id
        })
    })
    .then(response => response.json())
    .then(album => {
        console.log(album)
        const albumData = album.data
        render(albumData)
    })
}