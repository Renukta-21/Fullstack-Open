export default function App(){
  const date = new Date()
  return(
    <div>
        <h3><Greeting name={'Daniel'}/></h3>
      {date.toString()}
  </div>
  )
}

const Greeting = ({name})=>{
  return <div>Hello {name}</div>
}