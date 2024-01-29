# Curriculum Template

This repository renders my CV from JSON data found at [src/content_dummy.json](src/content_dummy.json) and the profile picture in src/assets. Suffice it to say, the public data is just a mock-up (I'm not a duck).

The project uses [React PDF](https://react-pdf.org). Feel free to use it as a base for your own. Beware that a lot of CSS and HTML primitives are not available in React PDF, so heavy SVG use is required for every one but the most basic styling operations.

## How to generate the CV

Spin up a dev server with `npm start`, and load the site. It generates an embedded PDF view, which should have a download button in all modern browsers. Save the file and go dazzle those recruiters.  
