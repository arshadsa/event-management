## Backend API's
### GET
* **User** &rarr; /user/confirm_email?token= &rarr; "confirm email by token".
* **Event** &rarr; /events &rarr; "get list of events".
* **Event Form** &rarr; /eventForm &rarr; "get all event form".
* **Event Form** &rarr; /eventForm/:id &rarr; "get event form by id".
* **Blog** &rarr; /blog/list &rarr; "get blog list".

### POST
* **User** &rarr; /user/signup &rarr; "create new user".
* **User** &rarr; /user/login &rarr; "login user".
* **Event** &rarr; /events/request &rarr; "create new event".
* **Event Form** &rarr; /eventForm &rarr; "create new event form".
* **Blog** &rarr; /blog/create &rarr; "create new blog ".

### PATCH
* **User** &rarr; /user/update/ &rarr; "update user profile".
* **User** &rarr; /user/control/:email &rarr; "control a user (status, role)".

### DELETE