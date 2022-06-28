import logo from "./logo.svg";
import "./App.css";
import Index from "./components/Index";
import Article from "./components/Article";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Index />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Count />
        <Article title="Artikel 1" body="Body 1" createdAt={new Date()} />
        <Article
          title="Artikel 2"
          body="Body 2"
          createdAt={new Date("2022-06-24")}
        />
        <Article
          title="Artikel 3"
          body="Body 3"
          createdAt={new Date("2022-06-25")}
        />

        <Article
          title="Artikel 4"
          body="Body 4"
          createdAt={new Date("2022-06-26")}
        />
        <Article
          title="Artikel 5"
          body="Body 5"
          createdAt={new Date("2022-06-27")}
        />
      </body>
    </div>
  );
}

export default App;
