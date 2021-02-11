import { Container } from 'inversify';

import { ExampleStore } from './example/ExampleStore';
import { AnotherExampleStore } from './anotherExampleStore/AnotherExampleStore';
import { di } from './di';

export const container = new Container();

container
    .bind<ExampleStore>(di.example)
    .to(ExampleStore)
    .inSingletonScope();

container
    .bind<AnotherExampleStore>(di.example2)
    .to(ExampleStore)
    .inSingletonScope();
