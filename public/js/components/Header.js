const Header = () => {
    const authContext = React.useContext(AuthContext);
    const [showLogin, setShowLogin] = React.useState(false);
    const renderLoginForm = () => {
        if(showLogin && !authContext.auth) {
            return (
                <Login/>
            )
        } else {
            return null;
        }
    }
    const renderLogin = () => {
        if (authContext.auth){
            return(
                <p className = "welcomelogin" >
                    Welcome {authContext.auth.firstName}
                </p>
            )
        } else {
            return(
                <button className = "buttonlogin" onClick = {handleLogin}>
                    Login
                </button>    
            )
        }
    }
    const handleLogin = () => {
        // authContext.setAuth(currentUser)
        setShowLogin(!showLogin)
    }
    return(
        <header className="header">
            <div className="headerlogin">
                {renderLogin()}    
            </div>
            <div>
                {renderLoginForm()}
            </div>
        </header>
    )
} 