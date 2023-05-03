exports.successResponse = (message, payload) => {
  return {
    status: true,
    message: message,
    package: payload
  }
}

exports.failResponse = (message, payload = null) => {
  let response = {
    status: false,
    message: message
  }

  if (payload) response.payload = payload

  return response
}
