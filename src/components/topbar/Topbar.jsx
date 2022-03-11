import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
          <div className="itemContainer">
          <Person className='icon'/>
          <span>347-123-4567</span>
          </div>
          <div className="itemContainer">
          <Mail className='icon'/>
          <span>fabricio@gmail.com</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
