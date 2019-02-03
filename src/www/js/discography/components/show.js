class ArtistDetail extends HTMLElement {

  // Exercise 3:
  //
  // Create a template for displaying a single artist.  The template
  // should use slots to display the name of the artist as well as the
  // formation year.
  //
  // When you are done, go back to the `index.js' component and have
  // it create `<artist-detail>' elements with the correct slots.
  constructor() {
    super();

    // get the template
    const template = document.getElementById('artist-detail');

    // clone the template
    const content = template.content.cloneNode(true);

    // create the shadow
    const shadow = this.attachShadow({ mode: 'open' });

    // attach to the shadow
    shadow.append(content);
  }

  // Bonus Exercise:
  //
  // Fetch all of the albums for artist and display them.
  //
  // Example URL for artist 2:
  //
  //   /api/artists/2/albums
  //
  // For an example, see: http://localhost:3000/js/demo/
  connectedCallback() {
  }
}

customElements.define("artist-detail", ArtistDetail);
