class Response{
    static customResponse ({res, status, message = null, data=null }){
        return res.status(status).json({
           status,
            message,
            data

        })
    }
    static sendFile(res, { file, contentType, contentLength }) {
        res.set({
            "Content-Type": contentType,
            "Content-Length": contentLength
        });
        return res.send(file);
    }

    static ok(res, data = {}) {
        return res.status(200).json({ data, status: 200 });
    }
    static validationError(res, message) {
        return res.status(422).json({
            status: 422,
            message,
            error: "Validation Error"
        });
    }
    static authenticationError(res, message = "Authentication Error") {
        return res.status(401).json({
            status: 401,
            message,
            error: "Authentication Error"
        });
    }
    static authorizationError(res, message = "Authorization Error") {
        return res.status(403).json({
            status: 403,
            message,
            error: "Authorization Error"
        });
    }
    static notFoundError(res, message = "Not Found Error") {
        return res.status(404).json({
            status: 404,
            message,
            error: "Not Found"
        });
    }
    static conflictError(res, message = "Conflict Error") {
        return res.status(409).json({
            status: 409,
            message,
            error: "Conflict Error"
        });
    }
    static badRequestError(res, message = "Bad Request Error") {
        return res.status(400).json({
            status: 400,
            message,
            error: "Bad Request"
        });
    }
    static notModified(res, message = "Not Modified") {
        return res.status(304).json({
            status: 304,
            message,
            error: "Not Modified"
        });
    }
}

module.exports = Response;