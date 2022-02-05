import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const callApi = async () => {
    const res = await fetch('/api/quotes');
    const data = await res.json();
    console.log(data);
};

function App() {
    return (
        <div className="App">
            <Navbar />
            <Quote />
        </div>
    );
}

export default App;
