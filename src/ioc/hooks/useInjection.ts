import * as React from 'react';
import { interfaces } from 'inversify';

import { InversifyContext } from 'src/ioc/provider';

export function useInjection<T>(
    identifier: interfaces.ServiceIdentifier<T>
): T {
    const { container } = React.useContext(InversifyContext);

    if (!container) {
        throw new Error('Container not found!');
    }

    return container.get<T>(identifier);
}
