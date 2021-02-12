import * as React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import { history } from 'src/utils/history';
import makeAsync from 'src/utils/makeAsync';
import { container } from 'src/ioc/bindings';
import { InjectionContainerProvider } from 'src/ioc/Provider';

const Example = makeAsync(() => import('src/example/components/example/Example'));

export const Layout: React.FC = () => (
    <BrowserRouter>
        <InjectionContainerProvider container={container}>
            <Router history={history}>
                <React.Suspense fallback={null}>
                    <Switch>
                        <Route path="/" exact component={Example} />
                    </Switch>
                </React.Suspense>
            </Router>
        </InjectionContainerProvider>
    </BrowserRouter>
);
