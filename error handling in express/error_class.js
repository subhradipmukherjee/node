class ApiError {
    constructor(msg,code)
    {
        this.msg = msg
        this.code = code
    }
}

exports.badRequest = (msg) =>{
    return new ApiError(msg,400)
}

exports.internal = (msg) =>{
    return new ApiError(msg,500)
}

exports.unauthorized = (msg)=>{
    return new ApiError(msg,401)
}

// we can add more custom error functions