import { componentToQoot } from '../generators/qoot';
import { parseJsx } from '../parsers/jsx';

const basic = require('./data/basic.raw');
const submitButtonBlock = require('./data/blocks/submit-button.raw');
const inputBlock = require('./data/blocks/input.raw');
const selectBlock = require('./data/blocks/select.raw');
const formBlock = require('./data/blocks/form.raw');
const button = require('./data/blocks/button.raw');
const textarea = require('./data/blocks/textarea.raw');
const img = require('./data/blocks/img.raw');
const video = require('./data/blocks/video.raw');
const section = require('./data/blocks/section.raw');
const text = require('./data/blocks/text.raw');
const rawText = require('./data/blocks/raw-text.raw');
const customCode = require('./data/blocks/custom-code.raw');
const stamped = require('./data/blocks/stamped-io.raw');
const image = require('./data/blocks/image.raw');
const columns = require('./data/blocks/columns.raw');

describe('Qoot', () => {
  test('Basic', () => {
    const json = parseJsx(basic);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Input block', () => {
    const json = parseJsx(inputBlock);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Submit button block', () => {
    const json = parseJsx(submitButtonBlock);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Select block', () => {
    const json = parseJsx(selectBlock);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test.skip('Form block', () => {
    const json = parseJsx(formBlock);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Button', () => {
    const json = parseJsx(button);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Textarea', () => {
    const json = parseJsx(textarea);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Img', () => {
    const json = parseJsx(img);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Video', () => {
    const json = parseJsx(video);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Section', () => {
    const json = parseJsx(section);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Text', () => {
    const json = parseJsx(text);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('RawText', () => {
    const json = parseJsx(rawText);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Stamped.io', () => {
    const json = parseJsx(stamped);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('CustomCode', () => {
    const json = parseJsx(customCode);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Embed', () => {
    const json = parseJsx(customCode);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test('Image', () => {
    const json = parseJsx(image);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });

  test.skip('Columns', () => {
    const json = parseJsx(columns);
    const output = componentToQoot(json);
    expect(output).toMatchSnapshot();
  });
});