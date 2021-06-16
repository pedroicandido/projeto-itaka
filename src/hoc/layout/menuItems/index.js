import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, withRouter, useLocation } from 'react-router-dom'
import Aux from '../../../hoc/auxiliar'
import MenuList from '@material-ui/core/MenuList';
import StyledMenuItem, { useStyles } from './styles'
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const MainListMenu = (props) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const toggleCandidateMenu = (type) => dispatch(type)


  return props.menuList.map((item, index) => {
    if (item.options) {
      return (
        <Aux key={index}>
          <StyledMenuItem onClick={() => toggleCandidateMenu({type: item.type})} component={Link} to={item.path} selected={item.path === pathname}>
            <ListItemIcon>
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {item.state ? <ExpandLess /> : <ExpandMore />}
          </StyledMenuItem>

          <Collapse in={item.state} timeout="auto" unmountOnExit>
            <MenuList >
              {item.options.map((nestedItem, index) => (
                <StyledMenuItem key={index} className={classes.nested} component={Link} to={nestedItem.path} selected={nestedItem.path === pathname}>
                  <ListItemIcon>
                    <nestedItem.Icon />
                  </ListItemIcon>
                  <ListItemText primary={nestedItem.title} />
                </StyledMenuItem>
              ))}
            </MenuList>
          </Collapse>
        </Aux>
      )
    }

    return (
      <Aux key={index}>
        <StyledMenuItem component={Link} to={item.path}>
          <ListItemIcon>
            <item.Icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </StyledMenuItem>
      </Aux>
    )
  })
}

export default withRouter(MainListMenu)



{/* <Aux key={index}>
      <StyledMenuItem >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </StyledMenuItem>

      <StyledMenuItem onClick={toggleCandidateMenu}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Candidato" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </StyledMenuItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <MenuList >
          <StyledMenuItem className={classes.nested}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastro" />
          </StyledMenuItem>
        </MenuList>
      </Collapse>

      <StyledMenuItem>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuário" />
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Outros" />
      </StyledMenuItem>
    </Aux> */}

