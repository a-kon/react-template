import {AxiosInstance, AxiosStatic, CancelTokenSource} from 'axios';
import {injectable, inject} from 'inversify';

import {Names} from 'src/ioc/names';

@injectable()
export class Api {
    cancellation: Partial<Record<string, CancelTokenSource>> = {};

    constructor(
        @inject(Names.api) private api: AxiosInstance,
        @inject(Names.axios) private axios: AxiosStatic,
    ) {
        this.api = api;
        this.axios = axios;
    }
}
