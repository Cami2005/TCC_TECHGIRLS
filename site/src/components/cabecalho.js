import './cabecalho.scss';

export default function Cabecalho(props){
    return(
            <header className="cab">
                <img className="logo" src={props.logo}/>
                <div>
                <img  className='menuCab' src={props.menu}/>
                    <input className='busca' placeholder={props.placeholder} type={props.type} onChange={props.onChange} ></input>
                    <button><img className='icons' src={props.lupa}></img></button>
                </div>
                <img className='icons' src={props.fav}></img>
                <img className='icons' src={props.user}></img>
                <img className='icons' src={props.sacola}></img>
            </header>
        )
}