const jwt = require('jsonwebtoken')

const middlawera = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) return res.status(401).json({ 'message': 'Anauthenticated user' })

    try {
        const decoded = jwt.verify(token, "token");
        req.admin = decoded.admin;
        next();
    } catch (e) {
        console.error(e);
        res.status(200).send({ message: "Invalid Token" });
    }


}

module.exports = middlawera