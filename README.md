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

### Environment variables

The express server port and the URI for connecting to Mongo DB are configurable
through the environment variables ``PORT`` and ``MONGODB_URI``. If unset, they
default to ``5000`` and ``mongodb://127.0.0.1:27017/yonems`` respectively.

### Heroku

Since we've got a Gemfile here, when deploying to Heroku
set this env variable to force a nodejs buildpack.

    heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs

Additionally, make sure to set the MONGODB_URI to point to wherever your db lives.
