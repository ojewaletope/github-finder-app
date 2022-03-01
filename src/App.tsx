import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Alert } from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

import { AlertProvider, GithubProvider } from "./context";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto pb-12 px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
