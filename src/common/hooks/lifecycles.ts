import {useEffect, useRef} from 'react';

export function useComponentWillUnmount(func: () => void) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => func, []);
}

export function useComponentDidMount(callback: React.EffectCallback) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, []);
}

export function useIsMounted() {
    const didMount = useRef(false);

    useEffect(() => {
        didMount.current = true;
    }, []);

    return didMount.current;
}
