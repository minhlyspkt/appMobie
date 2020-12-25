import { ApplicationInsights, SeverityLevel } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'
import { globalHistory } from '@reach/router'

const appInsightUIMapping = {
  None: 0,
  Critical: 0,
  Error: 1,
  Debug: 2,
  Information: 2,
  Trace: 2,
  Warning: 2
}

const reactPlugin = new ReactPlugin()
const ai = new ApplicationInsights({
  config: {
    instrumentationKey: `${window.instrumentationKey}`,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: globalHistory }
    },
    loggingLevelTelemetry: appInsightUIMapping[`${window.logLevel}`] ? appInsightUIMapping[`${window.logLevel}`] : 0,
    disableFetchTracking: false,
    enableAutoRouteTracking: true
  }
})
ai.loadAppInsights()

ai.appInsights.addTelemetryInitializer((envelope) => {
  envelope.tags['ai.cloud.role'] = `${window.roleNameUI}`
  envelope.tags["ai.cloud.roleInstance"] = `${window.roleNameUI}_Instance`
  envelope.data.timeNow = Date(Date.now()).toString()
})

export const { appInsights } = ai

const logs = {
  trackEvent: function (results) {
    ai.appInsights.trackEvent(results)
  },
  trackPageView: function (results) {
    ai.appInsights.trackPageView(results)
  },
  trackPageViewPerformance: function (results) {
    ai.appInsights.trackPageViewPerformance(results)
  },
  trackException: function (results) {
    ai.appInsights.trackException(results)
  },
  trackTrace: function (results) {
    ai.appInsights.trackTrace(results)
  },
  trackMetric: function (results) {
    ai.appInsights.trackMetric(results)
  },
  trackPageVisitTime: function (results) {
    ai.appInsights.trackPageVisitTime(results)
  },
  startTrackPage: function (results) {
    ai.appInsights.startTrackPage(results)
  },
  stopTrackPage: function (name, url, results) {
    ai.appInsights.stopTrackPage(name, url, results)
  },
  startTrackEvent: function (results) {
    ai.appInsights.startTrackEvent(results)
  },
  stopTrackEvent: function (name, results) {
    ai.appInsights.stopTrackEvent(name, results)
  },
  flush: function () {
    ai.appInsights.flush()
  },
  addTelemetryInitializerTags: function (results) {
    if (results) {
      ai.appInsights.addTelemetryInitializer((envelope) => {
        for (const key in results) {
          envelope.tags[key] = results[key]
        }
      })
    }
  }
}

export { logs, ai }

export const logLevels = SeverityLevel

export default (Component) => withAITracking(reactPlugin, Component)

