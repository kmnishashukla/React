export const CustomeButton = ({text}) => {
    const name = 'Nisha';
    const handleClick = () => {
        console.log(`Hey ${name},you clicked ${text}`);
        
        // console.log('Clicked element', e.target);
        // console.log('Click coordinates', e.clientX, e.clientY);
        // console.log('Which mouse button', e.button);
        
        
        alert("Thanks for liking!")
    }
    return <button onClick={handleClick}>{text}</button>
   // return <button onClick={()=> alert("Thanks for liking!!")}>Like</button>
}

