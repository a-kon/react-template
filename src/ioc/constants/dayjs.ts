import {default as defaultDayJs} from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat'; // https://day.js.org/docs/en/plugin/custom-parse-format

defaultDayJs.extend(isBetween);
defaultDayJs.extend(customParseFormat);

export const dayjs = defaultDayJs;
