// import logo from './logo.svg';
import {Helmet} from "react-helmet";
import './App.css';
import Rout from './Route/Router';

function App() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>TREND HAVEN</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
      <Rout/>
    </>
  );
}

export default App;
