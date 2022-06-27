const controller = require("../controller/blogController")
const express = require("express")

const router = express.Router()

router.get("/posts", controller.getAllPosts)
router.get("/post/:id", controller.getPostById)
router.get("/posts/category", controller.getPostsbyCategory)
router.post("/posts", controller.createNewPost)
router.patch("/post/:id", controller.updatePost)
router.patch("/post/like/:id", controller.likePost)
router.patch("/post/archive/:id", controller.archivePost)
router.delete("/post/:id", controller.deletePost)

module.exports = router
