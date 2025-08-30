import { useParams } from "react-router-dom";
import data from "../../products/copos.json";
import "../../styles/produtos.css"

export default function Produto() {
    const { id } = useParams();
    const produtoFind = data.find(i => i.nome === id);

    const numero = "5516993263987";
    const mensagem = `Eu gostaria desse sabor
${produtoFind?.nome}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    return (
        <>
            <section className="produto-page">
                <div className="div-imagem-produto">
                    <img src={produtoFind?.img} alt={`Imagem do ${produtoFind?.nome}`} className="foto-produto-selecionar" />
                </div>
                <div className="div-description-produto">
                    <h2>{produtoFind?.nome}</h2>
                    <p>{produtoFind?.descricao}</p>
                    <div>
                        <h3>Escolha o tamanho</h3>
                        <ul>
                            <li>P</li>
                            <li>M</li>
                            <li>G</li>
                            <li>Copão</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="block-carrinho-finalizar">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-btn-finalizar">Finalizar pedido</a>
            </div>
        </>
    );
}
