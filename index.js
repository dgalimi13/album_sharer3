
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
        document.querySelectorAll(".delete-button").forEach((button) =>  {
            button.addEventListener("click", (e) => deleteFormHandler(e))
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
    const number = e.target.dataset.id
    deleteFetch(number)
    document.querySelector("[data-id=" + CSS.escape(number) + "]").remove();

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
}

function deleteFetch(albumId) {
    fetch(endPoint + '/' + albumId, {
        method: 'DELETE'
        }) 
       .then(res => console.log(res)) 
        }

