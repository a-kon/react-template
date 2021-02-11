import { Container } from 'inversify';

import { ExampleStore } from 'src/stores/example/ExampleStore';
import { AnotherExampleStore } from 'src/stores/anotherExampleStore/AnotherExampleStore';
import { analytics, Analytics } from 'src/utils/analytics';

import { names } from './names';

export const container = new Container();

container.bind<Analytics>(names.analytics).toConstantValue(analytics);

container
    .bind<ExampleStore>(names.example)
    .to(ExampleStore)
    .inSingletonScope();

container
    .bind<AnotherExampleStore>(names.example2)
    .to(ExampleStore)
    .inSingletonScope();
