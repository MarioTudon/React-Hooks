import React from 'react';
import { createRoot } from 'react-dom/client';
import Users from './users.jsx';

const root = createRoot(document.getElementById('root'));

function App(){
    return(
        <Users />
    )
}

root.render(<App />);