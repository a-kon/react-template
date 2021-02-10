import { makeObservable } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class ExampleStore {
    constructor() {
        makeObservable(this, {});
    }
}
