# carbon-test

This is a test of the [Carbon Design System](https://www.carbondesignsystem.com/).


## Usage Modes

* Prebuilt distribution exist, usable from vanilla JS
* Language wrappers allow easy embedding in React / other frameworks
* Modular: Components can be cherry-picked or taken as a whole
* Styles (SCSS) and components are separated
* Base layer: HTML templates + annotations + JavaScript wrapper / API on top

## Things to Learn

* HTML markup (no hints)
* JS API (no hints, e.g. type bindings)


## Bundle Size

Bundling the modal only component, including styles:

#### DEV (unminified)

```
568K    dist/src.e31bb0bc.js
24K     dist/src.e31bb0bc.css
```


#### PROD (minified)

```
252K    dist/src.361b0416.js
20K     dist/src.2fb605ef.css
```


## Run and Build

```
# start dev server
npm start

# build app
npm run build
```