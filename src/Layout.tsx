import * as React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import { history } from 'src/utility/history';
import makeAsync from 'src/utility/makeAsync';
import { container } from 'src/stores/store';
import { InjectionContainerProvider } from 'src/stores/ioc';
import { AnalyticsProvider } from 'src/utils/analytics/Provider';

const Example = makeAsync(() => import('src/example/components/example/Example'));

export const Layout: React.FC = () => (
    <BrowserRouter>
        <AnalyticsProvider>
            <InjectionContainerProvider container={container}>
                <Router history={history}>
                    <React.Suspense fallback={null}>
                        <Switch>
                            <Route path="/" exact component={Example} />
                        </Switch>
                    </React.Suspense>
                </Router>
            </InjectionContainerProvider>
        </AnalyticsProvider>
    </BrowserRouter>
);
