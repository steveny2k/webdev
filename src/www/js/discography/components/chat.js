// Exercise: A live chatroom!
//
// Insert three elements in the document:
//
//   1. A <ul> where incoming messages will be appended
//
//   2. A text input where you can write chat messages
//
//   3. A submit button so you can send chat messages
//
// Edit the <chat-box> attributes in the index.html file as instructed
// and then use those attributes to connect to a chat server over
// WebSockets.  Details on how to communicate with the chat server can
// be found here:
//
//   https://github.com/pjones/wschat
//
class ChatBox extends HTMLElement {
  // Set up the shadow DOM:
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // create a ul
    this.messagesUl = document.createElement('ul');
    this.messagesUl.innerHTML = 'loading...'

    // create a text input field
    this.form = document.createElement('form');

    this.input = document.createElement('input');

    // create a submit button
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');

    this.form.append(this.input);
    this.form.append(submit);
    this.form.append(this.messagesUl);

    shadow.append(this.form);
  }

  emptyMessages() {
    this.messagesUl.innerHTML = '';
  }

  addMessage(message) {
    const newMessageLi = document.createElement('li');
    newMessageLi.innerHTML = `${message.user} says: ${message.message}`;

    this.messagesUl.append(newMessageLi);
  }

  // Create a new WebSocket and set up callbacks for sending and
  // receiving messages.
  //
  // If you get stuck here is an example implementation:
  //
  //   https://github.com/pjones/wschat/blob/master/examples/example.js
  connectedCallback() {
    const host = this.getAttribute('data-host');
    const user = this.getAttribute('data-user');

    const connection = new WebSocket('ws://' + host);

    connection.onopen = () => {
      console.log('connected');
      this.emptyMessages();
    }

    connection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      this.addMessage(data);
    }

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      const message = {
        user: user,
        message: this.input.value
      };

      const messageString = JSON.stringify(message);

      connection.send(messageString);

      this.addMessage(message);

      this.input.value = '';
    });
  }
}

customElements.define("chat-box", ChatBox);
