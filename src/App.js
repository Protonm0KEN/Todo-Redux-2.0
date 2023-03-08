import HeaderNav from "./components/HeaderNav";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="App">
        <Modal />
        <HeaderNav />
        <Main />
      </div>
    </>
  );
}

export default App;
