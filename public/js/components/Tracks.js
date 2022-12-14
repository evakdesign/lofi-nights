const Tracks = () => {
    const showContext = React.useContext(ShowContext)
    //Created a new piece of State, trackState is an array of all the tracks, setTrackState is an update function to change the trackState.
    //These are destructed properties of React.useState
    // const [trackState, setTrackState] = React.useState(shows[0].playlists[0].tracks)
    // const handleAddTrack = () => {
    //     console.log(trackState);
    //     setTrackState([...trackState, {show: "testTrackThree", played: Date.now(), ended: "endedTrue", title: "one", album: "date", artist: "data", label: "date" }]) 
    // };
    //This function is called everytime this component rerenders.
    //This is going to create an array of Track components with props coming from the trackState.
    //When the parent component changes its state, then the new prop will pass down to the child components.
    //When a child receives new props it renders in a new way.
    const renderTracks = () => {
        return showContext.show.playlists[0].tracks.map((track, i) => {
            return <Track {...track} show={showContext.show.show_name} title={track.trackname} />
        })
    }
    return(
        <div className = "trackscontainer">
            {/* <button onClick={handleAddTrack}>add track</button> */}
            <table>
                <thead>
                    <tr>
                        <th>Show</th>
                        <th>Played</th>
                        <th>Ended</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Track show="Test show one" played = "date" ended = "date" title = "one" album = "date" artist = "data" label = "date"/>
                    <Track show="Test show two" played = "two" ended = "three" title = "four" album = "five" artist = "data" label = "date"/> */}
                    {/*This function will be called everytime the component rerenders*/}
                    {renderTracks()}
                </tbody>
            </table>
        </div>
    )
}