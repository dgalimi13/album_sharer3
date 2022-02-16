// const deleteUrl = "http://localhost:3000/api/v1/albums/:id"
const endPoint = "http://localhost:3000/api/v1/albums"
// const deleteAlbumForm = document.querySelector("#delete-album-form")

document.addEventListener('DOMContentLoaded', () => {
    
    getAlbums() 
    
    const createAlbumForm = document.querySelector("#create-album-form")
    const deleteAlbumForm = document.querySelector(".delete-button")

    createAlbumForm.addEventListener("submit", (e) => 
    createFormHandler(e))

    if (deleteAlbumForm) {deleteAlbumForm.addEventListener("click", (e) => deleteFormHandler(e))}

})


function getAlbums() {
    
    fetch(endPoint)
    .then(response => response.json())
    .then(albums => {  
        albums.data.forEach(album => {
           const albumMarkup = `
        <div data-id=${album.id}>
        <p>${album.attributes.name}</p>
        <h3>${album.attributes.artist}</h3>
        <p>${album.attributes.genre.name}</p>
        
        <button data-id="${album.id}" class='delete-button'> Delete </button>
        
        </div>
        <br><br>`;
            let newAlbum = new Album(album, album.attributes)
            document.querySelector("#album-container").innerHTML += albumMarkup
        })
    })
}



function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const descriptionInput = document.querySelector('#input-description').value
    const artistInput = document.querySelector('#input-artist').value
    
    const genreId = parseInt(document.querySelector('#genres').value)
    postFetch(nameInput, artistInput, descriptionInput, genreId)
}

function deleteFormHandler(e) {
    console.log("delete")
    // deleteFetch()
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
        console.log(album);
        const albumData = album.data
        let newAlbum = new Album(albumData, albumData.attributes)
        document.querySelector('#album-container').innerHTML += newAlbum.renderAlbumCard()
    })

    // const deleteAlbumForm = document.querySelector("#delete-album-form")

    // deleteAlbumForm.addEventListener("submit", (e) => 
    // deleteFormHandler(e))

function deleteFetch(albumId) {
    fetch(endPoint + '/' + albumId, {
        method: 'DELETE'
        }) 
       .then(response => response.json())
       .then(res => console.log(res)) 
        }

}