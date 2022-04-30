# Tokyo-Craft-Beer-Bar-API

This was created during my time as a student at Code Chrysalis.

![Moe's Tavern | Simpsons Wiki | Fandom](https://static.wikia.nocookie.net/simpsons/images/9/96/800px-Moe%27s_Tavern.png/revision/latest?cb=20170101230904)



### What is this?

Howdy! Tokyo-Craft-Beer-Bar-API is an API that was built to help find a new local craft beer bar near you! With Japan being relatively new to the craft beer scene, finding a local place to hang out can be quite the challenge if you don't know where to look!



## Setup

After cloning and forking, here is what we can do to get started: 



##### Install Dependencies

```npm i```

##### Start server

 Run ```npm run start```

##### Execute the latest migration

Run ```npm run migrate```

## Endpoints

| Request | Request URL                         | Description                                                 |
| ------- | ----------------------------------- | ----------------------------------------------------------- |
| GET     | ```/all_bars```                     | Returns an object of all bars                               |
| GET     | ```/:bar_name```                    | Returns an object of bar provided by user                   |
| GET     | ```/all_bars/smoking_allowed```     | Returns an object of bars where smoking<br />is allowed     |
| GET     | ```/all_bars/smoking_not_allowed``` | Returns an object of bars where smoking<br />is not allowed |
| GET     | ```/all_bars/:station```            | Returns an object of bars located near ```:station```       |
| POST    | ```/all_bars```                     | Add a bar to the database                                   |
| PATCH   | ```/:bar_name```                    | Update an existing bar in the database                      |
| DELETE  | ```/:bar_name```                    | Delete an existing bar in the database                      |


