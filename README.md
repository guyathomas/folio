# Folio - Developer portfolios in 5 minutes
Folio was created to help developers stand out by having a customised web folio, but without the overhead of just having to create one from scratch. It uses data in a JSON file to populate all folio features and profile information.

You can see it live at [here](https://www.google.com).

![alt text](http://res.cloudinary.com/dqvlfpaev/image/upload/v1494499176/Folio-Smaller_ssmj9b.gif "An example case study of a puppy")


### Tech

Folio uses a number of projects to work properly:
  - [React] front end (With React Router)
  - [Stylus] css preprocessor to simplify dealing with stylesheets
  - [Docker] to enable the microservice architecture
  - [AWS Elastic Beanstalk] to host containers
  - [CircleCI] to build, run tests, upload to Dockerhub & deploy to AWS

### Installation

Folio requires [Node.js](https://nodejs.org/) v6+ to run.
Engauge can be run with Webpack Dev Server (Included) or [Docker](https://www.docker.com/) & Docker Compose.

Clone the repo & install dependencies
```
git clone https://github.com/stolemyusername/folio.git
cd folio
npm install
```
edit `resume-data.json` with your details
```
npm run dev
```

Now navigate to http://localhost:3000/. The app is running!

### Development

Want to contribute? Great!

Just make sure you right tests and then make a PR.

License
----

MIT


**Free Software - Hooray!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [React]: <https://facebook.github.io/react/>
   [CircleCI]: <https://circleci.com/>
   [Docker]: <https://www.docker.com/>
   [AWS Elastic Beanstalk]: <https://aws.amazon.com/elasticbeanstalk>
   [Stylus]: <http://stylus-lang.com>