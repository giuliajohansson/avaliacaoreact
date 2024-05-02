export default function Evento({titulo, descricao, horario, local, data}){
    return(
        <div className="sessao">
            <div className="evento">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{data}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img width="250"src="https://www.generalcarneiro.pr.gov.br/wp-content/uploads/2019/11/feira-do-livreo.jpg" alt="" />
        </div>
    )
}
