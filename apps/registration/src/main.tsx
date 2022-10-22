import { App } from '@/App';
import '@/assets/css/index.css';
import '@/assets/css/animation.css';
import { render } from 'preact';

render(<App />, document.getElementById('app') as HTMLElement);
