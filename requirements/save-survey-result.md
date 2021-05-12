> ## Success story

1. ⛔ Receive a **PUT** request on the route **/api/surveys/{survey_id}/results**
2. ⛔ Validates if the request was made by a **user**
3. ✅ Validates the **survey_id** parameter
4. ⛔ Validates that the **answer** field is a valid answer
5. ⛔ **Create** a poll result with the data provided if you do not have a record
6. ⛔ **Updates** a poll result with the data provided if you already have a record
7. ⛔ Returns **200** with the poll result data


> ## Exceptions

1. ⛔ Returns **404** error if the API does not exist
2. ⛔ Returns **403** error if not a user
3. ✅ Returns **403** error if the survey_id passed in the URL is invalid
4. ⛔ Returns error **403** if the response sent by the client is an invalid response
5. ⛔ Returns error **500** if an error occurs when trying to create the poll result
6. ⛔ Returns **500** error if there is an error when trying to load the poll
6. ⛔ Returns **500** error if an error occurs when load the poll
