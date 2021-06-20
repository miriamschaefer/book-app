# Book App

## Main challenge

The main purpose of this exercise is to develop a small web app to manage a list of books and authors. It's divided in two parts, a backend part implemented with Node and MongoDB to create different endpoints for the API and a Frontend part, where the user could see the lists of books, remove and edit the info in them.

## First approach

I decided to go for the backend part as I had never ever worked with Node and databases before. I followed several tutorials and checked all the documentation available on Node and Mongo to create the structure of the API, but had trouble connecting the models between them. So, as I was running out of time, I decided to go for the frontend part.

## Frontend side

The frontend side of the project is designed as a CRUD app. As I didn't have an API to render the data I created two JSON archives with the array of objects I would have gotten from the API. I'm still working on the API part of the project so I could work with fetchs here asap.

The main component, App is my Router component and the parent element where props are passed through. Also, as I didn't have a database in where I could store all the info, I used LocalStorage to keep all the books and authors so the user could edit and remove items from the lists.

Even though I'm happy with the result of the exercise, I know there are some details I could improve, for example, I'm not loving the components structure and I know I could create a single component to render everything and not have them divided by authors and books, but I decided to keep it simple for now but with refactoring this in mind.

I finished the project with the simplest styles with SASS.

## Learning outcomes

From the beginning to the end, everything was a challenge for a minute, but mainly:

- Database structures, Node and MongoDB. I will keep working on this side of the project so I could use the API as the service of the frontend side.
- Realizing which components of the frontend could be reuse, I'll keep refactoring this exercise so I could have a single Form, EditElement and Element component instead one for the book list and others for the authors list.

## Listening to...

Not that it really matters, but I developed this small app listening to Kings of Convenience's newest album, Peace or Love.
