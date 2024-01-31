export interface IDioBank {
    user: {
        email?: string,
        password?: string,
        name?: string,
        balance?: number,
        id?: string
    };
}

const dioBank = {
   user: {}
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank');
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
}