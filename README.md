# Social Network API

## Description

I received the challenge of building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friends list. During the production process of this application I learned how to use Express.js for routing, a MongoDB database, and the Mongoose ODM.

User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Usage

I created a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friends list. After downloading my project, be sure to install node.js and all the required dependencies. Then open the server.js file in your terminal and type "node server.js". Once your server is running, you may switch over to Insomnia or Postman and run all of the API routes.

## Credits

Throughout the making of this project, I frequently referenced my class repository ASU-VIRT-FSF-PT-10-2023-U-LOLC. I also referenced mongoosejs.com, mongodb.com, stackoverflow, W3Schools, MDN Webdocs, Google and ChatGPT.

License

MIT License

Copyright (c) [2024] [jaschmidt22]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. Copy license text to clipboard Suggest this license Make a pull request to suggest this license for a project that is not licensed. Please be polite: see if a license has already been suggested, try to suggest a license fitting for the project’s community, and keep your communication with project maintainers friendly.
