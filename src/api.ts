export const conta = {
    email: 'joao@dio.bank',
    password: '123456',
    name: 'Joao Barbosa',
    balance: 2000.00,
    id: '1'
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});