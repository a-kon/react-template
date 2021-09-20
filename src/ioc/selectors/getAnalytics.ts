import {Analytics} from 'src/utils/analytics';

import {container} from '../bindings';
import {Names} from '../names';

export const getAnalytics = () => container.get<Analytics>(Names.analytics);
