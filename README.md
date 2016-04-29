# KFC [![Build Status](https://travis-ci.org/Flight/kfc.svg?branch=master)](https://travis-ci.org/Flight/kfc)

## Quick start for developers
Project uses node + Gulp for fast developing.

To install node: https://nodejs.org/en/

Then open your favorite Terminal and run these commands.

```sh
$ npm install --global gulp-cli
$ npm install
```

To run webserver (for running game):
```sh
$ gulp webserver
```
Then go to http://localhost:8000/game.html

To watch everything (js + scss):
```sh
$ gulp watch
```

To run code linting (js + scss):
```sh
$ gulp
```

To compile scss:
```sh
$ gulp scss
```