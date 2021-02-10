import React from 'react';

interface IProps {
    only?: string;
    fallback: React.ComponentType<{ error: Error }>;
    children: React.ReactChild;
}

interface IState {
    error: Error | null;
}

export class ErrorWrap extends React.Component<IProps, IState> {
    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    state: IState = { error: null };

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // TODO: use Sentry or smth
        // eslint-disable-next-line
        console.log('Error!', error, info);
    }

    private catchError(error: Error) {
        return !this.props.only || this.props.only === error.name;
    }

    render() {
        const { error } = this.state;
        const { fallback: Fallback, children } = this.props;

        return error && this.catchError(error) ? (
            <Fallback error={error} />
        ) : (
            children
        );
    }
}
