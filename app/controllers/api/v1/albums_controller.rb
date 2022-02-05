class Api::V1::AlbumsController < ApplicationController

    def index
        albums = Album.all
        render json: AlbumSerializer.new(albums)
    end 
    
end
