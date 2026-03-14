const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(c=>{
         return <CourseCard key={c.id} name={c.name} id={c.id} parts={c.parts}/>
      })}
    </div>
  )
}
const CourseCard = ({name, id, parts})=>{
  return (
    <div>
      <small>{id}</small>
      <h3>{name}</h3>
      {parts.map(p=> <p>{p.name} {p.exercises}</p> )}
    </div>
  )
}
export default App