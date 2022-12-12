const Searchbar = () => {
    const showContext = React.useContext(ShowContext);
    const [foundTracks, setFoundTracks] = React.useState([])
    const renderFoundTracks = () => {
        return foundTracks.map((track) => {
            return(
                <Track {...track} show={showContext.show.show_name} title={track.trackname}/>

            )
        })
    }
    const handleSearchChange = (event) => {

    }
    return(
        <div>
            <input onChange = {handleSearchChange} type ="text" name="search_field"/>
            <div>
               {renderFoundTracks()} 
            </div>
        </div>
    )
}