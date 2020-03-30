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
Building the project will use the generated css for the final build and run PurgeCSS on it to remove uneccessary classes. Build by running the following command
```bash
yarn run build
```
