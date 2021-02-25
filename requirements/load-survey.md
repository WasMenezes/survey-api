# List Surveys 
> ## Success Cases

1. ✅ Receives a request of type **GET** on root **/api/surveys**
2. ✅ Validates if the request was made by an user
3. ✅ Returns 204 if there is no poll
4. ✅ Returns 200 with surveys data


> ## Exceptions

1. ✅ Returns **404** error if the API does not exist
2. ✅ Returns **403** error if are not a user
3. ✅ Returns **500** error if get an error when try to list surveys
