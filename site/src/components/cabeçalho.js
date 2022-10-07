import "./cabeçalho.scss"

export default function Index(props){
    return(
        <main>
            <header className="cab">
                    <img className="logo" alt="" src={props.logo}/>
                    <img  className='menuCab' alt="" src={props.menu}/>

                    <div>
                    <input className='busca' placeholder='encontre seu produto aqui' type='text'/>
                    <button onClick={buscarNomeClick}>pesquisar</button>

                    </div>
                    
                    <img className='icons' src={props.fav}></img>
                    <img className='icons' src={props.user}></img>
                    <img className='icons' src={props.sacola}></img>
            </header>
        </main>
    )
}