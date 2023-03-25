const PlaylistEditor = () => {
    const authContext = React.useContext(AuthContext);
    const showContext = React.useContext(ShowContext);
    const titleInputRef = React.useRef(null);
    const artistInputRef = React.useRef(null);
    const albumInputRef = React.useRef(null);
    const labelInputRef = React.useRef(null);
    const srcInputRef = React.useRef(null);
    const handleEditorSubmit = async (event) => {
        event.preventDefault();
        const newQueueTrack = {
            songName: titleInputRef.current.value,
            artistName: artistInputRef.current.value,
            albumName: albumInputRef.current.value,
            labelName: labelInputRef.current.value,
            trackSrc: srcInputRef.current.value,
            timeStarted: null,
            timeEnded: null,
            inQueue: true
        };
        showContext.setShow({...showContext.show, trackQueue:[...showContext.show.trackQueue, newQueueTrack]})
        alert("Playlist Updated");
        console.log(showContext.show)
        const newTrackResponse = await fetch(`/api/shows/${showContext.show.id}/track/new`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newQueueTrack)
        }) 
        const newTrackData = await newTrackResponse.json()
        console.log(newTrackData)
    }
    const renderEditor = () => {    
        if (authContext.auth) {
            return (
                <form onSubmit = {handleEditorSubmit}>
                    <div>
                        <input
                        ref = {titleInputRef} 
                        type = "text" 
                        placeholder = "Title" 
                        name = "playlist_title"/>
                    </div>
                    <div>
                        <input 
                        ref = {artistInputRef}
                        type = "text" 
                        placeholder = "Artist" 
                        name = "playlist_artist"/>
                    </div>
                    <div>
                        <input
                        ref = {albumInputRef} 
                        type = "text" 
                        placeholder = "Album" 
                        name = "playlist_album"/>
                    </div>
                    <div>
                        <input 
                        ref = {labelInputRef}
                        type = "text" 
                        placeholder = "Label" 
                        name = "playlist_label"/>
                    </div>
                    <div>
                        <input 
                        ref = {srcInputRef}
                        type = "text" 
                        placeholder = "src"
                        name = "playlist_src"/>
                    </div>
                    <div className = "addtrack">
                        <button>
                            Add Track
                        </button>
                    </div>
                </form>
            )
        } else {
            return null
        }
    } 
    return (
        <div>
        {renderEditor()}
        </div>
    )
}