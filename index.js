const express = require("express")
const app = express()
const port = 3000

// json parsing
app.use(express.json())


let books = []
let nextId = 1 

// get all books
app.get("/books", (req, res) => {
    res.json(books)
})

// add a new book
app.post("/books", (req, res) => {
    const bookData = req.body

    if (bookData.title == null || bookData.author == null) {
        res.status(400).json({ msg: "title and author required" })
        return
    }

    const book = {
        id: nextId,
        title: bookData.title,
        author: bookData.author
    }

    nextId = nextId + 1
    books.push(book)
    res.status(201).json(book)
})

// update book
app.put("/books/:id", (req, res) => {
    let id = req.params.id
    id = parseInt(id)

    const foundBook = books.find(b => b.id === id)

    if (!foundBook) {
        res.status(404).json({ msg: "not found" })
        return
    }

    if (req.body.title) {
        foundBook.title = req.body.title
    }

    if (req.body.author) {
        foundBook.author = req.body.author
    }

    res.json(foundBook)
})

// delete a book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id)

    let index = -1
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            index = i
            break
        }
    }

    if (index === -1) {
        res.status(404).json({ msg: "book not found" })
        return
    }

    const removed = books.splice(index, 1)

    res.json({ msg: "book deleted", book: removed[0] })
})

// start the app
app.listen(port, () => {
    console.log("server started on port " + port)
})
