import { useSelector } from 'react-redux'
import { Grid, Button } from "@material-ui/core"
import MuiDataTables from 'mui-datatables'
import { Link } from 'react-router-dom'

const ListCandidate = () => {
  const fakeData = useSelector(state => state.user.users)
  const columns = [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'Email' }, {
    name: 'id', label: 'Detalhar', options: {
      customBodyRender: (value) =>
        <Button
          component={Link}
          to={`/candidate/${value}`}
          variant="contained"
          color="primary">Visualizar
        </Button>
    }
  }]
  return (
    <Grid container>
      <Grid item xl={12} lg={12} >
        <MuiDataTables data={fakeData} columns={columns} title="Relacionamento de Candidatos" />
      </Grid>
    </Grid>
  )
}

export default ListCandidate