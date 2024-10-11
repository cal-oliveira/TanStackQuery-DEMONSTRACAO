import { RequestWithTanStack } from './components/request-with-tanstack'
import { TraditionalRequest } from './components/traditional-request'

function App() {
  return (
    <div className='flex justify-around items-center h-screen px-32'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <h1 className='text-3xl'>Tradicional Request</h1>
        <TraditionalRequest />
      </div>

      <div className='h-full w-px bg-zinc-800'/>

      <div className='flex flex-col justify-center items-center gap-6'>
        <h1 className='text-3xl'>Request with TanStack</h1>
       <RequestWithTanStack />
      </div>
    </div>
  )
}

export default App
