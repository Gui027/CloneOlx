import Cookies from 'js-cookie';

export const isLogged = () => { //verifica se o cara ta logado ou não.
    let token = Cookies.get('token'); //pega nos cookies um carinha que se chama token.
    return (token) ? true : false; //retorna true caso token exista, se não retorna false.
}

export const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, { expires: 999 });
    } else {
        Cookies.set('token', token);
    }
}