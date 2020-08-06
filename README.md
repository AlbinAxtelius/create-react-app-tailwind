# Create react app with tailwind

Template for using tailwindcss with create-react-app.

## Installation

Navigate into the root directory and run.

```bash
yarn install
```
Then start the project by running 
```bash
yarn start
```
## Usage 

### Compiling styles
The styles will be automatically generated each time you run the project. But if you want to build styles while project is running you can run the following command
```bash
yarn run build:styles
```

### Building project

> Remember to change `purge.enabled` to true before building inside of `tailwind.config.js`.

```typescript
module.exports = {
  purge: {
    enabled: false, //! Set to true when building for deployment
    [...]
  },
  [...]
};
```

Build by running the following command
```bash
yarn run build
```
