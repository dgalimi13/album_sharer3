
class Album {
    
    constructor(album, albumAttributes) {
        this.id = album.id
        this.name = albumAttributes.name
        this.artist = albumAttributes.artist
        this.description = albumAttributes.description
        this.genre = albumAttributes.genre
        Album.all.push(this)
    }

    renderAlbumCard() {
        
        return `
        <div data-id=${this.id}>
        <p>${this.name}</p>
        <h3>${this.artist}</h3>
        <p>${this.genre.name}</p>
        <form id="delete-album-form" action="/api/v1/albums/${this.id}" method="POST" style="">
        <input id=${this.id} type="hidden" name="_method" value="delete" />
        <label> Delete Album </label>
        <button id=${this.id}> Delete </button>
        </form>
        </div>
        <br><br>`;
    }

    // deleteFetch() {
    //      fetch('http://localhost:3000/api/v1/albums' + '/' + `${this.id}`, {
    //         method: 'DELETE'
    //         }) 
    //        .then(response => response.json())
    //        .then(res => console.log(res)) 
    //     }



}

Album.all = [];
