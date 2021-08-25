
import './App.css';
import { Nav } from './components/navigation';
import { Head } from './components/Heading';
import {Chips} from './components/chips';
import { step1 } from './steps/step1';
import { step2 } from './steps/step2';
import { step3 } from './steps/step3';
import { step4 } from './steps/step4';
import { step5 } from './steps/step5';
import { step6 } from './steps/step6';

const App = () => {
  return (
    <div className="App">
      <div className='nav'>
        <Nav />
      </div>
      <step1 />
      
    </div>
  );
}

export default App;
