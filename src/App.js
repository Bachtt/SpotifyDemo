import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Nav from "./components/Nav";
import Playing from "./components/Playing";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
function App() {
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs }}>
        <Nav />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
