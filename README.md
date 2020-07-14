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

_**Wat'd Ya Eat?** is an online food journal. In this day and age where just about everything has loads of sugar and carbs, it's hard to eat healthy, but recording your food intake is a step in the right direction. 


<br>

## MVP
_The **Wat'd Ya Eat?** MVP is a full stack CRUD application. The user can create an account and log in each day to record your daily meals, edit or delete incorrect logs. The user can look back on previous weeks to see how their diets have changed over time. 

<br>

## Issues

I expect the most trouble with the login authentication system and the create and edit logic on the backend. I also expect some road blocks when transfering information back up from the react components, into the database or vice versa. These are problems that were encountered during project 3.

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
|    rack-cors     | _For handling Cross-Origin Resource Sharing._|
|      beyebug     | _debugger console._|
|      rails       | _Speeds up development._|

<br>

### Client (Front End)

#### Wireframes


![Desktop](https://app.lucidchart.com/invitations/accept/a0738172-d140-4ec1-85a7-49763dd62387)

![Tablet](https://app.lucidchart.com/invitations/accept/a0738172-d140-4ec1-85a7-49763dd62387)

![Mobile](https://app.lucidchart.com/invitations/accept/a0738172-d140-4ec1-85a7-49763dd62387)


#### Component Tree

#### Component Hierarchy

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
      |__ LoginBtn.jsx
      |__ LogoutBtn.jsx
      |__ Form.jsx
      |__ Content.jsx
|__ pages/
      |__ Login.js
      |__ Main.js
      |__ Create.js
|__ services/


#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the title and logo._               |
|     Nav      | functional |   y   |   n   | _The navigation will provide a link to each of the pages through the login/logout buttons._       |
|   Footer     | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._      |
|   LoginBtn   | functional |   n   |   y   | _Brings user to login screen._ |
|  LogoutBtn   | functional |   n   |   y   | _Brings user to logout screen._ |
|   Display    | functional |   n   |   y   | _Displays users recordings by week._ |
|    Form    | functional |   y   |   n   | _This special component is where the user actually logs their meals to._ |
|    Login | class      |   y   |   n   | _Login page._ |
|    Main  | class      |   y   |   n   | _Menu page._ |
|  Create | class      |   y   |   n   | _Creat page where creation form exists._ |

#### Time Estimates

| Task                       | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------        | :------: | :------------: | :-----------: | :---------: |
| Create React App (frontend)|    M     |     35 hrs      |     TBD     |     TBD     |
| Create CRUD (backend)      |    H     |     10 hrs      |     TBD     |     TBD     |
| TOTAL                      |          |     45 hrs      |     TBD     |     TBD     |


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

