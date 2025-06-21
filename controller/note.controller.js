const Notes = require("../model/Notes")

const addNote = async (req, res) => {
    await Notes.create(req.body)
    res.json({ message: "note add" })
}
const getNote = async (req, res) => {
    const result = await Notes.find()
    res.json({ message: "note get", result })
}
const updateNote = async (req, res) => {
    const { nid } = req.params
    await Notes.findByIdAndUpdate(nid, req.body)
    res.json({ message: "note update" })
}
const deleteNote = async (req, res) => {
    const { nid } = req.params
    await Notes.findByIdAndDelete(nid)
    res.json({ message: "note delete" })
}
module.exports = { addNote, deleteNote, getNote, updateNote }