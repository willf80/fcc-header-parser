const getInfo = (request, callback) => {
  const data = {
    ipadress: request.ip,
    language: request.headers['accept-language'],
    software: request.headers['user-agent']
  }

  callback(null, data)
}

module.exports = { getInfo }
