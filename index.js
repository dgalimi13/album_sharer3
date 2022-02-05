const endPoint = "http://127.0.0.1:3000/api/v1/albums"

document.addEventListener('DOMContentLoaded', () => {
    getAlbums()
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
            </div>
            <br><br>`;

            document.querySelector('#album-container').innerHTML += albumMarkup
        })
    })
}