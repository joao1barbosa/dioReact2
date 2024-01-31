import { login } from "./login"
import { conta } from "../api";

describe('login', () => {

    const mockEmail = 'joao@dio.bank';
    const mockSenha = '123456';

    it('Deve exibir um objeto com os dados do Usuário', async() => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toStrictEqual(conta);
    })

    it('Deve retornar um Objeto vazio', async() => {
        const response = await login('email@invalido.com', '654321');
        expect(response).toStrictEqual({});
    })
})