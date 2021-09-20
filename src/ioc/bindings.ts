import {Container} from 'inversify';
import {History, createBrowserHistory} from 'history';
import axios, {AxiosStatic} from 'axios';

import {config, AppConfig} from 'src/configs';
import {Api} from 'src/api';
import {analytics, Analytics} from 'src/utils/analytics';
import {ExampleStore} from 'src/stores/example/ExampleStore';
import {AnotherExampleStore} from 'src/stores/anotherExampleStore/AnotherExampleStore';

import {DayjsRoot} from './types/DayjsRoot';
import {Names} from './names';
import {Bindings} from './types/Bindings';
import {dayjs} from './constants/dayjs';

interface Services {
    history: History
    window: Window
    navigator: Navigator
    config: AppConfig
    localStorage: Storage
    analytics: Analytics
    api: Api,
    axios: AxiosStatic,
    dayjs: DayjsRoot,
}

const createIOCC = (services: Services) => {
    const container = new Container();

    // services
    container.bind<Bindings[Names.analytics]>(Names.analytics).toConstantValue(services.analytics);
    container.bind<Bindings[Names.api]>(Names.api).toConstantValue(services.api);
    container.bind<Bindings[Names.axios]>(Names.axios).toConstantValue(services.axios);
    container.bind<Bindings[Names.config]>(Names.config).toConstantValue(services.config);
    container.bind<Bindings[Names.dayjs]>(Names.dayjs).toConstantValue(services.dayjs);
    container.bind<Bindings[Names.history]>(Names.history).toConstantValue(services.history);
    container.bind<Bindings[Names.localStorage]>(Names.localStorage).toConstantValue(services.localStorage);
    container.bind<Bindings[Names.navigator]>(Names.navigator).toConstantValue(services.navigator);
    container.bind<Bindings[Names.window]>(Names.window).toConstantValue(services.window);

    // stores
    container.bind<Bindings[Names.example]>(Names.example).to(ExampleStore).inSingletonScope();
    container.bind<Bindings[Names.example2]>(Names.example2).to(AnotherExampleStore).inSingletonScope();

    return container;
};

const getContainer = () => {
    switch (process.env.NODE_ENV) {
        case 'development': {
            const api = new Api(axios.create({url: 'https://example.com'}), axios);

            const services: Services = {
                window,
                history: createBrowserHistory(),
                localStorage,
                config,
                navigator,
                analytics,
                api,
                axios,
                dayjs,
            };
            const container = createIOCC(services);

            return container;
        }

        case 'production': {
            const api = new Api(axios.create({url: 'https://example.com'}), axios);

            const services: Services = {
                window,
                history: createBrowserHistory(),
                localStorage,
                config,
                navigator,
                analytics,
                api,
                axios,
                dayjs,
            };

            const container = createIOCC(services);

            return container;
        }

        default: {
        // TODO: handle this (INCREDIBLY WRONG) case
            console.error(`UNKNOWN NODE_ENV ${process.env.NODE_ENV}. UNABLE TO CREATE IOC CONTAINER.`);

            return {} as Container;
        }
    }
};

export const container = getContainer();
