## Ye Olde Node + Express + Mongo Template

    brew install node
    brew install mongo

    npm install
    bundle
    grunt server

Build it in ``src/``, gets served from ``web/``

### Heroku

Since we've got a Gemfile here, when deploying to Heroku
set this env variable to force a nodejs buildpack.

    heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs

