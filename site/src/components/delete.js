export default function DeletarItem(props){
    return(
        <div>
            <span>{props.item}</span>
            <span onClick={e=> props.RemoverItem(props.item)}>(X)</span>
        </div>
    )
}