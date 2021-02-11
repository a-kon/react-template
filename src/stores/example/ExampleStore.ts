import { makeObservable } from 'mobx';
import { injectable, inject } from 'inversify';

import { AnotherExampleStore } from 'src/stores/anotherExampleStore/AnotherExampleStore';

@injectable()
export class ExampleStore {
    constructor(
        @inject(AnotherExampleStore)
        private readonly anotherStore: AnotherExampleStore,
    ) {
        makeObservable(this, {});
    }
}
