export default function authorization(...role) {

  return (req, res, next) => {
    const userRole = req.user.role;
    if(!role.includes(userRole)){
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this"
      });
    }

    next();
  };
};