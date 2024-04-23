import { BrowserRouter, Router, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Router>
    </BrowserRouter>
  );
};
export default App;
