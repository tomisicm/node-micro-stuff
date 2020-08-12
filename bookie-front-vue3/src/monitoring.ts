import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

// @ts-ignore
export default function mountMonitoring(Application) {
  // GUIDES
  // https://know-thy-code.com/sentry-io-using-node-js/
  // https://www.andrewtamura.com/post/146595491342/best-practices-for-using-sentry-with-nodejs
  // https://medium.com/@suixo/configure-sentry-for-vue-js-project-6aa07efe2c80
  // https://github.com/getsentry/sentry-javascript/pull/2571
  // https://developpaper.com/sentry-for-front-end-error-collection-of-vue-project/
  // https://docs.sentry.io/error-reporting/quickstart/?platform=browser&_ga=2.13994995.570635162.1597163121-1320321864.1597163121
  // https://docs.sentry.io/clients/node/
  
  process.env.NODE_ENV === "production" && Sentry.init({
    dsn: 'https://714b5cbb268545f2a5a596f2257d21c7@o432825.ingest.sentry.io/5386880',
    integrations: [
      new Integrations.Vue({
        // @ts-ignore
        Application, // Vue
        attachProps: true,
        logErrors: true // will call original Vue's logError function as well
      })
    ]
  })
}
