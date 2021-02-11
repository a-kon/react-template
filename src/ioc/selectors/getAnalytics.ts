import { Analytics } from 'src/utils/analytics';

import { container } from '../bindings';
import { names } from '../names';

export const getAnalytics = () => container.get<Analytics>(names.analytics);
