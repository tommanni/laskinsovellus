function Nappain(props) {

    return (

        <button onClick={() => props.handleClick(props.nappain)} className={props.tyyppi}>{props.nappain}</button>
    );
}

export default Nappain;