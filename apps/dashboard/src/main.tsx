import { App } from '@/App';
import '@/assets/css/index.css';
import { render } from 'preact';

render(<App />, document.getElementById('app') as HTMLElement);
