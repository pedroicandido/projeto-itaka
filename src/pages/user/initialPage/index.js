import { useSelector } from 'react-redux'
import { Grid } from "@material-ui/core"
import MuiDataTables from 'mui-datatables'

const UserInitialPage = () => {
  const fakeData = useSelector( state => state.user.users)
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