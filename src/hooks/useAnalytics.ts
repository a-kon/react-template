import * as React from 'react';

import { AnalyticsContext } from 'src/utils/analytics/Provider';

export const useAnalytics = () => {
    const analytics = React.useContext(AnalyticsContext);

    if (!analytics) {
        throw new Error('No analytics found');
    }

    return analytics;
};
