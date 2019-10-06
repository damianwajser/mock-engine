
function createResponse(res, config){
    res.status(config.status).json(config.response);
}

function createPath(router, config){
    let path = '/'+config.path;
    router[config.method.toLowerCase()](path, (req, res) => {
        createResponse(res, config)
    });
}

module.exports.createPath = createPath;