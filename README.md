# PokémonTracker

**Welcome to PokémonTracker**, your ultimate companion for all things Pokémon!<br>
Discover, catch, and train Pokémon, explore their abilities, and embark on exciting adventures in the Pokémon world.<br>
Start your journey now!



![PokémonTracker Logo](public/assets/pokemon.png)

## Features

- ⭐ Search and learn about your favorite Pokémon
- ✨ Explore Pokémon abilities and details
- 🚀 Train and level up your Pokémon team
- ✅ Enjoy a beautiful and intuitive user interface

## How to Run

Visit [PokemonTracker Website](https://pokemontracker.vercel.app) Or
Follow these steps to run PokéTracker locally on your machine:

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

# Project Structure

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
│   ├── index.tsx           # Entry point of the application
│   └── ...                 # Other folders and files
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
