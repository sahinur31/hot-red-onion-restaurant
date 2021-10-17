import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import './Bootstrap/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import Checkout from './Pages/Checkout/Checkout';
import FoodDetails from './Pages/Home/FoodDetails/FoodDetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/SignIn/SignIn';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/checkout">
              <Checkout />
            </PrivateRoute>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/details/:id">
              <FoodDetails />
            </Route> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
