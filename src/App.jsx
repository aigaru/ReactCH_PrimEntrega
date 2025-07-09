import Header from "./componets/header/Header";
import Footer from "./componets/Footer/Footer";
import ItemListContainer from "./componets/itemlistcontainer/ItemListContainer";

function App() {

  return (
      <div>
        <Header />
        <main>
          <ItemListContainer />
        </main>
        <Footer />
      </div>
  );
}

export default App
