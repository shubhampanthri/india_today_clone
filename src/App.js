import "./styles.css";
import Allheader from "./components/Header/Allheader";
import Sidebar from "./components/Sidebar/Sidebar";
import Allcontents from "./components/contentsection/Allcontents";
import Footer from "./components/footer/footer";
export default function App() {
  return (
    <div className="App dark">
      <Allheader />
      <Sidebar />
      <Allcontents />
      <Footer />
    </div>
  );
}
