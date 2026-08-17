const errorMiddleware = async (err, req, res, next) => {
    const statusCode = err.status ?? err.statusCode ?? res.statusCode ?? 500;
    const payload = {
        success: false,
        message: err.message || "Something went wrong",
    };

    if (process.env.NODE_ENV !== "production") {
        payload.stack = err.stack;
    }

    if (Array.isArray(err.errors) && err.errors.length > 0) {
        payload.errors = err.errors.map((error) => ({
            field: error.param ?? error.path ?? error.location,
            message: error.msg ?? error.message,
        }));
    }

    res.status(statusCode).json(payload);
};

export default errorMiddleware;