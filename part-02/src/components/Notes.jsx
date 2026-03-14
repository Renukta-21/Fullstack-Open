import axios from "axios"
import { useEffect, useState } from "react"

function Notes() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/notes")
            .then(response => setNotes(response.data))
    })
    if (notes.length===0) return <p>No notes yet!</p>
    return (
        <div>
            <p>
                {notes.map(n => <div>
                    <small>{n.id}</small>
                    <p>{n.content}</p>
                    <p>{n.important.toString()}</p>
                </div>)}
            </p>
        </div>
    )
}

export default Notes