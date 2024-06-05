import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./components/hoc/AppContext";
import PokemonList from "./components/PokemonList";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <AppProvider>
        <HeroSection />
        <PokemonList />
        <Footer />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
