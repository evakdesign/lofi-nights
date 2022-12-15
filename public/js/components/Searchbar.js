const Searchbar = () => {
    const showContext = React.useContext(ShowContext);
    const [foundTracks, setFoundTracks] = React.useState([])
    const renderFoundTracks = () => {
        return foundTracks.map((track) => {
            return(
                <Track {...track} show={showContext.show.show_name} title={track.trackname}/>

            );
        })
    }
    const handleSearchChange = (event) => {
        const filteredTracks = showContext.show.playlists[0].tracks.filter((track) => {
            //If nothing is in the seachbar then return false.
            if(!event.target.value) {
                return false;
            }
            //This allows the search to pick up on lowercase letters, regardless of casing in the tracks.
            const artistLowercase = track.artist ? track.artist.toLowerCase():"";
            const tracknameLowercase = track.trackname ? track.trackname.toLowerCase():"";
            const searchLowercase = event.target.value.toLowerCase();
            const albumLowercase = track.album ? track.album.toLowerCase():"";
            const labelLowercase = track.label ? track.label.toLowerCase():""; 
            return tracknameLowercase.includes(searchLowercase) || artistLowercase.includes(searchLowercase) || albumLowercase.includes(searchLowercase) || labelLowercase.includes(searchLowercase);
        }) 
        //Whatever passes to filter we set as the found track state.
        setFoundTracks(filteredTracks);
    }
    return(
        <div>
            <input onChange = {handleSearchChange} type ="text" name="search_field"/>
            <div className = "trackscontainer">
               {renderFoundTracks()} 
            </div>
        </div>
    )
}