import './notification.css'

function Notification({message, type}) {
  if(message===null) return null

  if(type=='success') return(
    <div className='success'>
        {message}
    </div>
  )
    return (
    <div className='fail'>
        {message}
    </div>
  )
}

export default Notification