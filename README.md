- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Wat'd Ya Eat?** is an online food journal. In this day and age where just about everything has loads of sugar and carbs, it's hard to eat healthy, but recording your food intake is a step in the right direction. I expect the most trouble with the login authentication system and the create and edit logic on the backend. I also expect some road blocks when transfering information back up from the react components, into the database or vice versa. These are problems that were encountered during project 3.


<br>

## MVP
_The **Wat'd Ya Eat?** MVP is a full stack CRUD application. The user can create an account and log in each day to record your daily meals, edit or delete incorrect logs. The user can look back on previous weeks to see how their diets have changed over time.

<br>

### Goals

- _Monday: Create and seed sample data, create routes, models and controllers, make sure data renders on page.
- _Tuesday: Create login page and authentication token system. Make sure user can create account and update database.
- _Wednesday: Create frontend react app. Make sure data can pass between front and back end of application.
- _Thursday: Make sure user can create an account, login. And make sure basic CRUD works.
- _Friday: Styling day, including media queries.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Foundation for frontend components._ |
|   React Router   | _For our react routes._ |
|     Bootsnap     | _Reduces boot times through caching._ |
|     Express      | _For handling our api data._ |
|    rack-cors     | _For handling Cross-Origin Resource Sharing._|
|      eyebug      | _debugger console._|
|      rails       | _Speeds up development._|

<br>

### Client (Front End)

#### Wireframes


![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Main.jsx
      |__ LoginBtn.jsx
      |__ LogoutBtn.jsx
      |__ Display.jsx
      |__ Record.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> https://app.lucidchart.com/invitations/accept/97a4248b-7686-4d40-b120-8156394f0b29

<br>

***

## Post-MVP

> Add background animations (like someone running, fitting the healthy app theme)
> Add an option where the api data is turned into graph charts to see how a users diet has changed or remained the same over time.
> Add a what can I do better button where the user can click it and they recieve tips for better dieting (don't eat past 7pm, try drinking less soda, etc.)
> Add a meal planner where the user can create their own diet plan.

***

## Code Showcase

## Code Issues & Resolutions

