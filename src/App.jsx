import { Outlet } from "react-router-dom";
import "./App.css";
import NavIcon from "./components/nav-icon/nav-icon.jsx";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Widget from "./components/widget/widget.jsx";
function App() {
  return (
    <>
      <SignedIn>
        <div className="App">
          <div className="sidebar">
            <NavIcon route="home" />
            <NavIcon route="settings" />
            <NavIcon route="security" />
            <NavIcon route="analysis" />
          </div>
          <div className="widgets">
           <Widget />
          </div>
          <Outlet />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;
