const blogModel = require("../models/blogModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await blogModel.find()
        res.status(200).json(allPosts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getPostById = async (req, res) => {
    try {
        const findPost = await blogModel.findById(req.params.id)
        res.status(200).json(findPost)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getPostsbyCategory = async (req, res) => {
    try {
        const { category } = req.query
        const findPost = await blogModel.find({ categories: category })
        res.status(200).send(findPost)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const createNewPost = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para criar um novo post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { title, text, imageurl, categories } = req.body

            const newPost = new blogModel({
                title, text, imageurl, categories
            })

            const savedPost = newPost.save()
            res.status(201).json(savedPost)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { id } = req.params
            const { title, text, categories } = req.body
            const findPost = await blogModel.findById(id)

            if (findPost == null) {
                return res.status(404).json({ message: "post não encontrado!" })
            }

            findPost.title = title || findPost.title
            findPost.text = text || findPost.text
            findPost.categories = categories || findPost.categories

            const savedPost = await findPost.save()
            res.status(200).json(savedPost)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deletePost = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para excluir um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { id } = req.params
            await blogModel.findByIdAndDelete(id)
            res.status(200).json({ message: "post deletado com sucesso" })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const likePost = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para curtir/descurtir um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { id } = req.params
            const findPost = await blogModel.findById(id)

            if (findPost == null) {
                return res.status(404).json({ message: "post não encontrado!" })
            }
            if (findPost.liked === false) {
                findPost.liked = true
                findPost.likes += 1
                const savedPost = await findPost.save()
                res.status(200).json({ message: "post curtido com sucesso!", savedPost })
            } else {
                findPost.liked = false
                findPost.likes -= 1
                const savedPost = await findPost.save()
                res.status(200).json({ message: "post descurtido com sucesso!", savedPost })
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const archivePost = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "cadê o auth???" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("não rolou")
            }
            const { id } = req.params
            const findPost = await blogModel.findById(id)

            if (findPost == null) {
                return res.status(404).json({ message: "post não encontrado!" })
            }
            if (findPost.archived === false) {
                findPost.archived = true
                const savedPost = await findPost.save()
                return res.status(200).json({ message: "post arquivado com sucesso", savedPost })
            } else {
                findPost.archived = false
                const savedPost = await findPost.save()
                return res.status(200).json({ message: "post desarquivado com sucesso", savedPost })
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createNewPost,
    getAllPosts,
    getPostById,
    getPostsbyCategory,
    updatePost,
    deletePost,
    likePost,
    archivePost
}