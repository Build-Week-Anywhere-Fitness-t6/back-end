# back-end

### Resource: API documentation

#### GET `https://ft-anywhere-fitness-6.herokuapp.com/api/users`
- Retrieves an array of all users:
```
[{"user_id":1,"username":"ripped","password":"$2a$04$J71bnhiIPwZPu9R9UUckyu152OdJzVcvuKwZSIAzb1dNQWCa84a8O","role":"client","firstname":"Vin","lastname":"Diesel","created_at":"2021-11-16T18:16:33.837Z","updated_at":"2021-11-16T18:16:33.837Z"},{"user_id":2,"username":"shredded","password":"$2a$04$jupgrLNHZKpS0iwTpx6fTOheH5pjBVHDEPqpCEe4ecY1FMZxsTs5y","role":"client","firstname":"Dwayne","lastname":"Johnson","created_at":"2021-11-16T18:16:33.837Z","updated_at":"2021-11-16T18:16:33.837Z"},{"user_id":3,"username":"yoked","password":"$2a$04$BcHTRCfcELXeprQGyCgq..kfWzFbFkXjovaNBtk0iGnxg1VReECkC","role":"instructor","firstname":"Gabriel","lastname":"Cabrejas","created_at":"2021-11-16T18:16:33.837Z","updated_at":"2021-11-16T18:16:33.837Z"}]
```
#### POST `https://ft-anywhere-fitness-6.herokuapp.com/api/auth/register`
- Registers the new user
{ "username": "deeyoak", "password": "1234", "role": "instructor", "firstname": "Dwight", "lastname": "Yoakum"}
 and returns the new user including their user_id, their password is hashed for storage

#### POST `https://ft-anywhere-fitness-6.herokuapp.com/api/auth/login`
- Logs in the registered user
{
    "username": "deeyoak",
    "password": "1234"
}
and returns 
{
    "message": "Welcome, deeyoak!",
    "token": "theUsersToken"
}
#### GET `https://ft-anywhere-fitness-6.herokuapp.com/api/classes`
- Retrieves an array of all fitness classes
[{"class_id":1,"name":"Pilates on the patio!","instructor_username":"yoked","type":"pilates","start_time":"6am Friday","duration":"45 mins","intensity":"intermediate","location":"123 Jones St","attendees":0,"class_size":20},{"class_id":2,"name":"Pumping iron at the beach!","instructor_username":"yoked","type":"weightlifting","start_time":"10am Thursday","duration":"45 mins","intensity":"beginner","location":"456 Smith Ave","attendees":0,"class_size":15}]
#### GET `https://ft-anywhere-fitness-6.herokuapp.com/api/classes/:id`
- Retrieves a fitness class with the passed value as id
#### POST `https://ft-anywhere-fitness-6.herokuapp.com/api/classes`
- Adds the fitness class passed in through body to the server classes list.
{
    "name": "Yoga in the living room",
    "instructor_username": "deeyoak",
    "type": "yoga",
    "start_time": "9am",
    "duration": "20mins",
    "intensity": "beginner",
    "location": "living room floor",
    "class_size": 1
} 
Returns the added class with class_id and attendees defaulted to zero.
#### DELETE `https://ft-anywhere-fitness-6.herokuapp.com/api/classes/:id`
- Deletes the fitness class with the class_id matching :id and returns the number of classes deleted (1)
#### PUT `https://ft-anywhere-fitness-6.herokuapp.com/api/classes/:id`
- Replaces the fitness class with the class_id passed in through :id with the data passed in through body.
{
    "class_id": 3,
    "name": "Yoga in the living room",
    "instructor_username": "deeyoak",
    "type": "yoga",
    "start_time": "10am",
    "duration": "20mins",
    "intensity": "beginner",
    "location": "living room floor",
    "attendees": 12,
    "class_size": 1
}
- Returns the updated fitness class object.