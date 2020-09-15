#### Create Your Advanced Form

-We want to create a form to onboard a new user to our system. 
-We need about our new user:
  - [ ] Name
  - [ ] Email
  - [ ] Password
  - [ ] Terms of Service (checkbox)
  - [ ] A Submit button to send our form data to the server.

#### Implement Form Validation and Error Messaging

- [ ] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

#### Make a POST Request

- [ ] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _`https://reqres.in/api/users`_
- [ ] Verify using a `console.log()` that you are receiving a successful response back

#### Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [ ] Set up a state property called `users` that is initialized with an empty array
- [ ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
- [ ] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.