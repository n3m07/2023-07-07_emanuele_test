import { useState } from "react";
import "./App.css";
import Biografia from "./components/Biografia";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  const [sec, setSec] = useState();
  const skills = ["HTML", "CSS", "tailwind", "JS", "React"];
  const contacts = {
    address: "Via Leonardo da vinci 9, Vittorio Veneto - TV 31029",
    email: "emanuele.g.tino@gmail.com",
    pec: "emanuele.tino@pec.it",
    mobile: "+39/3713845202",
  };
  let counter = 0;

  function biographyHandler() {
    setSec(<Biografia />);
  }
  function skillsHandler() {
    setSec(<Skills key={counter + 1} skills={skills} />);
  }
  function contactsHandler() {
    setSec(
      <Contacts
        address={contacts.address}
        email={contacts.email}
        pec={contacts.pec}
        mobile={contacts.mobile}
      />
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-orange-400">
      <section className="w-[60%] h-[80vh] flex flex-col items-center justify-start bg-blue-300 rounded-2xl border-[5px] border-blue-700">
        <header className="w-[100%] h-2/6 flex justify-evenly items-center gap-[0.5rem] p-[1rem]">
          <button
            className="px-[0.5rem] bg-white rounded-lg border border-black "
            onClick={biographyHandler}
          >
            Biografia
          </button>
          <button
            className="px-[0.5rem] bg-white rounded-lg border border-black "
            onClick={skillsHandler}
          >
            Skills
          </button>
          <button
            className="px-[0.5rem] bg-white rounded-lg border border-black "
            onClick={contactsHandler}
          >
            Modulo Contatti
          </button>
        </header>
        <div className="w-[100%] h-4/6 flex justify-center items-start gap-[0.5rem] p-[1rem] flex-wrap">
          {sec}
        </div>
      </section>
    </div>
  );
}

export default App;
