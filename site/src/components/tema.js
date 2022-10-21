import './tema.scss'

export default function Tema(props){
    return(
        <div>
            <h4 className={props.cor}>{props.nome}</h4>
        </div>
    )
}