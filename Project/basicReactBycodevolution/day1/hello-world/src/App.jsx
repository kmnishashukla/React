import './App.css'


function Welcome(){
  return <h2>Welcome to the React Course</h2>
}

function Button(){
  return <button>Click Me</button>
}

function App() {

  return (
    <div>
      <h1>Codevoluation REact Course</h1>
      <Welcome />
      <Button />
    </div>
  )
}

export default App
