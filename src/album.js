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
        debugger
        return `
        <div data-id=${this.id}>
        <p>${this.name}</p>
        <h3>${this.artist}</h3>
        <p>${this.genre.name}</p>
        </div>
        <br><br>`;
    }

}

Album.all = [];