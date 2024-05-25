
import { App } from 'components/App/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter basename='films-react'>
    <App></App>
</BrowserRouter>
);
