// backend/middleware/auth.js

import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized: No token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ .env থেকে secret নিচ্ছে?
        req.userId = decoded.userId; // ✅ এই লাইন আছে তো?
        next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }
};

export default verifyToken;



