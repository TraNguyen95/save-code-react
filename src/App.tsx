import './App.css';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/PageHome';

const PageTest = lazy(() => import('./pages/PageTest'));
const ThauNguyen = lazy(() => import('./pages/ReactThauNguyen'));
const ReactHookForm = lazy(() => import('./pages/ReactHookForm'));
const Lab = lazy(() => import('./pages/Lab'));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={`test-router`} element={<PageTest />} />
                <Route path={`react-thau-nguyen`} element={<ThauNguyen />} />
                <Route path={`react-hook-form`} element={<ReactHookForm />} />
                <Route path={`200-lab`} element={<Lab />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
