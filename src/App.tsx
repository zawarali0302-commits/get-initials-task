
import './App.css'
import GetInitialsComponent from './components/GetInitialsComponent'

export type User = {
  id: number;
  name: string;
  designation: string;

}


function App() {
  const user1: User = {
    id: 1,
    name: "Abdul Wahab",
    designation: "Developer",
  }
  const user2: User = {
    id: 2,
    name: "Muhammad Owais",
    designation: "Designer",
  }
  const user3: User = {
    id: 3,
    name: "Iqra Masood",
    designation: "Manager",
  }
  const user4: User = {
    id: 4,
    name: "Tayyab Raza Ali",
    designation: "CEO",
  }
  return (
    <>
      <GetInitialsComponent user={user1} />
      <GetInitialsComponent user={user2} />
      <GetInitialsComponent user={user3} />
      <GetInitialsComponent user={user4} />
    </>
  )
}

export default App
