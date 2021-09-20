import {useInjection} from 'src/ioc/hooks/useInjection';
import {Names} from 'src/ioc/names';
import {Analytics} from 'src/utils/analytics';

export const useAnalytics = () => {
    const analytics = useInjection<Analytics>(Names.analytics);

    if (!analytics) {
        throw new Error('No analytics found');
    }

    return analytics;
};
