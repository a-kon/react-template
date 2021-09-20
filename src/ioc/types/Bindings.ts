import {History} from 'history';
import {AxiosStatic} from 'axios';
import {Api} from 'src/api';
import {AppConfig} from 'src/configs';

import {Analytics} from 'src/utils/analytics';
import {Names} from 'src/ioc/names';
import {ExampleStore} from 'src/stores/example/ExampleStore';
import {AnotherExampleStore} from 'src/stores/anotherExampleStore/AnotherExampleStore';

import {DayjsRoot} from './DayjsRoot';

export type Bindings = {
    [Names.analytics]: Analytics,
    [Names.api]: Api,
    [Names.axios]: AxiosStatic,
    [Names.history]: History,
    [Names.window]: Window,
    [Names.navigator]: Navigator,
    [Names.config]: AppConfig,
    [Names.localStorage]: Storage,
    [Names.dayjs]: DayjsRoot,

    [Names.example]: ExampleStore,
    [Names.example2]: AnotherExampleStore,
}
