import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClassIcon from '@material-ui/icons/Class';
import { TOGGLE_CANDIDATE_MENU, TOGGLE_USER_MENU, TOGGLE_CLASS_MENU } from '../../redux/types'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const MenuOptions = () => {
  const candidateStateMenu = useSelector(state => state.menu.candidate)
  const classStateMenu = useSelector(state => state.menu.class)
  const userStateMenu = useSelector(state => state.menu.user)
  const [menu, setMenu] = useState([
    {
      title: "Dashboard",
      Icon: DashboardIcon,
      path: "/dashboard",
    },
    {
      title: "Candidato",
      Icon: DashboardIcon,
      state: candidateStateMenu,
      type: TOGGLE_CANDIDATE_MENU,
      options: [
        {
          title: "Cadastro",
          Icon: ShoppingCartIcon,
          path: "/candidate/register",
        },
      ],
    },
    {
      title: "Oficinas",
      Icon: ClassIcon,
      path: "/course",
      state: classStateMenu,
      type: TOGGLE_CLASS_MENU,
      options: [
        {
          title: "Cadastro",
          Icon: ShoppingCartIcon,
          path: "/course/register",
        },
      ],
    },
    {
      title: "Usuários",
      Icon: PersonIcon,
      path: '/user',
      state: userStateMenu,
      type: TOGGLE_USER_MENU,
      options: [
        {
          title: "Cadastrar",
          Icon: PersonAddIcon,
          path: "/user/register",
        },
      ],
    },
  ])

  useEffect(() => {
    setMenu([
      {
        title: "Dashboard",
        Icon: DashboardIcon,
        path: "/dashboard",
      },
      {
        title: "Candidato",
        Icon: DashboardIcon,
        state: candidateStateMenu,
        type: TOGGLE_CANDIDATE_MENU,
        options: [
          {
            title: "Cadastro",
            Icon: ShoppingCartIcon,
            path: "/candidate/register",
          },
        ],
      },
      {
        title: "Oficinas",
        Icon: ClassIcon,
        path: "/course",
        state: classStateMenu,
        type: TOGGLE_CLASS_MENU,
        options: [
          {
            title: "Cadastro",
            Icon: ShoppingCartIcon,
            path: "/course/register",
          },
        ],
      },
      {
        title: "Usuários",
        Icon: PersonIcon,
        path: '/user',
        state: userStateMenu,
        type: TOGGLE_USER_MENU,
        options: [
          {
            title: "Cadastrar",
            Icon: PersonAddIcon,
            path: "/user/register",
          },
        ],
      },
    ])
  }, [candidateStateMenu, classStateMenu, userStateMenu])

  return menu;
}

export default MenuOptions