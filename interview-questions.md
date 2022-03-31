# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: This mistake can be fixed by incorporating the belongs_to statement in the Student model. If the Cohort model contains the has_many statement, then it makes sense for the Student model to have the belongs_to statement. A cohort has many students and the students belong to a cohort. The name of the foreign key would be student_id and this foreign key would be on the Student model since Cohort and Student are two different data tables that are being linked to each other. I remember when we were taught Active Record Associations which was the concept of linking or associating two different data tables together.

  Researched answer: To create an association between two different data tables, the foreign key must be assigned to the model that is plural, not singular. In this example, the singular model is Cohort and the plural model is Student because a cohort has many students. The foreign key always goes on to the belongs_to side. The name of the foreign key would be student_id because the naming convention for foreign keys is modelname_id and data type is always an integer.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are the show, create, update, and delete routes. These routes must be passed params because these routes involve executing a certain action on a specific piece of data. When I was learning RESTful routes and creating methods for these specific routes, I remember always having to use the .find() method while passing the params since the whole idea is revolved around finding a specific piece of data first before performing the action.

  Researched answer: So after researching, I found out that the RESTful routes that must always be passed params are the show, update, edit, and destroy routes. The reason being is because these RESTful routes must incorporate the .find(params[:id]) within their respective methods since they are only dealing with one piece of data. :id is the params that is passed into the url.



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands are the rails generate Model command, the rails generate Controller command, and the rails generate Resource command. The rails generate Model command is responsible for creating the Model for a rails application. The Model can be given specific attributes with their corresponding data types. The rails generate Controller command is responsible for creating the Controller for a rails application and adds more dependencies to the app. The rails generate Resource command is similar to the rails generate Model command with the only difference being that the routes.rb file does not need to be updated if the generate Resource command was ran.

  Researched answer: The rails generate model command is responsible for creating the name of the model, the name of each column, and the data type of each column as arguments. The casing convention for naming a model is uppercase and singular since Rails is super picky about its naming convention. The rails generate Controller command is responsible for adding more important files to a rails app which can then be modified so that the controller can route external requests to internal actions. I remember Austin providing a helpful way to remember the functions of a controller by comparing it to a traffic signal, it manages the interaction between the user and application. After looking more into the rails generate Resource command, I found out that the resource command is responsible for creating the model AND the controller at the same time. All of the files get added in one command making it a lot more utilitarian.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students

Controller method: index - The index method would show all of the students currently in the database.        

action: "POST"   location: /students

Controller method: create - The create method would input new data into the database.        

action: "GET"    location: /students/new

Controller method: new - The new method would show a form to input a new student into the database.

action: "GET"    location: /students/2  

Controller method: show - The show method would shoe only one student depending on the params that was passed in the url.

action: "GET"    location: /students/2/edit    

Controller method: edit - The edit method is similar to the new method and would show a form to edit information about a student that is already in the database.

action: "PATCH"  location: /students/2      

Controller method: update - The update method would modify an existing student in the database.

action: "DELETE" location: /students/2    

Controller method: destroy - The destroy method would remove a student from the database.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the tasks listed on the home page of the application.

2. As a user, I can click on a task on the home page and be routed to a page where I can see the completion status of the task that I have selected.

3. As a user, I can navigate from the show page back to the home page.

4. As a user, I can click a button that will take me from the home page to a page where I can add a new task to the list.

5. As a user, I see a form where I can create a new task to add to the list.

6. As a user, I can click a button that will submit my new task to the database.

7. As a user, when I submit a new task, I am redirected to the home page.

8. As a user, I can delete a task from the to-do list.

9. As a user, I can update the completion status of a task on the to-do list.

10. As a user, I can update the title of the task on the to-do list.
