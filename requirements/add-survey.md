> ## Success story

1. ✅ Receive a ** POST ** request on route ** / api / surveys **
2. ✅ Validates if the request was made by an ** admin **
3. ✅ Validates mandatory data ** question ** and ** answers **
4. ✅ ** Create ** a poll with the data provided
5. ✅ Returns ** 204 **, without data

> ## Exceptions

1. ✅Return Error ** 404 ** if anthe API does not exist
2. ✅ Return error ** 403 ** if the user is not an administrator
3. ✅ Returns error ** 400 ** if question or non-main answers provided by the customer
4. ✅ Returns error ** 500 ** if there is an error when trying to create a poll