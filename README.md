[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NGGI9_Zk)

[![Build and Deploy](https://github.com/cscie114/csci-e-114-final-project-luthian/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/cscie114/csci-e-114-final-project-luthian/actions/workflows/build-and-deploy.yml)
# Final Project
## Harvard CSCI E-114 Web Application Development with Jamstack
### The project can be found at https://dainty-churros-daf90f.netlify.app/ and the WordPress site that drives it is at https://appetizertray.art 

### Introduction

This is my submission for the Final Project in **CSCI E-114 Web Application Development with Jamstack**. This project is
very free form, so I decided to create a simple Gatsby site that showcases a few of the appetizer trays I've
made for various occasions. Gatsby pulls data from a WordPress site which is being used as a headless CMS. The
site is hosted on Netlify and the WordPress site is hosted on a nano droplet on Digital Ocean. The site is
styled with Tailwind CSS and uses the Gatsby Image plugins to optimize images. To make things a bit more
interesting, I've added filtering; the user can filter the appetizer trays by ingredients and the type of event
for which they were made.

Note that this project doesn't use any special Gatsby plugins related to WordPress. The data is fetched via the
stock WordPress REST API and the images are processed on the Gatsby side.

### Setup

Please follow the steps below to build and view this website.

* Clone the GitHub repo at https://github.com/csci-e-114-final-project-luthian into the directory of your choice. This will be referred to as the `root` directory in the documentation.

Time passes...

* To host the site on Netlify, you'll need a Netlify account. So far, the project hasn't required more resources than the free tier makes available. You can start the process [here](https://www.netlify.com/pricing/).
* Once you've got a Netlify account, you will need to create a site; click on the **Sites** link in the sidebar and then on the big green button **Add New Site**.
* To be able to build and upload this projec to your own Netlify site, you'll need an Personal Account Token and the Site Name.
  * The Site ID can be found in the **Site Configuration** section for the site created above. Select **Site Configuration** from the sidebar and save the _Site ID.
  * To get the Personal Access Token, click on icon in the upper right and select **User Settings**. In the middle list, select **Applications**. In the Personal Access Tokens section, click **New Access Token** and follow the directions. _Please save the token as you will **not** be able to recover it!_

* To provide data to the site, you'll need a headless WordPress site. To create one, choose a hosting provider or, if possible, create the site locally; I used [Digital Ocean](www.digitalocean.com). I created the smallest droplet they offer and used their Marketplace to [install].(https://marketplace.digitalocean.com/apps/wordpress) WordPress.
  * To access the WordPress site, you will need a Username, an Application Password and, of course, the site URL.
  * To create the Application Password (AP), log in to your WordPress site and select _Users -> Profile_ from the sidebar. At the bottom of that page, you can create the AP. _Please save the AP as you will **not** be able to recover it!_
  * In addition, you will need a WordPress plugin that can fire a webhook on WordPress events. I used [Automator Plugin](https://automatorplugin.com/); the free tier allows it to trigger on _Publish_ and _Update_. To be honest, I don't recommend it as it _really_ wants you to upgrade to Pro. I believe [WPGatsby](https://wordpress.com/plugins/wp-gatsby), while a bit out of date, will do just fine.
  * Configure the plugin to send a http request to GitHub on publishing or updating a post. See the instructions for your plugin on how to do this. If you're using Automater, make sure the `content-type` is `JSON`, not the default or it won't work. You can test trigger the webhook, which should actually publish the site!
  * Create WordPress **tags** representing tray ingredients and WordPress **categories** representing types of trays.

More time passes...

* Once you have the AP, ID and Token, you'll need to create a file at the root of the project named `.env`; yes, that's a dot at the beginning of the file name. Note that this file is listed in `.gitignore` so `git` won't track it or allow you to check it in. Once created, add the keys in the following format:
 `KEY_NAME=<Key value here>`. You want the following values
  * `NETLIFY_ACCESS_TOKEN="Your PAT from Netlify"`
  * `NETLIFY_SITE_ID="The site ID"`
  * `WORDPRESS_AUTH_USERNAME="Your WordPress Username"`
  * `WORDPRESS_AUTH_PASSWORD="Your AP"`
  * `WORDPRESS_API_URL="The address of your site"`

  These will be readable when the code is built. This is done so that the keys are never included in anything checked into the repo.

  The values for my existing site are in the uploaded `.env` file for this assignment.

* Now install all the dependencies required to create the website. In the root directory do `npm install` to install everything. You can safely ignore any warnings or vulnerabilities.

Still more time passes...

* Since part of the assignment is to use GitHub actions to test and deploy the site, the next step is configure the GitHub repo. Specifically, we have to tell GitHub about those keys.
  * Open your repo in a web browser and select the **Settings** icon at the end of the items in the menu.
  * In the sidebar, under _Security_, select **Secrets and variables**.
  * In the menu that just opened, select **Actions**
  * In the _Repository secrets_ section, add the keys and values from your `.env` file.

### Using the site

* If you're using your own WordPress site, go create a new _Post_. It should have a _title_, an _image_ (not just the featured image), perhaps a _caption_ for that image in the Media Library, and a description. Assign it the appropriate _tags_ and _categories_ and publish the post. I also backdated each post to the date/time when the photo was taken. Publishing or updating the post should trigger the GitHub workflow.
* You can monitor the workflow from the GitHub Action page. When the build is finished, go to Netlify and open your site.

### Notes

* There are several warnings that show up when testing or building the site. These can be ignored as they don't affect the site operation.
  * During the testing of the **Header** component, Jest will complain that `html` cannot appear as a child of `div`. This is true but is due to how the React testing framework does its thing. It doesn't happen in the real site
  * During the build of the site in development mode, Gatsby's `eslint` configuration will complain about React hooks and a `label` not being associated with its control. The former hook dependencies aren't needed and, in fact, cause an infinite loop if used. The latter isn't shown when running `eslint` with my configuration and the `label` is associated with the `input` by wrapping it.
  
