import { Chatarea } from './components/Chatarea';
import { Header } from './components/Header';
import { Inputform } from './components/Inputform';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Chatarea />
      <Inputform />
    </div>
  );
}

export default App;
