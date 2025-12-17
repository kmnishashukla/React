export const StyledForm = () => {
    return (
        <form className='contact-form'>
           <label htmlFor='username'>Username:</label>
           <input  type='text' id='Username' className='form-input'/>
           <br/>
           <label for='email'>Email:</label>
           <input type='email' id='email' className='form-input' tableIndex='1'/>
        </form>
    )
}