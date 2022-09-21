function AuthForm(props) {
    
    const [userInput, setUserInput] = useState({username: '', password: ''})

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input 
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={userInput.username}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userInput.password}
                />
            </label>
            <input type="submit" value={login ? "Login" : "Signup"}/>
        </form>
    )
}

export default AuthForm