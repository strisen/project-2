# SMRT Delay Tracker

## Getting Started

### Prerequisites

Clone the project onto your local server/machine, and have the following information in your .env file:

* SESSION_SECRET
* LOCAL_CONSUMER_KEY
* LOCAL_CONSUMER_SECRET
* LOCAL_ACCESS_TOKEN
* LOCAL_ACCESS_TOKEN_SECRET
* TWITTER_CALLBACK_URL_LOCAL

Create a dbConfig.js file in the helpers folder with the information for your mongoDB server as per below:

```
module.exports = {
  'urllive' : (Your mongoDB url here)
}
```

After which, perform the following command in terminal to install the required modules:

```
yarn install
```

### How to Use

The tracker page will display the latest announcement and the tracked tweets pertaining to the various train lines in Singapore.

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/prelogin.png)

To access the Announcements menu, the user must first login to the app through Twitter using the link in the navigation bar.

After login, the user will now see that the Announcements and the Logout options are now available in the navigation bar.

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/postlogin.png)

To make an announcement, click on the Announcements option and you will be directed to the following page:

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/announce.png)

Simply key in the announcement in the text box provided, and click submit when done. The announcement will then be uploaded to the database and be rendered on both the main tracker page and the Announcements page.

## Live Version

Current Build:

https://smrtdelaytracker.herokuapp.com/

## Built With

* HTML
* CSS
* JavaScript
* jQuery
* connect-flash
* twit
* momentJS
* passportJS
* Mongoose
* MongoDB
* Express-Handlebars

## Workflow

**ERD**

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/erd.png)

**Wireframes**

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/mainframe.png)


**User Stories**

The aim of this app is to allow users to keep track of train delays easily in one location.

As an user, I would prefer to have one tracker/page/app to compile all train delay reports for viewing instead of having to perform manual searches or rely on specific users on the Twitter platform for information.

The authentication is necessary to facilitate the implementation of an announcement/post system where additional information can be posted and shared within the app.

## Future Improvements

* Implement an admin function for moderating purposes
* To further optimise for Twitter API Rate Limits
* To improve on the search parameters to reduce false positives

## Acknowledgments

* Twitter API Documentation & Forums
