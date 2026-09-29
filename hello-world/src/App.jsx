import './App.css'
import { Button } from './Button' // recomended as there is no chance to rename the component
import { Hello, HelloWithoutJSX } from './Hello'
import Welcome from './Welcome' // not recomended as there is a chance to rename the component
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'
import { CardWrapper } from './CardWrapper'
import { OnlineStatus } from './OnlineStatus'

function App() {
  return (
    <div>
      <OnlineStatus name="Kumar" isOnline={true} hideOffline={true}></OnlineStatus>
      <OnlineStatus name="Ganes" isOnline={false} hideOffline={true}></OnlineStatus>
      <h1>React Learning project!</h1>
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
      <CandidateProfile />
      <Product name="Laptop" price={50000} id={1} categories={["Electronics", "Computers"]} />
      <CardWrapper>
        <h2>Product Details</h2>
        <Product name="Laptop" price={50000} id={1} categories={["Electronics", "Computers"]} />
      </CardWrapper>
    </div>
  )
}

export default App
