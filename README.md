# SMRT Delay Tracker

## Getting Started

### Prerequisites

Clone the project onto your local server/machine, and have the following information in your .env file:

* SESSION_SECRET
* TWITTER_CONSUMER_KEY
* TWITTER_CONSUMER_SECRET
* TWITTER_ACCESS_TOKEN
* TWITTER_ACCESS_TOKEN_SECRET
* TWITTER_CALLBACK_URL_LIVE

Create a dbConfig.js file in the helpers folder with the information for your mongoDB server.

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

ERD as per below:

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/erd.png)

Initial Wireframes as per below:

![](https://raw.githubusercontent.com/strisen/project-2/master/public/wireframes/mainframe.png)

The aim of this app is to allow users to keep track of train delays easily in one location.

As an user, I would prefer to have one tracker/page/app to compile all train delay reports for viewing instead of having to perform manual searches or rely on specific users on the Twitter platform for information.

The authentication is necessary to facilitate the implementation of an annoucement/post system where additional information can be posted and shared within the app.

### Functions / Code used

* getLocalDate()
Due to Twitter storing the date/time of tweets in a fairly unique format, rearrangement of the date format was required before utilising momentJS to convert it to a desired local date format or in terms of time from now.

* newLineCheck()
Based on the tweet data, 2 separate checks, one for station name and another for line name, are run on the tweet text so as to verify the train line that this tweet is referring to.

* tweet.get('search/tweets', {q: ...}, function (err, data, res) {...}
This allows me to run a search through the Twitter Search API for tweets meeting my query parameters.

## Acknowledgments

* Twitter API Documentation & Forums
