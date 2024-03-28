import { useState } from "react";
import "./App.css";
import Bcard from "./components/Bcard";
function App(props) {
  return (
    <>
      <div>
        <Bcard
          name="Tushar Kumar Shah"
          description="Software Engineer"
          interests={["Coding", "Reading", "Badminton"]}
          linkedin="https://www.linkedin.com/in/tushar21shah/"
          github="https://github.com/tusharshah21"
          otherSocialMedia={{
            label: "Instagram",
            link: "https://www.instagram.com/shahtusharkumar",
          }}
        />
      </div>
    </>
  );
}

export default App;
