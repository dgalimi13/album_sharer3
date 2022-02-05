const endPoint = "http://127.0.0.1:3000/api/v1/albums"

document.addEventListener('DOMContentLoaded', () => {
    getAlbums()
})

function getAlbums() {
    fetch(endPoint)
    .then(response => response.json())
    .then(albums => {
        console.log(albums)
    })
}