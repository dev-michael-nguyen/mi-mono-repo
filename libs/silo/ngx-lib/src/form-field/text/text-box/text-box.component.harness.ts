import { ComponentHarness } from '@angular/cdk/testing';

export class SiloTextBoxComponentHarness extends ComponentHarness {
  static hostSelector = 'silo-text-box';
  protected getTextBoxElement = this.locatorFor('.silo-text-box');
  protected getLabelElement = this.locatorFor('.silo-label');
  protected getInputElement = this.locatorFor('textarea');
  protected getMatHintElement = this.locatorFor('mat-hint');

  async getLabelText() {
    const labelElement = await this.getLabelElement();
    return labelElement.text();
  }

  async getLabelId() {
    const labelElement = await this.getLabelElement();
    return labelElement.getAttribute('id');
  }

  async getPlaceholder() {
    const textAreaElement = await this.getInputElement();
    return textAreaElement.getAttribute('placeholder');
  }

  async getHint() {
    const matHintElement = await this.getMatHintElement();
    return matHintElement.text();
  }

  async isReadOnly() {
    const textAreaElement = await this.getInputElement();
    return (await textAreaElement.getAttribute('readonly')) == 'true';
  }

  async setInputValue(value: string) {
    const textAreaElement = await this.getInputElement();
    textAreaElement.setInputValue(value);
  }

  async hasError() {
    const textBoxElement = await this.getTextBoxElement();
    const hasError = await textBoxElement.hasClass('silo-text-box--has-error');
    return hasError;
  }
}
