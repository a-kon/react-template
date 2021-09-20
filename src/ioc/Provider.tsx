import {Container} from 'inversify';
import * as React from 'react';

export const InversifyContext = React.createContext<{ container: Container | null }>({
    container: null,
});

type Props = {
    container: Container;
};

export const InjectionContainerProvider: React.FC<Props> = (props) => {
    const container = React.useMemo(() => ({container: props.container}), [props.container]);

    return (
        <InversifyContext.Provider value={container}>
            {props.children}
        </InversifyContext.Provider>
    );
};
