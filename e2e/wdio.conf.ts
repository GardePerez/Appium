import { Config } from '@wdio/types'

export const config: Config = {
  runner: 'local',
  specs: ['/Users/gardenia.perez/Documents/e2e/test/specs/demo.e2e.ts'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': "iPhone",
    'appium:platformVersion': '16.3.1',
    'appium:automationName': 'XCUITest',
    'appium:udid': '70931868-191D-4317-A2B7-5FB79D72BAA2',
    'appium:noReset': true,
    'appium:bundleId': 'com.hoopstars.app',
    'appium:xcodeOrgId': '4F7QBMC3AU',
    'appium:xcodeSigningId': 'iPhone Developer',
    'appium:newCommandTimeout': 300,
    'appium:showXcodeLog': true
  }],

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
