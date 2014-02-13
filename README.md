## Ye Olde Node + Express + ~~Mongo~~ Scaffold

<img src="http://media0.giphy.com/media/LGzrggUppEBdm/giphy.gif" width=250 height=250/>

### Pre-requisites

    # probably a bit more work than just this but you get the idea ;)
    brew install node
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

Prepare all your dependencies...

    npm install
    bundle

Spin up a server for local development...

    grunt server

Build the client-side app in ``src/``, which gets built and served from ``web/``.

The server task will watch for any changes that occur in the ``src/`` dir
and trigger a build when needed. A build consists of:

1. Compass - compile sass into ``web/main.css``
2. Uglify - minify and concat all JS into ``web/main.js``
3. Copy html from views and place into ``web/``

The default grunt task performs ``jshint`` and then builds the app 
in the same steps described above.

### Environment variables

The express server port is configurable through the environment variable ``PORT``. If unset, it defaults to ``5000``.

### Heroku

Since we've got a Gemfile here, when deploying to Heroku
set this env variable to force a nodejs buildpack.

    heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs

### Mongo

Check out the branch yonems-mongo for an implementation which sets up MongoDB as well.
