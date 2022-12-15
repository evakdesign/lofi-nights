const dateFormat = (date) => {
    console.log(new Date(date))
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth()+1;
    const day = parsedDate.getDate();
    const hour = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const seconds = parsedDate.getSeconds();
    const formatedDate = `${month < 10 ? `0${month}`:month}-${day < 10 ? `0${day}`:day}-${year} ${hour < 10 ? `0${hour}`: hour}:${minutes < 10 ? `0${minutes}`: minutes }:${seconds < 10 ? `0${seconds}`: seconds}`
    return formatedDate;
} 
const Track = (props) => {
    return(
        <div className="flexrow">
            <p>
                {props.showName}
            </p>
            <p>
                {dateFormat(props.played)}
            </p>
            <p>
                {props.ended && dateFormat(props.ended)}
            </p>
            <p>
                {props.songName}
            </p>
            <p>
                {props.albumName}
            </p>
            <p>
                {props.artistName}
            </p>
            <p>
                {props.labelName}
            </p>
        </div>
    )
}