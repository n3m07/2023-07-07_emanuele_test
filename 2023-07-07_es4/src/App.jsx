import { useState } from "react";
import "./App.css";
import autoprefixer from "autoprefixer";
/*Ex 2
Creare un array di 8 oggetti a piacere che rappresentano libri (titolo, autore, immagineCopertina, prezzo),
con almeno 2 libri di 2 autori identici, e 2 libri con titolo identico ma autori differenti.
Il componente Header mostra il titolo dell'app, il componente Footer i copyright.
Il componente Main mostra la logica dell'applicazione: abbiamo un campo di input per digitare il titolo e
uno per digitare l'autore, e un pulsante di ricerca. La ricerca mostra i risultati del match di almeno uno dei
due criteri di ricerca, oppure "nessun libro trovato".
Inizialmente la lista di libri in output è vuota, alla produzione delle ricerche vengono mostrate tutte le info
dei libri corrispondenti. Usare la strategia preferita per mostrare le immagini di copertina.*/

const myBooks = [
  {
    titolo: "book AB",
    autore: "author A",
    immgagineCopertina:
      "https://binaries.templates.cdn.office.net/support/templates/it-it/lt22301254_quantized.png",
    prezzo: "euro 17",
  },
  {
    titolo: "book AB",
    autore: "author B",
    immgagineCopertina:
      "https://blogs.youcanprint.it/wp-content/uploads/2021/01/M.-libro-Scurati.jpg",
    prezzo: "euro 18",
  },
  {
    titolo: "book C",
    autore: "author CD",
    immgagineCopertina:
      "https://blogs.youcanprint.it/wp-content/uploads/2022/05/61xSNpivMML.jpeg",
    prezzo: "euro 15",
  },
  {
    titolo: "book D",
    autore: "author CD",
    immgagineCopertina:
      "https://www.illibraio.it/wp-content/uploads/2020/11/copertina-la-solitudine-dei-numeri-primi.jpg",
    prezzo: "euro 19",
  },
  {
    titolo: "book E",
    autore: "author E",
    immgagineCopertina:
      "https://m.media-amazon.com/images/I/91QnSYpuWzL._AC_UF1000,1000_QL80_.jpg",
    prezzo: "euro 14",
  },
  {
    titolo: "book F",
    autore: "author F",
    immgagineCopertina:
      "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&crop=false&fm=png&w=600&h=600",
    prezzo: "euro 13",
  },
  {
    titolo: "book G",
    autore: "author G",
    immgagineCopertina:
      "data:image/jpeg;base64,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",
    prezzo: "euro 17",
  },
  {
    titolo: "book H",
    autore: "author H",
    immgagineCopertina:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyeV36IH48J3QQpOX9LuDoeXDEoBlFaMueww&usqp=CAU",
    prezzo: "euro 16",
  },
];

function App() {
  const [iptTitle, setIptTitle] = useState();

  return (
    <div className="flex flex-col justify-center items-center bg-blue-300 w-screen h-screen">
      <div className="flex flex-col justify-evenly items-center p-[1rem] w-[80%] h-[90vh] gap-[1rem] ">
        <header className="text-3xl justify-center items-start flex font-bold w-full h-1/6">
          Your Book Ideas
        </header>
        <main className=" bg-blue-500 border-[3px]  border-blue-700 p-[0.5rem] gap-[1rem] rounded-xl flex flex-col justify-center items-center w-full h-4/6">
          <input
            id="iptTitle"
            type="text"
            placeholder="title"
            className="p-[0.5rem] rounded-lg border border-blue-700"
          />
          <input
            type="text"
            placeholder="author"
            className="p-[0.5rem] rounded-lg border border-blue-700"
          />
          <button className="bg-slate-400 px-[0.5rem] border border-slate-700 rounded-lg">
            Search
          </button>
          <Display iptTitle={} />
        </main>
        <footer className="text-sm flex items-end justify-center w-full h-1/6">
          <div>
            <b>Copyright:</b> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusamus unde tempore facere odio exercitationem
            eveniet aperiam modi optio rem ab dolorem, quasi quo. Magni aliquid
            tempora laudantium vero a nesciunt.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

function Display(props) {
  let result = "";
  for (let i = 0; i < myBooks.length; i++) {
    if (myBooks[i].title == props.iptTitle.value) {
      return result;
    }
  }
  console.log(result);
  return <span>{result}</span>;
}
