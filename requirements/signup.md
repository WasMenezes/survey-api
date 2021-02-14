> ## Success Cases

1. ✅ Receives a request of type **POST** on root **/api/signup**
2. ✅ Validates mandatory data **name**, **email**, **password** and **passwordConfirmation**
3. ✅ Validates that **password** and **passwordConfirmation** are the same
4. ✅Validates that field **email** is a valid email
5. ⛔ **Validate** if a user already exists with the email provided
6. ✅ Generate a **encrypted** password  (this password cannot be decrypted)
7. ✅ **Create** an account for the user with data entered, **replacing** the password for the **encrypted** password
8.  ⛔ Generates an access **token** by user id
9.  ⛔ **Updates** the user data with the access token generate
10. ⛔ Returns **200** with acess token and user name

> ## Exceções

1. ✅ Returns **404** error if the API does not exist
2. ✅ Returns **400** error if name, email, password or passwordConfirmation are not provided by the client
3. ✅ Returns **400** error if password and passwordConfirmation are not the same
4. ✅ Returns **400** error if the email provieded is invalid
5. ⛔ Returns **403** error if the email provided is already in use
6. ✅ Returns **500** error if get an error when trying to generate an encrypted password
7. ✅ Returns **500** error if get an error when trying to create a user account
8. ⛔ Returns **500** error if get an error when trying generates the access token
9. ⛔ Returns **500** error if get an error when trying update a user with the access token generate