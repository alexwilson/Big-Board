const jira = require('./provider/jira')

module.exports = (req, res, next) => {
    return jira(req,res,next)
}