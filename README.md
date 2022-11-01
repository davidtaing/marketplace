# This is a sister project the [Code.Sydney Migram Project](https://github.com/codesydney/migram-frontend).

I started this project so that I could iterate fast, experiment fast and learn fast. My intention is to take the ideas and techniques from this project and bring those into the Migram project.

## Getting Started

First, you will need to setup the enviornment variables. 

- Copy the enviroment variables in the `env.local.example` file into a `env.local` file.
- To run the tests, you will need to do the same with the `env.test.local.example` file into a `env.test.local` file.

### To install dependencies
`npm i` or `npm install`

### To run the project
`npm run dev`

### To run tests
`npm run test`

Make sure you have Jest installed globally via `npm i jest -g`

## Built With
- TypeScript
- Next.js
- React
- Mock Service Worker
- TailwindCSS
- Jest and React Testing Library
- Test-Driven Development
- Continous Integration via CircleCI

## Cool Features & Techniques
- MockServiceWorker handlers that will intercept requests made to backend services.
- [FeatureFlag that will disable features or pages in production enviroments.](https://github.com/davidtaing/marketplace/blob/main/src/features/FeatureFlag/index.tsx)
- [Testing Next.Router redirections in Jest](https://github.com/davidtaing/marketplace/blob/6ed7012bf210dbf03e04acc21153c992df4c3128/src/test/pages/listings.test.tsx#L34-L77)
- [TailwindCSS Button Variants](https://github.com/davidtaing/marketplace/blob/main/src/components/Button.tsx)
