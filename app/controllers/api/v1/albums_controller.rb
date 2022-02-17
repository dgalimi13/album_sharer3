class Api::V1::AlbumsController < ApplicationController

    def index
        albums = Album.all
        render json: AlbumSerializer.new(albums)
    end 

    def create
        album = Album.new(album_params)
        if album.save
            render json: AlbumSerializer.new(album), status: :accepted
        else
            render json: { errors: album.errors.full_messages}, status: :unprocessible_entity
        end 
    end 

    def destroy
        album = Album.find(params[:id])
        album.destroy
    end 

    private

    def album_params
        params.require(:album).permit(:name, :artist, :description, :genre_id)
    end 

end
