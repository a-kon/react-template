import { Container } from 'inversify';

import { ExampleStore } from './example/ExampleStore';
import { di } from './di';

export const container = new Container();

container
    .bind<ExampleStore>(di.example)
    .to(ExampleStore)
    .inSingletonScope();
