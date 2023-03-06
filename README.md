## 💻 Dev-Database-Seeder-Express-Sequelize

![alt text](<./Assets/Screenshot%20(58).png>)
![alt text](<./Assets/Screenshot%20(59).png>)
![alt text](<./Assets/Screenshot%20(60).png>)

# Description

This is an e-commerce backend application that utilizes Express.js and Sequelize to interact with aMySQL database. The goal of this project is to build a functional and up-to-date e-commerce websitebackend that can compete with other e-commerce companies. The acceptance criteria include creating adevelopment database, seeding it with test data, starting the server, syncing Sequelize models withthe database, and successfully performing CRUD operations on the database through API routes.Insomnia is used to test API GET, POST, PUT, and DELETE routes to ensure data is displayed in aformatted JSON and can be successfully created, updated, and deleted. A walkthrough videodemonstrating the application's functionality and meeting all of the acceptance criteria is alsorequired.

## Technologies Used:

- dotenv
- express
- mysql2
- sequelize

## Installation:

- Clone the repository to your local machine.
- Navigate to the root directory of the project in your terminal.
- Run npm install to install the necessary dependencies.
- Create a new file named .env in the root directory of the project.
- Add your MySQL username and password to the .env file.
- Run npm run seed to seed the database with test data.
- Run npm start to start the application.

## Usage

- Run npm install to install all required dependencies.
- To create the database, run npm run seed.
- Start the application with npm start or npm run watch if you want to automatically restart the server when changes are made.
- Use an API testing tool such as Insomnia to test the API routes.
- Use the following routes to interact with the database:
  - GET /api/categories - returns all categories and their associated products.
  - GET /api/categories/:id - returns a single category and its associated products.
  - POST /api/categories - creates a new category.
  - PUT /api/categories/:id - updates a category by its id.
  - DELETE /api/categories/:id - deletes a category by its id.
  - GET /api/products - returns all products and their associated categories and tags.
  - GET /api/products/:id - returns a single product and its associated categories and tags.
  - POST /api/products - creates a new product.
  - PUT /api/products/:id - updates a product by its id.
  - DELETE /api/products/:id - deletes a product by its id.
  - GET /api/tags - returns all tags and their associated products.
  - GET /api/tags/:id - returns a single tag and its associated products.
  - POST /api/tags - creates a new tag.
  - PUT /api/tags/:id - updates a tag by its id.
  - DELETE /api/tags/:id - deletes a tag by its id.

## Video

https://www.youtube.com/watch?v=cplIqR-pgxs

## Contact-details

linkedin: ://www.linkedin.com/in/kayhan-mamak-5423b4262/
Github: https://github.com/byunn90
Email: Kayhan_mamak@hotmail.com
