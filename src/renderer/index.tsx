import { render } from 'react-dom';
import App from './App';

let tooGood = false;
if (tooGood) console.log('CTF{TOOGOOD}')

render(<App />, document.getElementById('root'));
