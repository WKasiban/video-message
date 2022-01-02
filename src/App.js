import './App.css';
import Header  from './components/Header';
import Content from './components/Content';
import RecordView from './components/RecordView';
import VideoRecord from './components/VideoRecord';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Content />
        <VideoRecord />
        <RecordView />
    </div>
  );
}

export default App;
