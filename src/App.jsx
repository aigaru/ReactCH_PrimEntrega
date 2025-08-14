import Header from "./componets/layout/header/Header";
import Footer from "./componets/layout/Footer/Footer";
import { CountCart } from "./componets/common/countCart/countCart";
import { Home } from "./componets/pages/home/Home";

function App() {

  return (
      <div>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
  );
}

export default App
