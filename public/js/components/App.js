const App = () => {
    //This app is the root/parent of the components. The components are all descendants of App. 
    //The app is setting state for holding authentication data and show data. The app is now in charge for maintaining that information.
    // Null is set to default, you are neither authenticated or not it's for public access.
    const [auth, setAuth] = React.useState(null)
    // const authState = React.useState(null) -> authState[0] is the read part, authState[1](newAuth) is the update function
    // This is a hook, that pulling show and setshow from the state as a independant collection of data. Its best to use state when you have dynamic elements.
    const [show, setShow] = React.useState({trackQueue:[], tracks:[], name:""})
    //This contains side effects so that the function is pure.
    React.useEffect(()=>{
        const checkAuth = async ()=>{
            const AuthResponse = await fetch("/checkAuth")
            const AuthData = await AuthResponse.json()
            if(AuthData.user){
                /*This updates the auth piece of state, if the server provides a user details object then it changes the auth state to that user details object. 
                Once this auth updates the entire App rerenders, this is an asynchronous operation*/
                setAuth(AuthData.user)
            }
        } 
        const getShows = async () => {
            const showsResponse = await fetch("/api/shows");
            const showsData = await showsResponse.json();
            showsData[0].trackQueue = showsData[0].tracks.filter((track)=>{
                return track.inQueue
            }) 
            // filter returns a copy of an array but only the elements of that array that pass a condition check.
            showsData[0].tracks = showsData[0].tracks.filter((track)=>{
                return !track.inQueue
            })
            //This is where the state is updated.
            setShow(showsData[0])
            console.log("shows", showsData[0]);
        }
        //This is calling the functions above to run.
        checkAuth()
        getShows()
    },[]) // useEffect(fn, depArray) When the depArray is empty this function only fires once at the beginning.
    // A component gets created when it is displayed on the screen and is destroyed when it leaves the screen, in an ideal react Component. This is the component lifecycle. 
    /* Here we are using the AuthProvider component which is defined in context/index.js
    The value prop passes these pieces of state into the context. We are passing the data object.
    */
    /*The Auth providers gives to all its children, it's passing the value to context (data that is made global).
            These can directly access the state of the whole application, they can read the state or set the state. auth, show, setAuth, setShow.
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
//This connects Reacts virtual DOM to the DOM.
const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App/>)