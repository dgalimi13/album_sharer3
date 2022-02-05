class AlbumSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :description, :genre_id, :genre 
end
