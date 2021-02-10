// For property decorators
import 'reflect-metadata';
import * as React from 'react';
import reactDOM from 'react-dom';

// CSS variables
import 'src/ui/styles/variables.module.css';
import 'src/ui/styles/typography.module.css';
import { analytics } from 'src/utils/analytics';

import { Layout } from './Layout';

export const App: React.FC = () => {
    React.useEffect(() => {
        analytics.track('App mounted');
    }, []);

    return <Layout />;
};

reactDOM.render(<App />, document.querySelector('#root'));
