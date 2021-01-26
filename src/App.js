import './App.css';
import Quote from './quote';

function App() {
  return (
    <div class="section">
      <div class="container">
        <h1 class="title" style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Tronaldihno
        </h1>
        <Quote />
      </div>
    </div>
  );
}

export default App;
