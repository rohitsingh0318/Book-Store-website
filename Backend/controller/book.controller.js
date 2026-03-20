import book from "../model/book.model.js"

export const getbook = (req, res)=>{
    try {
        const book= Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("error:", error)
    }
}