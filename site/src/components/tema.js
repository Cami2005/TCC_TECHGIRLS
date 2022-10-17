import './tema.scss'

export default function Tema(props){
    return(
        <main>
            <h4 className={props.cor}>{props.nome}</h4>
        </main>
    )
}