const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}/>
      {parts.map(p=> <Part part={p}/> )}
    </div>
  )
}

const Header = ({name})=>{
  return <h1>{name}</h1>
}
const Part = ({part})=>{
  return <p>{part.name} {part.exercises}</p>
}

export default App