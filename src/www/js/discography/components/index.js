class ArtistList extends HTMLElement {

  // Exercise 1:
  //
  // Create a `<template>' in the index.html file that will be used to
  // display a list of all artists.  In the constructor below, fetch
  // that template and insert it into the shadow DOM.
  //
  // Your template should have a <ul> where you can insert artists in
  // the next exercise.
  constructor() {
    super();

    // get template
    const template = document.getElementById('artist-list');

    // clone it
    const content = template.content.cloneNode(true);

    // attach it into the shadow dom
    var shadow = this.attachShadow({ mode: 'open' });
    shadow.append(content);
  }

  // Exercise 2:
  //
  // Fetch all artists from the backend and render them into the
  // template's `<ul>' element.  Start simple by just inserting the
  // the name of the artist.
  connectedCallback() {
    const ulEl = this.shadowRoot.querySelector('ul');

    fetch('/api/artists').then((response) => {
      return response.json();
    }, (error) => {
      console.log('something went wrong with the request');
    }).then((data) => {
      let newContent = '';

      data.forEach((el) => {
        newContent += '<li>' + el.name + '</li>';

        // exercise #3
        // create the "arist details" component
        const details = document.createElement('artist-detail');
        details.innerHTML = `<span slot="name">${el.name}</span><span slot="year">${el.year}</span>`;
        this.shadowRoot.append(details);

        // todo - probably better to generate the "view" component in the "li"?
      });

      ulEl.innerHTML = newContent;
    });
  }
}

customElements.define("artist-list", ArtistList);
