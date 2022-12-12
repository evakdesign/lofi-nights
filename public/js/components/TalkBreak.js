const TalkBreak = () => {
    const authContext = React.useContext(AuthContext)
    const renderTalkbreak = () => {
        if(authContext.auth){
            return (  
                <div>
                    <button className="button"> 
                        Talk Break
                    </button>
                </div>)
        } else {
            return null;
        }
    }
    return(
        <React.Fragment>
        {renderTalkbreak()}
        </React.Fragment>
    )
}