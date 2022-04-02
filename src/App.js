import GlobalStyles from "./assets/styles/global.style";
import AvailableCoin from "./components/AvailableCoin/AvailableCoin";
import FoodBeverage from "./components/FoodBeverage/FoodBeverage";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Petrol from "./components/Petrol/Petrol";
import RentalRebate from "./components/RentalRebate/RentalRebate";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Home />
      <Petrol />
      <RentalRebate />
      <FoodBeverage />
      <Footer />
    </div>
  );
}

export default App;
