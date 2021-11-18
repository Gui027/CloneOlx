import React, { useEffect, useState } from "react";
import { PageArea } from './styled';
import useApi from '../../helpes/OlxAPI';
import { doLogin } from "../../helpes/AuthHandler";

import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    const api = useApi();

    const fileField = useRef();

    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');

    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevenir o comportamento padrão, não envia o formulário se tiver incompleto.
        setDisable(true); // desabilita os campos.
        setError('');

        // const json = await api.login(email, password);

        // if (json.error) {
        //     setError(json.error);
        // } else {
        //     doLogin(json.token, rememberPassword);
        //     window.location.href = '/';
        // }

        setDisable(false);
    }

    return (
        <PageContainer>
            <PageTitle>Postar um anúncio</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input type="email"
                                disabled={disable}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select
                                disabled={disabled}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                <option></option>
                                {categories && categories.map(i =>
                                    <option key={i._id} value={i.name}></option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            ...
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e => setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                disabled={disabled}
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable}>Adicionar Anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;