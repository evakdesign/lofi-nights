const PlaylistEditor = () => {
    const authContext = React.useContext(AuthContext);
    const showContext = React.useContext(ShowContext);
    const titleInputRef = React.useRef(null);
    const artistInputRef = React.useRef(null);
    const albumInputRef = React.useRef(null);
    const labelInputRef = React.useRef(null);
    const srcInputRef = React.useRef(null);
    const handleEditorSubmit = (event) => {
        event.preventDefault();
        const newQueueTrack = {
            trackname: titleInputRef.current.value,
            artist: artistInputRef.current.value,
            album: albumInputRef.current.value,
            label: labelInputRef.current.value,
            src: srcInputRef.current.value,
            played: null,
            ended: null
        };
        console.log(newQueueTrack)
        showContext.setShow({...showContext.show, trackQueue:[...showContext.show.trackQueue, newQueueTrack]})
        alert("Playlist Updated");
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
                        value = "https://ia802905.us.archive.org/17/items/100ClassicalMusicMasterpieces/1685%20Purcell%20%2C%20Trumpet%20Tune%20and%20Air.mp3" 
                        name = "playlist_src"/>
                    </div>
                    <div>
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