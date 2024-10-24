export let roleValidator = (...role) => {
    return (req, res, next) => { 
        console.log("role check ----------------\n")
        if (role.includes(req.role)) {
            console.log(req.role + " \n is authorized");
             next();
        } else {
            console.log("Role not found")
            res.status(400).send({ message: "You are not authorized" });
        }
    }
}