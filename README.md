# CacheMeIfYouCan

## Table of Contents
- [Description](#description)
- [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#Walkthrough-Video)
- [Citations](#citations)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Description
A Progressive Web Application (PWA) text editor that runs in the browser, works offline, and uses IndexedDB with the idb package to implement data persistence and redundancy.

## User Story and Acceptance Criteria

### User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```
## Walkthrough

## Citations

*   Source Code: University of Texas at Austin. (2024). Progressive Web Applications (PWA) Challenge: Text Editor. GitLab. https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-05-2024-U-LOLC/-/tree/main/19-PWA/02-Challenge?ref_type=heads 

## Acknowledgments

I would like to acknowledge the assistance provided by Xpert, an AI Learning Assistant from EdX, for guidance on various aspects of full stack application development, including debugging, Webpack configuration, and best practices for Progressive Web Applications (PWAs).

Additionally, I would like to thank my classmate Travis Haynie (https://github.com/TravisHaynie) for their invaluable assistance with  Webpack configuration, insight Progressive Web Applications (PWAs), and help with Render. Their support and insights greatly contributed to the success of this project.

## License
MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
