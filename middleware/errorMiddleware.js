exports.notFound = (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.send('<html><body><h1>404 Not Found</h1></body></html>');
    } else {
        res.json({ error: "404 Not Found" });
    }
};

exports.errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};