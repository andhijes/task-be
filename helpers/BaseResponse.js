const successResponse = (data) => {
  const defaultResponse = { message: 'Success' };
  
  return {
    status: true,
    data: (data) ? data  : defaultResponse
  };
}

const errorResponse = (error) => {
  return {
    status: false,
    error: error.message || error || null,
  };
}

module.exports =  {
    successResponse,
    errorResponse,
  };
  