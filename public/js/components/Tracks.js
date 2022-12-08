const Tracks = () => {
    return(
        <div>
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
                    <Track show="Test show one" played = "date" ended = "date" title = "one" album = "date" artist = "data" label = "date"/>
                    <Track show="Test show two" played = "two" ended = "three" title = "four" album = "five" artist = "data" label = "date"/>
                </tbody>
            </table>
        </div>
    )
}