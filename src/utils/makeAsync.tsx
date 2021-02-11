import React, {
    ComponentType,
    PropsWithRef,
    PropsWithChildren,
    Suspense,
    lazy,
} from 'react';

import {ErrorWrap} from './components/ErrorWrap';

const TEMPORARYErrorComponent = () => <h1>Unexpected error has occured! Refresh the page, please.</h1>;

function makeAsync<T = {}>(
    importStatement: () => Promise<{ default: ComponentType<T> }>,
    fallback: React.ReactNode = null
) {
    const Component = lazy(importStatement);

    function AsyncWrapper(
        props: JSX.IntrinsicAttributes & PropsWithRef<PropsWithChildren<T>>
    ) {
        return (
            <ErrorWrap only="ChunkLoadError" fallback={TEMPORARYErrorComponent}>
                <Suspense fallback={fallback}>
                    <Component {...props} />
                </Suspense>
            </ErrorWrap>
        );
    }

    AsyncWrapper.preload = importStatement;

    return AsyncWrapper;
}

export default makeAsync;
