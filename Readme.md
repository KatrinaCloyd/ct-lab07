# LAB 04: Build Something

Build an application using a layered architecture.

## Requirements

Create all CRUD routes for at least one order model. Use the red, green,
refactor process.

You should have some interaction to put in your service. Some examples:

* send an email with Amazon SES
* fetch from a web API to fill in data
* save a file to Amazon S3
* use the tensorflow toxicity model to reject toxic text

## Rubric

* model class (1 points)
* service class (8 points)
* controller (1 points)

### PLAN
Create an DB of users who sign up with their name, phone number, and favorite drink. Then they get random cocktail suggestions by making a get request. They can also change their favorite drink if one of our suggestions has beaten out their previous favorite. 

will use https://www.thecocktaildb.com/api for cocktail recipes 

* ENDPOINTS 
    * XXXXX POST - initial set up of new user in DB
        * add user to DB 
        * hit the cocktail api to get random cocktail 
        * send a welcome text with their current fav drink
        * send their first random cocktail text
    * XXXXX GET by ID (id in params) - new random cocktail 
        * hit the cocktail api to get random cocktail 
        * send new random cocktail recipe text to user
    * XXXXX GET all users -
        * will get all users and return as an array  
    * XXXXX PUT (send new favorite) - update users fav cocktail 
        * Update users favorite cocktail to whatever they send by matching on user id
        * Send new favorite cocktail confirmation text 
    * XXXXX DELETE (id in params) - delete user 
        * will delete user from DB matching on user id
        * send good bye text

* Utils 
    * ~~Twillio~~
    * ~~get rando drink from cocktailDB~~ 
    * *maybe next time* Amazon SES 

* FRONT END PLAN 
    * Main Landing page - welcome, explain what it is, allow users to sign up (POST)
        - to sign up they must enter 
            - name
            - phone number - 9 digits no spaces or puncuation
            - what their current favorite drink is
    * After they sign up they taken to a second page
        - show their user info 
        - button to get new cocktail recipe texted to them (GET /:id)
        - button and field to update current favorite cocktail (PUT /:id)
        - button to show all other users favroite drinks (GET) will only show name and fav, no phone numbers
        - button to delete account (DELETE /:id)
    