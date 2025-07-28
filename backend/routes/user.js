import express from "express";
import { PrismaClient } from "@prisma/client";
import verifyToken from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Add blog post

router.post("/add", verifyToken, async (req, res) => {
    const { content } = req.body;
    console.log("Token user ID:", req.userId); // 🐞 এখানে ID আসছে কিনা দেখো

    try {
        const newPost = await prisma.post.create({
            data: {
                content,
                userId: req.userId, // ✅ এটা undefined হলে error দিবে
            },
        });

        return res.json({ success: true, post: newPost });
    } catch (err) {
        console.error("Add Post Error:", err);
        return res.status(500).json({ success: false, message: "Failed to add post" });
    }
});





// ✅ Home - Get user's posts
router.get("/home", verifyToken, async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: { userId: req.user.id }, // <-- এটুকু শুধু change
            orderBy: { createdAt: "desc" },
        });

        res.json({ success: true, posts });
    } catch (err) {
        console.error("Fetch user posts error:", err);
        res.status(500).json({ success: false, message: "Failed to fetch posts" });
    }
});

export default router;
