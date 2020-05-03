# Burger Logger

## Table of Contents

*[Description](#Description)

*[User-Story](##User-Story)

*[Business-Context](#Business-Context)

*[Development-Strategy](#Development-Strategy)

*[Built-With](#Built-With)

*[Demo](#Demo)

*[Questions](#questions)

## Description

Eat-Da-Burger! is a restaurant app created with MySQL, Node, Express, Handlebars and a homemade ORM.

* The app lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


## User-Story
    AS A user, I want to be able to view all burger order in the restaurant app

    I WANT to be able to distinguish the devoured burger from waithing to be devoured

    SO THAT I can manage the log and the database entery

## Business-Context

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. This server side application attempt to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Development-Strategy

Design the following database schema:


   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

#### Directory structure

All the files and directories the burger logger app look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
  


## Built-With

This is a Herolu deployed application which require the folowings framework:

  * **MySQL** for its database,  
  * **handlebars** for its HTML tamplate,
  * **express**for its http routes,
  * **Homemade ORM**for database querys

## Demo

Below is an example of what your application may look like

![eat-de-burger](public/assets/img/eat-da-burger.png)


## Questions

<img src="https://avatars2.githubusercontent.com/u/60395898?v=4" alt="avatar" style="border-radius: 16px" width="30"/>

If you have any questions about the repo, open an issue or contact@
https://github.com/henokcity