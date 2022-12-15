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
        <tr>
            <td>
                {props.showName}
            </td>
            <td>
                {dateFormat(props.played)}
            </td>
            <td>
                {props.ended && dateFormat(props.ended)}
            </td>
            <td>
                {props.songName}
            </td>
            <td>
                {props.albumName}
            </td>
            <td>
                {props.artistName}
            </td>
            <tr>
                {props.labelName}
            </tr>
        </tr>
    )
}