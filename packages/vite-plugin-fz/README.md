### What is VITE-PLUGIN-FZ

Fz means flexible size, we create a new unit in css, and you can think it's a unit like px, but it changes whenever your viewport change.

### Install

Use npm or yarn install vite-plugin-fz

```bash
yarn add vite-plugin-fz -D
```

vite.config.ts

```ts
import { rem } from 'vite-plugin-fz';

export default defineConfig({
    // ...
    plugins: [
        // ...,
        rem({ base: 1920, baseHeight: 1080 }),
    ],
    // ...,
});
```

If you are using auto-import, you can add preset to it

```ts
import { remPreset } from 'vite-plugin-fz';

export default defineConfig({
    // ...
    plugins: [
        // ...
        AutoImport({
            imports: [
                // ...
                remPreset,
                // ...
            ],
        }),
    ],
    // ...,
});
```

### Usage with css

```css
a {
    font-size: 100fz;
    height: 100fh;
}
```

### Usage with script

```ts
import { fz, fh } from 'vite-plugin-fz';

fz(20);
fh(20);

fz`20`;
fh`20`;
```
