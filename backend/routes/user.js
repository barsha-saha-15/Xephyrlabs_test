import express from "express";
import { PrismaClient } from "@prisma/client";
import verifyToken from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/add", verifyToken, async (req, res) => {
  const { content } = req.body;
  console.log("Token user ID:", req.userId);
  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        userId: req.userId.userId,
      },
    });

    return res.status(200).json({ success: true, post: newPost });
  } catch (err) {
    console.error("Add Post Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to add post" });
  }
});

router.get("/home", verifyToken, async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { userId: req.userId.userId },
      orderBy: { createdAt: "desc" },
    });

    res.json({ success: true, posts });
  } catch (err) {
    console.error("Fetch user posts error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: { id, userId: req.userId.userId },
    });
    return res
      .status(200)
      .json({ message: "Post deleted successfully", success: true });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Post deletion failed",
      details: error.message,
    });
  }
});

router.put("/update/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { content } = req.userId.body;
  console.log("trying to update post:", { postId: id, userId: res.userId.userId, content });
  try {
    const updatePost = await prisma.post.update({
      where: {
        id,
        userId: req.userId.userId,
      },
      data: {
        content,
      },

    });
    return res
      .status(200)
      .json({ message: "post updated successfully", success: true });

  } catch (error) {
    console.error("update error:", error);
    res.status(400).json({
      success: false,
      error: "post update failed",
      details: error.message,
    })
  }

});


router.get("/allPost", verifyToken, async (req, res) => {
  try {
    const allPost = await prisma.post.findMany({
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      success: true,
      posts: allPost,
    });
  } catch (error) {
    console.error("all post fetch error:", error);
    res.status(500).json({
      success: false,
      message: "failed to fetch all post",
    });
  }
});

export default router;
