## React template

### Dependencies
**Routing:** React Router

**State manager:** MobX

**Styling:** CSS Modules

**Testing:** Jest with TS support

**Bundling:** Webpack 5


### Structure
Everything that retated to the **general** application's view: styles, UI elements are placed in the `src/ui` directory.
```
src
└── ui
    ├── styles (styles)
    │   └── normalize.module.css
    └── components (UI components)
        └── Button
```

Main code placed in src directory. Code is splitted by domains with the following structure:
```
domain
├── assets
│   ├── icon.svg
│   └── picture.png
├── components
│   └── anotherDomain (the structure is recursive)
├── constants
│   └── domain.ts
├── hooks
│   └── domain.ts
├── tests
│   ├── constants.spec.ts
│   ├── hooks.spec.ts
│   └── utils.spec.ts
├── types
│   └── domain.ts
├── utils
│   └── domain.ts
├── domain.module.css (styles for the domain component)
└── Domain.tsx (the domain component)
```
Using the code of one domain code from another is prohibited. In case that you **really** need it you have to move common code to `common` directory. In general, access to the domain from external source must be to `Domain.tsx` or `index.ts` only. Anything that cannot be connected with some domain have to be placed in `src/utils`
