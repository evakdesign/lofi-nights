const App = () => {
    const [data,setData] = React.useState("initial state")
    //The app is setting state for holding authentication data and show data. The app is now in charge for maintaining that information.
    const [auth, setAuth] = React.useState(null)
    const [show, setShow] = React.useState(shows[0])
    const appname = "Nocturne"
    const getData = () => {
        setData(Date.now());
    }
    const handleTalkBreak = () => {
        alert("Talk Break")
    }
    /* Here we are using the AuthProvider component which is defined in context/index.js
    The value prop passes these pieces of state into the context. We are passing the data object.
    */
    return(
        <AuthProvider value={{auth, setAuth}}>
            <ShowProvider value={{show, setShow}}>
                <div className = "test">
                    <Header/>
                    <Searchbar/>
                    <h1>{appname}</h1>
                    <button className = "button" onClick = {getData}>Get Songs</button>
                    <p>{data}</p>
                    <CurrentTrack/>
                    <TalkBreak/>
                    <PlaylistEditor/>
                    <Tracks/>
                </div>
            </ShowProvider>
        </AuthProvider>
    )
};
const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App/>)