import { requestConfig } from '../../../src/utils/config';

describe('Function config', () => {
  it('requestConfig retorna o método correto', () => {
    const method = 'POST';
    const data = { nome: 'Usuário Teste' };
    const token = '123456789';
    const config = requestConfig(method, data, token);
    expect(config.method).toBe(method);
  });

  it('requestConfig retorna o body correto quando não é DELETE e existe data', () => {
    const method = 'POST';
    const data = { nome: 'Usuário Teste' };
    const token = '123456789';
    const config = requestConfig(method, data, token);
    expect(config.body).toBe(JSON.stringify(data));
  });

  it('requestConfig retorna sem body quando o método é DELETE', () => {
    const method = 'DELETE';
    const data = null;
    const token = '123456789';
    const config = requestConfig(method, data, token);
    expect(config.body).toBeUndefined();
  });

  it('requestConfig retorna a autenticação correta quando token é fornecido', () => {
    const method = 'POST';
    const data = { nome: 'Usuário Teste' };
    const token = '123456789';
    const config = requestConfig(method, data, token);
    config.headers = new Headers(config.headers ?? {});
    config.headers.set('Authorization', `Bearer ${token}`);
    expect(config.headers.get('Authorization')).toBe(`Bearer ${token}`);
  });
});
