

const Button = ({handleClick, color, text, toggleShow}) => {

    


    return(
        <div>
            <button onClick={handleClick}
            style={{backgroundColor:color}}
            className='btn'
            onClick={toggleShow}
            >
            {text}
            </button>
        </div>
    )
}

export default Button;