import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ClassIcon from "@material-ui/icons/Class";
import {
  TOGGLE_CANDIDATE_MENU,
  TOGGLE_USER_MENU,
  TOGGLE_CLASS_MENU,
  TOGGLE_VOLUNTEER_MENU,
} from "../../redux/types";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const MenuOptions = () => {
  const candidateStateMenu = useSelector((state) => state.menu.candidate);
  const classStateMenu = useSelector((state) => state.menu.class);
  const userStateMenu = useSelector((state) => state.menu.user);
  const volunteerStateMenu = useSelector((state) => state.menu.volunteer);
  const [menu, setMenu] = useState([
    {
      title: "Dashboard",
      Icon: DashboardIcon,
      path: "/dashboard",
    },
    {
      title: "Candidato",
      path: "/candidate",
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
      title: "Voluntário",
      Icon: PersonIcon,
      path: "/volunteer",
      state: userStateMenu,
      type: TOGGLE_VOLUNTEER_MENU,
      options: [
        {
          title: "Cadastrar",
          Icon: PersonAddIcon,
          path: "/volunteer/add-volunteer",
        },
      ],
    },
    {
      title: "Usuários",
      Icon: PersonIcon,
      path: "/user",
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
  ]);

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
        path: "/candidate",
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
        title: "Voluntário",
        Icon: PersonIcon,
        path: "/volunteer",
        state: volunteerStateMenu,
        type: TOGGLE_VOLUNTEER_MENU,
        options: [
          {
            title: "Cadastrar",
            Icon: PersonAddIcon,
            path: "/volunteer/add-volunteer",
          },
        ],
      },
      {
        title: "Usuários",
        Icon: PersonIcon,
        path: "/user",
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
    ]);
  }, [candidateStateMenu, classStateMenu, userStateMenu, volunteerStateMenu]);

  return menu;
};

export default MenuOptions;
