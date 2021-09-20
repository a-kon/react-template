## React template

### How to
1. `npm i`
2. `touch .env`
3. `npm run dev`

### Dependencies
**Routing:** React Router

**State manager:** MobX

**Styling:** CSS Modules

**Testing:** Jest with TS support

**Bundling:** Webpack 5


### Structure
Everything related to the **general** application's view: styles, UI elements are placed in the `src/ui` directory.
```
src
└── ui
    ├── styles (styles)
    │   └── normalize.module.css
    └── components (UI components)
        └── Button
```

The main code placed in `src` directory. The code is split between domains with the following structure:
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
It is forbidden to use the code of one domain code from another. In case that you **really** need it, you have to move the common code to `common` directory. In general, access to the domain from an external source must be constrained to `Domain.tsx` or `index.ts` only.
Anything that cannot be connected with any domain has to be placed in `src/utils`.

There are some few more common directories in `src`:

```
src
├── common (as described above)
├── ioc (everything that connected with IOC)
│   ├── hooks (hooks for the IOC)
│   ├── selectors (high level IOC container's selectors)
│   ├── bindings.ts (IOC container and its bindings)
│   ├── names.ts (IOC container's keys)
│   └── Provider.tsx (IOCC's React Context & Provider)
├── stores (MobX's stores)
├── ui (as described above)
└── utils (common utils that are too abstract and cannot be connected with any domain)
```
