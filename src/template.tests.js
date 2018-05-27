import React from 'react';
import {expect} from 'chai';
import {createRenderer} from 'react-test-renderer/shallow';
import {Template} from './template';

export function test_pass(test) {
  test.ok(true);
  test.done();
}

export function test_async(test) {
  setTimeout(() => {
    test.ok(true);
    test.done();
  }, 10);
}

export function test_render_component(test) {
  const renderer = createRenderer();

  renderer.render(<Template />);
  const result = renderer.getRenderOutput();

  test.ok(expect(result.type).to.equal('div'));
  test.done();
}