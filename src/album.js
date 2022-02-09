class Album {
    
    constructor(album, albumAttributes) {
        this.id = album.id
        this.name = albumAttributes.name
        this.artist = albumAttributes.artist
        this.description = albumAttributes.description
        this.genre = albumAttributes.genre
        Album.all.push(this)
        debugger
    }

}

Album.all = [];