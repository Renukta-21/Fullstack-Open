function Notes({notes}) {
  if(!notes) return <p>No notes yet!</p>
    return (
    <div>
        <p>
            {notes.map(n=> <div>
                <small>{n.id}</small>
                <p>{n.content}</p>
                <p>{n.important.toString()}</p>
            </div> )}
        </p>
    </div>
  )
}

export default Notes