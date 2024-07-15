# Aitken Music
Aitken Music is a Spotify clone web app that allows users to play snippets of popular songs, search for songs and artists, and see the top charts for specific genres. The app is mobile-friendly and uses React.js, Vite, Tailwind, Redux and RapidAPI. The app uses the ShazamCore API from RapidAPI to gather all the song and artist information. Created to become more familiar with Redux and RapidAPI. 

*Note: I'm in the process of commenting my code to make it more readable*

## Getting Started
These instructions will help you set up the project on your local machine.

### Prerequisites
To run this project on your local machine, you will need to have Node.js and npm installed. You will also need to obtain an API key from RapidAPI.

### Installing
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the following command:

```
npm install
```

1. Create a **.env** file in the project directory and add the following variables:

```
VITE_RAPIDAPI_KEY=your_rapidapi_key
```

Replace the value for **VITE_RAPIDAPI_KEY** variable with your own API key.

### Running the App
1. To start the app, run the following command:

```
npm run dev
```

Open your web browser and navigate to http://localhost:3000 to view the app.


## Built With
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A fast build tool for modern web apps.
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [RapidAPI](https://rapidapi.com/) - A platform that allows developers to find, connect to, and manage APIs.

## Authors
- **Michael Aitken** - *Initial work* - [GitHub](https://github.com/michaelaitken)

## Acknowledgments
This project was created during a course by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) but has been heavily modified. Changes I made:
- Completely overhauled the UI.
- Added mobile friendly components to improve UX.
- Implemented the updated ShazamCore API. (Old Version is broken)
- Updated dependencies to their current versions.
- Fixed a **LOT** of bugs.
