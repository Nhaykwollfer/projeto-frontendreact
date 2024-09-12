import React from 'react';

export default function Header(props) {
    const {contaItens} = props;
    return(
    <header className='row block center'>
        <div>
            <a href="/">
                <h1>Loja Produtos Espaciais</h1>
            </a>
        </div>
        <div>
            <a href="/carrinho">Carrinho{ ' '}
            {contaItens ? ( <button className='lote'>{contaItens}</button>
            ) : ('')
        }
        </a>
            <a> | </a>
            <a href="/entrar">Entrar</a>
        </div>
    </header>
    );
}