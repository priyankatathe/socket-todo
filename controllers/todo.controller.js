const asyncHandler = require("express-async-handler")

exports.createTodo = asyncHandler(async (req, res) => {
    res.json({ message: "createTodo successs" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    res.json({ message: "readcreateTodo successs" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    res.json({ message: "updateTodo successs" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    res.json({ message: "deleteTodo successs" })
})