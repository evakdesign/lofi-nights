const App = () => {
    //The app is setting state for holding authentication data and show data. The app is now in charge for maintaining that information.
    const [auth, setAuth] = React.useState(null)
    const [show, setShow] = React.useState(shows[0])
    
    React.useEffect(()=>{
        const checkAuth = async ()=>{
            const AuthResponse = await fetch("/checkAuth")
            const AuthData = await AuthResponse.json()
            if(AuthData.user){
                setAuth(AuthData.user)
            }
        } 
        checkAuth()
    },[])
    /* Here we are using the AuthProvider component which is defined in context/index.js
    The value prop passes these pieces of state into the context. We are passing the data object.
    */
    return(
        <AuthProvider value={{auth, setAuth}}>
            <ShowProvider value={{show, setShow}}>
                <div className = "panel">
                    <Header/>
                    <h1 className="bannertitle">
                        Nocturne
                    </h1>    
                    <div className = "searchbar">
                        <Searchbar/>
                    </div> 
                    <div className = "currenttrack">  
                        <CurrentTrack/>
                    </div>
                    <div className = "talkbreak">
                        <TalkBreak/>
                    </div>
                    <div className = "playlisteditor">
                        <PlaylistEditor/>
                    </div>
                    <div>
                        <Tracks/>
                    </div>    
                </div>
            </ShowProvider>
        </AuthProvider>
    )
};
const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App/>)