import './App.css';
import etsy from './etsy.json';

interface Data {
  data: string;
};

function App() {
  let data: string = `${etsy}`;
  let meetup = JSON.parse(data);
  return (
    <div>

    </div>
  );
}

export default App;
