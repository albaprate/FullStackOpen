## Part 0
## Fundamentals of Web Apps

**0.4: New note**

Create a diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes when writing something into the text field and clicking the submit button.
```mermaid
sequenceDiagram
    Note right of Browser: the button on the form is clicked by the user and the browser will send the user input to the server
    Browser->>+Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note (the form submitting event)
    Server-->>-Browser: URL Redirect, the server asks the browser to do a new HTTP GET request to the address notes(header's Location)
    Note right of Browser:the browser reloads the Notes page
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>-Browser: HTML - code
    Browser->>+Server: HTTP GET hhttps://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: main.css
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server-->>-Browser: main.js
    Note right of Browser: browser starts executing js-code that requests JSON data from the server
 
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: data.json content
     Note right of Browser: browser executes the event handler that renders notes to display
```

**0.5: Single page app**
Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram 
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>-Browser: HTML - code
    Note right of Browser: Links in the HTML code cause the browser to also fetch the following ones
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: main.css
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>-Browser: spa.js
    
    Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: data.json content
    Note right of Browser: the browser executes an event handler, which renders the notes to the page using the DOM-API
```

**0.6: New note**
Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

```mermaid
sequenceDiagram
    Note right of Browser: the button on the form is clicked by the user and the browser will send the user input to the server
    Browser->>+Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    Note right of Browser: the browser stays on the same page
```