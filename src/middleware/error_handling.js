
const errorHandling = (err, _, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
    next(err);
};

export default errorHandling;
