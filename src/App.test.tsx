import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./components/hoc/AppContext";
import { server } from "./mocks/worker";

const query = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={query}>
      <AppProvider>{ui}</AppProvider>
    </QueryClientProvider>
  );
};

describe("App tests", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders the loading component initially', () => {
    renderWithClient(<App />);
    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });


  it('renders the Pokemon table and displays the data', async () => {
    renderWithClient(<App />);

    // Wait for the table to be rendered
    await waitFor(() => expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument());

    // Check if the table header is rendered
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Pokemon Name')).toBeInTheDocument();

    // Check if the Pokémon data is displayed in the table
    expect(screen.getByText("charmeleon")).toBeInTheDocument();
    expect(screen.getByText("charizard")).toBeInTheDocument();
  });

  it('renders only 10 pokemon data plus heading on the table', async () => {
    renderWithClient(<App />);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      // rows include header, so there should be 11 rows
      expect(rows).toHaveLength(11);
    });
  });


  it('filters table rows based on search input', async () => {
    renderWithClient(<App />);

    // Wait for the initial data to load
    await waitFor(() => expect(screen.getByRole('table')).toBeInTheDocument());

    const user = userEvent.setup()

    // Type into the search input field
    const searchInput = screen.getByTestId("search-input");
    user.type(searchInput, 'pidg');

    // Wait for the table to update with the filtered rows
    await waitFor(() => {

      expect(screen.getByText('pidgey')).toBeInTheDocument();
      expect(screen.getByText('pidgeotto')).toBeInTheDocument();
      expect(screen.getByText('pidgeot')).toBeInTheDocument();
    });

    // Ensure other rows are not present
    expect(screen.queryByText('raticate')).not.toBeInTheDocument();
    expect(screen.queryByText('weedle')).not.toBeInTheDocument();
  });


  it('loads subsequent pages when pagination is clicked', async () => {
    renderWithClient(<App />);

    // Wait for the initial data to load NavigateBeforeIcon
    await waitFor(() => expect(screen.getByRole('table')).toBeInTheDocument());

    // Wait for the pagination controls to appear
    await waitFor(() => expect(screen.getByTestId("NavigateNextIcon")).toBeInTheDocument());
    const user = userEvent.setup()
    // Click on the next page button
    const nextPageButton = screen.getByTestId("NavigateNextIcon");
    user.click(nextPageButton);

    // Wait for the table to update with the next page data
    await waitFor(() => expect(screen.getByText('beedrill')).toBeInTheDocument());
    expect(screen.queryByText('charmander')).not.toBeInTheDocument(); // Ensure previous page data is not present

    // Click on the previous page button
    const previousPageButton = screen.getByRole('button', { name: /previous/i });
    userEvent.click(previousPageButton);

    // Wait for the table to update with the previous page data
    await waitFor(() => expect(screen.getByText('charmander')).toBeInTheDocument());
    expect(screen.queryByText('beedrill')).not.toBeInTheDocument(); // Ensure next page data is not present
 
  });

});
