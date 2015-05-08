
To build you need the following:

- [Node.js version 10.36](http://blog.nodejs.org/2015/01/26/node-v0-10-36-stable/ "Node")
- [Bower](http://bower.io/ "Bower")
- [Gulp](http://gulpjs.com/ "Gulp")

If you have Node.js already installed you can just:

`$ npm install -g bower gulp` to get the packges.

then navigate to the local directory and do:

`$ npm install`
`$ bower install`

Once downloaded, to build locally and watch, navigate to the root project folder and:

`$ gulp serve`

This will serve it on your local ip so that you can view it from any device in your network (use `ifconfig` to find your address).

To build an optimized version in a `dist` folder use:

`$ gulp`

The actual application source is in the `src` folder.