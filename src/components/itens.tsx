import data from "../products/copos.json";
import "../styles/produtos/itens.css";
import "../styles/produtos/allitens.css";

export default function AllItens() {
    return (
        <section id="Copos" className="item-produto produtos-copos">
            <h2>Copos</h2>
            <div className="div-produtos-copos">
                <ul className="list-copos">
                    {data.map((i) => (
                        <li key={i.id} className="item-copos">
                            <div className="div-description-item">
                                <h3>{i.nome}</h3>
                                <p className="item-description">{i.descricao}</p>
                                <span className="item-preco">A partir de R$ {i.precos.P}</span>
                            </div>
                            <img src={i.img} alt="foto de um copo de açaí" width={120} height={120} className="foto-copo"/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}