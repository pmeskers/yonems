## Ye Olde Node + Express + Mongo Scaffold

<img src="http://media0.giphy.com/media/LGzrggUppEBdm/giphy.gif" width=250 height=250/>

### Pre-requisites

    # probably a bit more work than just this but you get the idea ;)
    brew install node
    brew install mongo
    brew install ruby

### Assumptions

This scaffold assumes you are...
* Using sass/scss for style
* Going to use grunt for things

This scaffold doesn't assume...
* If you want to use Bower
* If you want to use CoffeeScript
* If you want some default CSS bootstrap/etc
* If you want some default JS jquery/etc

### Getting started

    npm install
    bundle
    grunt server

Build it in ``src/``, gets served from ``web/``

### Heroku

Since we've got a Gemfile here, when deploying to Heroku
set this env variable to force a nodejs buildpack.

    heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs

