# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rock = Genre.create(name: "Rock")
rap = Genre.create(name: "Rap")
country = Genre.create(name: "Country")

Album.create(name: "Three Cheers for Sweet Revenge", artist: "My Chemical Romance", description: "Third Studio Album released in 2004", genre_id: rock.id)
