import "./delete.scss";

export default function DeletarItem(props){
    return(
        <main>
                    <div>
            <span>{props.it}</span>
            <button className="deletebutton" onClick={e=> props.deletarit(props.it)}>(X)</button>
        </div>

        </main>
            )
}