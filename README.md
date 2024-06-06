# PokémonTracker

**Welcome to PokémonTracker**, your ultimate companion for all things Pokémon!<br>
Discover and learn about Pokémon, explore their abilities, and embark on exciting adventures in the Pokémon world.<br>
Start your journey now!



![PokémonTracker Logo](public/assets/pokemon.png)

### Features

- 🗂️ Fetch and display a list of Pokémon.
- 📋 View detailed information about each Pokémon.
- 🌟 Translate Pokémon abilities to Yoda language.
- 🔍 Search and paginate through the list of Pokémon.

### How to Run

Visit [PokemonTracker Website](https://pokemontracker.vercel.app) Or
Follow these steps to run PokémonTracker locally on your machine:

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/alvinpeter9/pokemontracker.git
cd pokemontracker
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Start the Application

```bash
npm run dev
# or
yarn run dev
```

### Project Structure

```plaintext
pokemontracker/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── hoc/                # Higher Order Components
│   ├── lib/                # Library functions (e.g., API calls)
│   ├── mocks/              # MSW handlers for mocking APIs
│   ├── utils/              # Utility types and functions
│   ├── App.tsx             # Main app component
│   ├── App.test.tsx        # Tests for the main app component
│   ├── main.tsx            # Entry point of the application
│   ├── setupTest.tsx       # Test setup file
│   └── ...                 # Other files
├── index.html              # HTML template
├── .gitignore              # Git ignore file
├── package.json            # NPM dependencies and scripts
├── README.md               # Project documentation
└── vite.config.ts          # Vite configuration file
```

### Technologies Used

- ⚛️ React.js
- 📘 TypeScript
- 🎨 Material-UI
- 🔄 Tanstack Query
- 📡 Axios
- 🐾 PokeAPI
- 🌟 FuntranslationAPI
- 🧪 Vitest
- 🛠️ Mock Service Worker (MSW)

### Testing
PokemonTracker app was tested with Vitest and MSW, to run the test after installing the application dependencies:

```bash
npm run test
# or
yarn run test
```

## Thank You! 👏

Thank you for checking out the Pokemon Tracker app! We hope you enjoy exploring the world of Pokémon with our application. If you have any questions, feedback, or suggestions, feel free to reach out. Happy Pokémon hunting! 🚀
