
exports.errorHandler = (error,req,res,next)=>{

    res.status(error.code || 500).json({
        message : error.msg || 'Something went wrong, please retry'
    })
}

// In the main server.js or index.js file after all the routes are handled , this middleware should be added with app.use()