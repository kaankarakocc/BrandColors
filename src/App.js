import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Provider from './contexts/MainContexts';
import Copied from './components/Copied';
import Collections from './components/Collections';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

      <Provider>
        <Copied />
        <Sidebar />
        <Routes>
          <Route path="/collections/:slugs" element={<Collections />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </Provider>

    </>
  );
}

export default App;
