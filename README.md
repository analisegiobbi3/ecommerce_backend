
  # Object-Relational Mapping: E-commerce Back End

  

  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

  ## [Description](#table-of-contents)
  This program allows a user to make requests to an e-commerce backend. the program uses MySQL2 adn Sequilize to help with these requests. 
  Requests include GET, to obtain the data for different categories, PUT to update data, PUSH, to create new data, and DELETE to remove data

  ## [Installation](#table-of-contents)
  To install the program, first clone the repo to your local environment. You can then install the depedencies with the following command:
  `npm install`
  Make sure that you are on node version 16 before starting your server. You can start your server with the following command:
  `npm start`


  ## [Usage](#table-of-contents)
  To use this program, you will need and API testing tool, such as Insomnia or Postman. Once you have started your server, you can make your requests. 
  GET requests will allow you to get all of the data for your categories, tags, and products:
  `localhost:3001/api/categories/`
  `localhost:3001/api/tags/`
  `localhost:3001/api/products/`

  GET requests for 1 item can be condicuted with the following. Note, the number is the id of the object you wish to request:
  `localhost:3001/api/categories/2`
  `localhost:3001/api/tags/2`
  `localhost:3001/api/products/2`

  POST requests will create a new object. An id will be automatically assigned to these posts:
  //add screenshots here

  PUT request will allow you to update an object

  Finally, DELETE requests will allow you to remove and object. Note, the number is the id of the object you wish to delete:
  `localhost:3001/api/categories/2`
  `localhost:3001/api/tags/2`
  `localhost:3001/api/products/2`




  ## [License](#table-of-contents)
  n/a

  For information on other liceneses, please visit
  [choosealicense.com](https://choosealicense.com/)

  ## [How to Contribute](#table-of-contents)
  n/a

  ## [Tests](#table-of-contents)
   n/a

   ---
  ## [Questions](#table-of-contents)
  For any inquiries regarding the application, please use the github or email below: 

  [Github](http://github.com/analisegiobbi3)

  [Email: analise.giobbi@gc.com](mailto:analise.giobbi@gc.com)

