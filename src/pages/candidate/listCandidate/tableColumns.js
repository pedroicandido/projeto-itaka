import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const makeColumns = () => {
  return [
    { name: "nome", label: "Nome" },
    { name: "doc", label: "CPF" },
    { name: "email", label: "Email" },
    {
      name: "id",
      label: "Detalhar",
      options: {
        customBodyRender: (value) => (
          <Button
            component={Link}
            to={`/candidate/${value}`}
            variant="contained"
            color="primary"
          >
            Visualizar
          </Button>
        ),
      },
    },
  ];
};

export default makeColumns;
