export function Header(){
    const style = {
        color: 'red',
        fontSize: '50px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        marginTop: '20px'
    }
    return(
        <h1 style={style}>React Pizza</h1>    
    )
  }