import React from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import Card from "./Card"
import contacts from "../contacts.js"

function createCard(contact) {
  return <Card name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email}/>
}

function App() {
  return <div><Heading />
   <Note />    
   {contacts.map(createCard)}
   {/* <Card
  name="Me"
  tel="123-456-7890"
  img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelsandliving.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fadorable-smiling-dogs-21.jpg&f=1&nofb=1"
/>
<Card
  name="Ian"
  tel="123-123-1234"
  img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2014%2F10%2Fanimal%2FCute_Golden_Dog.jpg&f=1&nofb=1"
/> */}
<Footer /></div>
}

export default App;