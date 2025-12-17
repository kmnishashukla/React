import './App.css'
import {Welcome} from './Welcome.jsx'
import {Button} from './Button.jsx'
import {Hello,HelloWithoutJSX} from './Hello.jsx'
import {UserProfile} from './UserProfile.jsx'
import {ContactForm} from './ContactForm.jsx'
import { StyledForm } from './StyledForm.jsx'
import { CandidateProfile } from './CandidateProfile.jsx'
import { Product } from './Product.jsx'
import { Greeting } from './Greeting.jsx'
import { UserDetails } from './UserDetails.jsx'
import { CardWrapper } from './cartWrapper.jsx'
import {ProductList} from './ProductList.jsx'
import { NameList } from './NameList.jsx'
import { Alert } from './Alert.jsx'
import { NewButton } from './NewButton.jsx'
import { CustomeButton } from './CustomButton.jsx'
// https://www.youtube.com/watch?v=1IvSI_YKx-k&list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3&index=7
// 5:11 
function App() {

  return (
    <div>
      <CustomeButton text='Like'/>
      <CustomeButton text='Bookmark' />
      <Alert>
        <h2>This is an alert message!</h2>
        <p>Please pay attention to this important information.</p>
      </Alert>
      <Alert type='error'>
        <h2>Error!</h2>
        <p>Something went wrong. Please try again later.</p>
      </Alert>
      <NewButton />
      <NameList />
      <ProductList />
      <UserDetails name="Diana Prince" isOnline={true} isPremium={true} isNewUser={true} role='admin' />
      <UserDetails name="Barry Allen" isOnline={false} hideOffline={true} role='vip' />
      <CardWrapper title="Product Card">
        <p>Bruce wayne</p>
        <p>batman@jl.com</p>
        <button>Contact</button>
      </CardWrapper>
      <Greeting name="Alice" message="Welcome"/>
      <Greeting name='Clark' />
      <Greeting name="Bob"/>
      <Greeting message="Hi"/>
      <Greeting />
      <Product title='Smartphone' price={699.99} inStock={false} categories={["Electronic",'Mobile']}/>
      <Product title='Gaming laptop' price={1299.99} inStock={true} categories={["Electronic",'Computers','Gamong']}/>
      <Welcome name="Bruce" alias='Batman'/>
      <Welcome name="Clark" alias='Superman'/>
      <Welcome name="Diana" alias='Wonder W'/>
      <CandidateProfile/>
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  )
}

export default App
