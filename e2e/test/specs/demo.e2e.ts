/// <reference types="webdriverio/async" />
import fs from 'fs';

describe('Launch app and check element', () => {
  it('should find the element by accessibility id and save screenshot', async () => {
    await driver.pause(5000);

    const element = await $(`~login-button`);
    const isDisplayed = await element.isDisplayed();

    if (isDisplayed) {
      console.log('✅ El botón está visible');
    } else {
      console.log('❌ El botón no se encontró');
    }

    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync('check-element.png', screenshot, 'base64');
    console.log('📸 Captura guardada como check-element.png');
  });
});