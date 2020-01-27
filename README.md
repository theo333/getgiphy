## GetGiphy

![](public/images/home-page-screenshot.png)

### Live Site
https://getgiphy.herokuapp.com/#/

### Description

GetGiphy is an app which allows a user to get animated GIFs from the Giphy API and save them to their local Favorites.

### Functionality

This application enables the user to:

- Query Giphy API to retreive animated GIFs.
- Add / Remove GIFs from Favorites

### Install

```
npm i
```

### Run Program

```
npm run start
```

Open site in browser.

`http://localhost:3000/#/`

### Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/) - routing
- React Hooks
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate) - local state management
  - [useContext](https://reactjs.org/docs/context.html) - sharing "global" data with components
- [Axios](https://www.npmjs.com/package/axios) - fetching API data
- [React Ion Icons](https://zamarrowski.github.io/react-ionicons/) - heart icon
- [React Helmet](https://github.com/nfl/react-helmet) - header meta
- [Eslint](https://eslint.org/) - linting
- [Prettier](https://prettier.io/) - code formatting
- [BEM](http://getbem.com/introduction/) - CSS naming methodoloy
- **Local storage** - to persist Favorites on hard refresh. Database seemed to be overkill for this use case.

### Developer Notes

- Was not able to get Production mode configured correctly with webpack. When configured correctly, it is suppose to minify the CSS and JS, thus reducing the size of `/public/main.js`.
