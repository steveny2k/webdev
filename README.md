WebDev: Web Development Course
==============================

This is the source code and training content for the Web
Development course taught by [Ryan Morris][mrmorris].

It is based off mixed course content originally authored by by [Peter J. Jones][pjones], [Ryan Morris][mrmorris] and [Joshua McNeese][jmcneese].

Original source code for the course is located here: <https://github.com/devalot/webdev>

Prerequisites
-------------

This collection of exercises and demos needs [Node.js][] `>=` 8
installed to work correctly.

Starting Things Up
------------------

  1. Install dependencies

    `cd src && npm install`

  2. Run the server from the `./src` directory

    `npm start`

  3. Open the following URL in your browser of choice:

     <http://localhost:3000/>


Building the Course Content (PDF Files)
---------------------------------------

  1. Install the [Nix Package Manager](https://nixos.org/nix/) (`>=`
     2.0 is required)

  2. Run the following command:

         nix build

The generated PDF files will be in the `result` directory.

[jmcneese]: https://github.com/jmcneese
[mrmorris]: https://github.com/mrmorris
[pjones]: http://www.devalot.com/about/pjones.html
[node.js]: https://nodejs.org/
