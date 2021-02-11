// For property decorators
import 'reflect-metadata';
import * as React from 'react';
import reactDOM from 'react-dom';

// CSS variables
import 'src/ui/styles/variables.module.css';
import 'src/ui/styles/typography.module.css';
import { useAnalytics } from 'src/hooks/useAnalytics';

import { Layout } from './Layout';

export const App: React.FC = () => {
    const analytics = useAnalytics();

    React.useEffect(() => {
        analytics.track('App mounted');
    }, []);

    return <Layout />;
};

reactDOM.render(<App />, document.querySelector('#root'));
