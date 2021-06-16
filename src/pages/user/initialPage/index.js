import Card from '../../../components/card'
import { Grid } from "@material-ui/core"
import MuiDataTables from 'mui-datatables'

const UserInitialPage = () => {
  const fakeData = [{ id: 1, name: 'Pedro Igor', email: 'pedro@mail.com' }, { id: 2, name: 'Juliana', email: 'juju@mail.com' }, { id: 3, name: 'Hiago Miguel', email: 'hiao@mail.com' }]
  const columns = [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'Email' }]
  return (
      <Grid container>
        <Grid item xl={12} lg={12} >
          <MuiDataTables data={fakeData} columns={columns} title="Lista de Usuários" />
        </Grid>
      </Grid>
  )
}

export default UserInitialPage