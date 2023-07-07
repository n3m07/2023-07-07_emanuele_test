import { useState, useEffect } from "react";
import "./App.css";

/*Ex 1
Realizzare un'applicazione React che permette di mostrare le informazioni degli studenti in aula, ricavati da
questa struttura:
[
{id: 1, fullname: "mario rossi", avg: 6, gender: 'm'},
{id: 2, fullname: "luigi verdi", avg: 4, gender: 'm'},
{id: 3, fullname: "peach pink", avg: 8, gender: 'f'},
{id: 4, fullname: "wario rossi", avg: 9, gender: 'm'},
{id: 5, fullname: "daisy princess", avg: 10, gender: 'f'},
]
Inizialmente, mostrare tutti gli studenti. Per ogni studente mostrare nome, media voti e settare un colore di
sfondo alternato per maschi e femmine.
Abbiamo poi un campo input e un pulsante di ricerca, per la ricerca di studenti per nome.
Alla pressione del tasto, compariranno tutti gli studenti che hanno il nome digitato, oppure "nessuno
studente con questo nome".*/

const arrPeople = [
  { id: 1, fullname: "mario rossi", avg: 6, gender: "m" },
  { id: 2, fullname: "luigi verdi", avg: 4, gender: "m" },
  { id: 3, fullname: "peach pink", avg: 8, gender: "f" },
  { id: 4, fullname: "wario rossi", avg: 9, gender: "m" },
  { id: 5, fullname: "daisy princess", avg: 10, gender: "f" },
];

function App() {
  const [myArr, setMyArr] = useState();

  return (
    <div className="w-screen h-screen bg-pink-600 flex items-center justify-center ">
      <div className="w-[80%] h-[90vh] p-[1rem] gap-[0.5rem] flex flex-col justify-start items-center bg-pink-300 border border-black rounded-2xl ">
        <div className=" w-full h-1/6 flex justify-evenly items-center">
          <input
            type="text"
            className="p-[1rem] bg-white border border-black rounded-lg"
            placeholder="Search Stundent"
          />
          <button className="p-[1rem] bg-slate-300 border border-black rounded-lg ">
            Search
          </button>
        </div>
        <div>
          <Iterate />
        </div>
      </div>
    </div>
  );
}

function Iterate(props) {
  arrPeople.map((el) => {
    <div>{el.name}</div>;
    <div key={el.fullname}>
      <span>{el.fullname}</span>
      <span>{el.avg}</span>
      <span>{el.gender}</span>
    </div>;
  });
}

export default App;
