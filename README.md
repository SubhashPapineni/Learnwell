# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/SubhashPapineni/Learnwell).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## About this project

Created a webpage "Learnwell".

### Given Requirements:
-- Show a list of videos and allow users to select a video from the list.

-- Allow the user to create a new video object with a title, description and a video URL.

-- A user must be able to comment on a video and view comments from other users.

-- Open the videos in full screen with full playback functionality.

-- Include options for adjusting playback speed and volume. 

### My implementation:
1. Created a webpage that shows a list of Videos and a user can select any video form the list.
2. Created an "Upload Page", When ever a user clicks on upload button on the hoempage it will direct them to a new page where they can upload a video by giving Title, Discription and Link of the video.
3. All the Uploaded videos can be viewed in the home page.
4. A user can comment on a video and it can be viewed in the comment section(Note: "User name in the comment is hard coded as Subhash because of the limitation of API")
5. we can open the Video in full screen and adjust the playback speed.

### ADD ONS:
1. Added a search box for the home page and video page for Future work("To make it work need to API").
2. Added Related Videos section where a user can click and watch other uploaded videos from the website.

### Future work:
1. Hard coded images for the video thumbnails can be improved to video related images.
2. Make the searchbox work.
