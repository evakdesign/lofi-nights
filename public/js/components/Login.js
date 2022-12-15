const Login = () => {
    const authContext = React.useContext(AuthContext);
    const emailInputRef = React.useRef(null);
    const passwordInputRef = React.useRef(null);
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const newLogin = {
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value
        } 
        const loginResponse = await fetch("/api/user/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newLogin)
        })
            const loginData = await loginResponse.json()
        console.log(loginData);
        authContext.setAuth(loginData.user)
    }    
    return(
       <div className = "loginformwrapper">
             <form onSubmit = {handleFormSubmit}>
            <div>
                <label>
                    Email:
                </label>
                <input type="text" name="login_email" ref={emailInputRef}/>
            </div>
            <div>
                <label>
                    Password:
                </label>
                <input type="password" name="login_password" ref={passwordInputRef}/>
            </div>
            <div>
                <button className = "button">
                    Sign In
                </button>
            </div>
            </form>
       </div>
    )
} 