const TalkBreak = () => {
    const authContext = React.useContext(AuthContext)
    const showContext = React.useContext(ShowContext)
    const handleTalkBreakClick = () => {
        showContext.setShow({...showContext.show, isplaying:!showContext.show.isplaying})
    }
    const renderTalkbreak = () => {
        if(authContext.auth){
            return (  
                <div>
                    <button className="button" onClick={handleTalkBreakClick}>
                        {showContext.show.isplaying ? "Talk Break" : "End Talk Break"}
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