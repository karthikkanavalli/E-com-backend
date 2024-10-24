import jwt from "jsonwebtoken";

export let verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  console.log(token, "token");
  jwt.verify(token, "something", (err, data) => {
    if (err) {
      res.send({ message: "token expired" });
    } else {
      console.log(data, "token varfied");
    }
    
    req.email = data.email;
    req.role = data.role;
    req.id = data.id;
    next();
  });
};


