 Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
This project helps users track their workouts and their intended goals and experience levels. This all occurs in the intial sign up. However I was unable to figure out how to render a signup/sign in form when the page first renders. That being said, I was able to create the sign up/sign in. 





Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.

I didn't use any external libraries that would add to the workout app. If there was more time I would've liked to integrate an API for workouts list that had images and information that follows within workouts. But I wanted to get my application to work with the basics of the CRUD. 

Getting Started: Info on how to clone and start the app and link to the deployed app on GitHub Pages/Render.

using render, however had some issues starting the npm run build operation. 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "servers": "concurrently \"cd Backend && nodemon server.js\" \"cd Client && npm run dev\"  ",
    "start": "node ./Backend/server.js",
    "build": "npm run build"
  },

Unsolved Problems: List any unsolved issues.

A lot of issues I still had:
1. Unable to correctly set user favorites to show up, and hence not able to properly update or delete. the features of the crud application.

2. The application is still at a very basic level, I would like to continue going back to this app and reworking the ability to integrate the full application so that a user log in will show the wkrouts they favorited, and allow them to update workouts or goals etc.
3. 
Future Enhancements: Identify future features and enhancements planned for the project.

This would be a good opportunity to also integrate the project with a UI/UX friendly application. I have not previously used MUI or Bootstrap. But this should've been my opportunity to try at least working it so that way I could have some familiarity with generally starting the application process. 

Have a link to your hosted working app

https://www.youtube.com/watch?v=Q_3lXJ0agwI

im having a lot of difficulties trying to host my website onto render. 
https://dashboard.render.com/web/srv-cl5i2hd6fh7c73enkc40/settings
I realize this site is only accessible by users. 
but i have this as a webservice since it utilizes a front and back end functionality. 
build command: npm install
start command: npm concurrently


I have posted the images here, since my hosting is having issues here. 
![Screenshot 2023-11-07 232845](https://github.com/josephachang02/WorkoutApplication/assets/131396136/3bb70282-7fdf-4632-b1de-2679edf21c8e)
![Screenshot 2023-11-07 232841](https://github.com/josephachang02/WorkoutApplication/assets/131396136/060ab50e-1967-4605-a46a-53b801432f42)
![Screenshot 2023-11-07 232835](https://github.com/josephachang02/WorkoutApplication/assets/131396136/479b3085-d289-480a-9c15-59cc39fdf10a)
![Screenshot 2023-11-07 232829](https://github.com/josephachang02/WorkoutApplication/assets/131396136/5d846eee-499f-4b3f-83e0-97263249a27d)
![Screenshot 2023-11-07 232822](https://github.com/josephachang02/WorkoutApplication/assets/131396136/054670d9-18c2-4081-bcf6-d7ceaadd0bd5)


