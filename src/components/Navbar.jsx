import {AppBar, Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

     const Bar = styled(AppBar)`
          background: #111111;
     `

     const Tab = styled(NavLink)`
          font-size: 20px;
          margin-right: 20px;
          color: inherit;
          text-decoration: none;
     `

     return(
          <Bar position='static'>
               <Toolbar>
                    <Tab to='/'>DigitalDiary</Tab>
                    <Tab to='/all'>All Notes</Tab>
                    <Tab to='/add'>Add Note</Tab>
               </Toolbar>
          </Bar>
     )
}

export default NavBar;