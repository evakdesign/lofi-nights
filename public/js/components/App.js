const App = () => {
    const [data,setData] = React.useState("initial state")
    const appname = "Lofi Nights"
    const getData = () => {
        setData(Date.now());
    }
    return(
        <div>
            <Header/>
            <h1>{appname}</h1>
            <button onClick = {getData}>Get Songs</button>
            <p>{data}</p>
            <Tracks/>
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App/>)