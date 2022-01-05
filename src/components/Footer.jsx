import React from "react";


function Footer() {

  const date = new Date().getFullYear()
  return <footer><p className="p">Copyright IRB {date}</p></footer>
}

export default Footer;