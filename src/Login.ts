function login (req:Request, res:Response):object {

  return {
    message: 'login successfully gha',
   ...req.body // Pass the user's credentials along to the response
    // Add more relevant data if needed
  }
}