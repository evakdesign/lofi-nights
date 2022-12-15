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
    const handleLogout = async () => {
        const logoutResponse = await fetch("/api/user/logout", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        authContext.setAuth(null);
    }
    const renderLogin = () => {
        if (authContext.auth){
            return(
                <div>
                    <p className = "welcomelogin" >
                    Welcome {authContext.auth.firstName}
                    </p>
                    <button className = "buttonlogin" onClick = {handleLogout}>
                    Logout
                    </button>  
                </div>
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