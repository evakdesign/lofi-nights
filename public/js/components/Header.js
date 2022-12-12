const Header = () => {
    const authContext = React.useContext(AuthContext)
    const renderLogin = () => {
        if (authContext.auth){
            return(
                <p>
                    Welcome {authContext.auth.firstName}
                </p>
            )
        } else {
            return(
                <button className = "button" onClick = {handleLogin}>
                    Login
                </button>    
            )
        }
    }
    const handleLogin = () => {
        authContext.setAuth(currentUser)
    }
    return(
        <header className ="header">
                <p>
                    Nocturne
                </p>
            <div>
                {renderLogin()}
            </div>
        </header>
    )
} 