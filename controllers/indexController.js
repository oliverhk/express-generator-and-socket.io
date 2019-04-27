// index of the site
exports.index = function(req, res, next) {
    // need to preserve log to see this message
    res.io.emit('client', 'Hello User')

    // render the page using pug
    res.render('index', { title: 'Express' });
}