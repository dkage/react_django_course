# Course

This is a repository to store all code developed during the course on Udemy called: 

> [React & Django Full Stack: web app, backend API, mobile apps](https://www.udemy.com/course/react-django-full-stack/)

This is a course that aims to learn the basics of a React front-end project using Django as an API for backend.

Even though I already have some experience with Django as a full stack framework, I thought it would be useful to do
this kinda basic course for reminding some of the basics, and also to learn how to setup a Django API and even learn 
the basics of React. 

As everytime I worked with Django I used the Django templates to generate the front-end, I didn't know the
structure of a Django API.

<sub><sup>
_By the way, my code logic and css differs a lot in many files from the lessons videos, because I like to learn by challenge, 
stopping the videos and always trying to make the code by myself first. Then I go back to the video and see the solution proposed.
As many times I do in a different, but working that works the same way, many parts will differ from what is shown in the course._
</sub></sup>

# Personal Notes

#### Progress

- [x] Django API rest framework basics
- [x] React basics
- [x] Django project
- [x] React project
- [ ] React Native project
- [ ] Deployment :tada:

## Babel config for dynamic calls to font-awesome

<sub><sup>_Even though the course does not use the Babel or dynamic calling the font-awesome icons,
I spent some time trying to learn how to make it work by myself._</sub></sup>

For using Babel, the best way I found was creating the `.babelrc` file or project root

So on react project create: 

`/src/.babelrc`

And add to the file:

```json
{
  "plugins": ["macros"]
}
```


I don't know why but using the method on the font-awesome docs, by creating `babel.config.js` caused warnings showing on top of content, 
stating that the `api` parameter was not being assigned a `api.cache` value.


Even when actually passing the correct values as stated in the error page showing on top of dom body content, the error persisted.

So for **font-awesome**, create `.babelrc` with json value shown above.

Create also on project root:

`/src/babel-plugin-macros.config.js`

This one works just like it shows on the **font-awesome** docs.

```javascript 1.8
module.exports = {
    'fontawesome-svg-core': {
        'license': 'free'
    }
}
```