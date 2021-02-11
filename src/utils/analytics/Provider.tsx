import * as React from 'react';

import { analytics } from './analytics';

export const AnalyticsContext = React.createContext<typeof analytics>(analytics);

export const AnalyticsProvider: React.FC = ({ children }) => (
    <AnalyticsContext.Provider value={analytics}>
        {children}
    </AnalyticsContext.Provider>
);
