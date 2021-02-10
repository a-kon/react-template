// For property decorators
import 'reflect-metadata';

import * as React from 'react';
import reactDOM from 'react-dom';
import 'src/ui/styles/variables.module.css';
import 'src/ui/styles/typography.module.css';

export default function App() {
    return (
        <div>
            <h1>Hi there!</h1>
        </div>
    );
}

reactDOM.render(<App />, document.querySelector('#root'));
