import { getNextClassName, getPreviousClassName } from '../../../src/utils/animationNextPrevious';

describe('Function animationNextPrevius', () => {
  it('getNextClassName return class corretly', () => {
    const animationMock = {
      etapa: 1,
      setAnimationStep1: jest.fn(),
      setAnimationStep2: jest.fn(),
      setAnimationStep3: jest.fn()
    };

    getNextClassName(animationMock);

    expect(animationMock.setAnimationStep1).toHaveBeenCalledWith('animacao-sair');
    expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('animacao-entrar');
    setTimeout(() => {
      expect(animationMock.setAnimationStep1).toHaveBeenCalledWith('');
    }, 601);
  });

  it('getNextClassName return class corretly', () => {
    const animationMock = {
      etapa: 2,
      setAnimationStep1: jest.fn(),
      setAnimationStep2: jest.fn(),
      setAnimationStep3: jest.fn()
    };

    getNextClassName(animationMock);

    expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('animacao-sair');
    expect(animationMock.setAnimationStep3).toHaveBeenCalledWith('animacao-entrar');
    setTimeout(() => {
      expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('');
    }, 601);
  });
});

describe('Function getPreviousClassName', () => {
  it('getPreviousClassName return class corretly', () => {
    const animationMock = {
      etapa: 2,
      setAnimationStep1: jest.fn(),
      setAnimationStep2: jest.fn(),
      setAnimationStep3: jest.fn()
    };

    getPreviousClassName(animationMock);

    expect(animationMock.setAnimationStep1).toHaveBeenCalledWith('animacao-voltar-entrar');
    expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('animacao-voltar-sair');
    setTimeout(() => {
      expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('');
    }, 601);
  });

  it('getNextClassName return class corretly', () => {
    const animationMock = {
      etapa: 3,
      setAnimationStep1: jest.fn(),
      setAnimationStep2: jest.fn(),
      setAnimationStep3: jest.fn()
    };

    getPreviousClassName(animationMock);

    expect(animationMock.setAnimationStep2).toHaveBeenCalledWith('animacao-voltar-entrar');
    expect(animationMock.setAnimationStep3).toHaveBeenCalledWith('animacao-voltar-sair');
    setTimeout(() => {
      expect(animationMock.setAnimationStep3).toHaveBeenCalledWith('');
    }, 601);
  });
});
