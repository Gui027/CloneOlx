import React from "react";
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { isLogged } from "../../../helpes/AuthHandler";

const Header = () => {
    let logged = isLogged(); // função que diz se ta logado ou não.

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && // se o cara tiver logado, iremos exibir ...
                            <>
                                <li>
                                    <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged && // se o cara não tiver logado, iremos exibir ...
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;