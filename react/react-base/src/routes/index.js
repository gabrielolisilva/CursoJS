import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;