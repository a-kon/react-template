import { Container, interfaces } from 'inversify';
import * as React from 'react';

const InversifyContext = React.createContext<{ container: Container | null }>({
    container: null,
});

type Props = {
    container: Container;
};

export const InjectionContainerProvider: React.FC<Props> = (props) => {
    const container = React.useMemo(() => ({ container: props.container }), [
        props.container,
    ]);

    return (
        <InversifyContext.Provider value={container}>
            {props.children}
        </InversifyContext.Provider>
    );
};

export function useInjection<T>(
    identifier: interfaces.ServiceIdentifier<T>
): T {
    const { container } = React.useContext(InversifyContext);

    if (!container) {
        throw new Error();
    }

    return container.get<T>(identifier);
}
