import { makeObservable } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class AnotherExampleStore {
    constructor() {
        makeObservable(this, {});
    }
}
