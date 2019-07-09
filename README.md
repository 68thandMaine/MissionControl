# Mission Control
<sup>A project by: Chris Rudnicky</sup>

## Table of Contents

I. [Description](#description)  
II. [Project Setup](#project-setup)  
<!-- III. [Views](views)   -->
<!-- IV. [Planning](#planning)   -->
III. [Technologies Used](#technologies-used)

___

### Description

Mission-Control is a single page, progressive web application being built with Vue.js. It's purpose is to act as both a tool for sourcing content that the artist uses and as the admin layer of a portfolio website.

**Mission-Control is still in development.** Upon completion it will communicate with public domain databases and a C# web api to source material,persist desired data, and control the creation and maintenance of content used on a website.

Mission-Control is one part of a three piece web application. For information about the other two projects use the following links:

- [**Elenor**](https://github.com/68thandMaine/Eleno-r.git):  React application that acts as a portfolio website.
- [**Elenor-Server**](https://github.com/68thandMaine/ElenorServer.git): C# Web API that uses Entity Framework Core to manage data created and used in both Elenor and Mission-Control.

___

### Project Setup

Mission-Control is still in development and much of the core functionality is still being written. To view the most current and functioning version of Mission-Control you will need to view the `develop` branch.

#### Steps

1. Clone the repo into the desired directory:

   `$ git clone https://github.com/68thandMaine/MissionControl.git`

2. Install project dependencies:

   `$ npm install`

3. Checkout into the develop branch:

   `$ git checkout --track origin/develop`

After following the above steps, the most currently completed features of the application will be visible.

To view integration tests use the following command: **`$ npm run integration`**

To view the application use the following command: **`npm run serve`**

___

### Technologies Used

- Axios
- Vue.js
- Cypress.js
- Vuex

