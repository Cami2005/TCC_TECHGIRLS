export default function Inputs(props){
    return(
        <main>
            <div className={props.classe}>
            <img className={props.img} src={props.icon} alt="icon"></img>
            <input placeholder={props.placeholder}></input>
            </div>
    </main>

    )
}