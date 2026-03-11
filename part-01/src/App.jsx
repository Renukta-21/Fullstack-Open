const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content part={part1} content={exercises1}/>
      <Content part={part2} content={exercises2}/>
      <Content part={part3} content={exercises3}/>

      <Total 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({part, content}) => {
  return(
    <div>
      <h2>{part}</h2>
      <p>{content}</p>
    </div>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return <p>Total of exercises {exercises1 + exercises2 + exercises3}</p>
}

export default App