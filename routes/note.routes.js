const { getNote, addNote, updateNote, deleteNote } = require("../controller/note.controller")

const router = require("express").Router()
router
    .get("/", getNote)
    .post("/add", addNote)
    .put("/modify/:nid", updateNote)
    .delete("/delete/:nid", deleteNote)

module.exports = router