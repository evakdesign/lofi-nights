const handleAuth = (req, res, next) => {
    if(!req.session){
        res.status(403).json({error: "not authenticated"})
        res.end()
        return;
    } 
    else {
        if(!req.session.user){
            res.status(403).json({error: "not authenticated"})
            res.end()
            return;
        }
    }
    next()    
};
module.exports = {handleAuth};