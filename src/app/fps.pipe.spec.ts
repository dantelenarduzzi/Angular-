import { FPSPipe } from './fps.pipe';

describe('FPSPipe', () => {
  it('create an instance', () => {
    const pipe = new FPSPipe();
    expect(pipe).toBeTruthy();
  });
});
