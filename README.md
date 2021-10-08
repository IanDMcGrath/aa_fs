# README

# Artcoag

 ## Description
 [Artcoag](https://artcoag.herokuapp.com/) is an image hosting app for artists to use for promotion. Upload new artworks or browse existing masterpieces. Artcoag is a clone of [Artstation](https://www.artstation.com/).
 View the live site [here](https://artcoag.herokuapp.com/)


## Challenges
 One of the technical challenges of the art index page is minimizing empty space to maximize art thumbnails. But they have to stay the same size such that no one image dominates the others. The main feature of the index page is a dynamically reconfiguring grid. More columns are added as the viewport expands; adjusting incrementally based on the viewport width. It's voodoo witchcraft achieved using css's @media tag and a max-width argument.
 ![index page](/README_files/art_index.JPG)
 ![index page squeezed](/README_files/art_index_thin.JPG)


## Technical Jargon

* Ruby version
  * ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-linux]

* System dependencies
  * npm 6.4.1
  * node v10.13.0
  * Rails 5.2.6
  * webpack 4.46.0
  * webpack-cli 4.8.0

* Configuration
  * npm install
  * bundle install

* Database creation
  * bundle exec rails db:create

* Database initialization
  * bundle exec rails db:migrate
  * bundle exec rails db:seed

* How to run the test suite
  * npm start
  * rails server

* Services
  * AWS S3

![sign in form](/README_files/signin.JPG)