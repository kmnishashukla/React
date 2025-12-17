export const UserInfo = ({name, age,city,email}) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    )
}