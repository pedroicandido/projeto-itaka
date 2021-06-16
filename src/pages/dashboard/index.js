import { Button, Grid, Typography } from '@material-ui/core'
import Card from '../../components/card'

const Dashboard = () => {

  return (
    <Grid container>
      <Grid item xl={3} lg={4}>
        <Card>
          <Grid container>
            <Grid item xl={9} lg={9} md={6} sm={6} xs={6}>
              <Grid contaier direction="column">
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography>Número de Alunos Ativos</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography component="h3" variant="h6">358</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Button fullWidth color="primary">Acessar lista com nomes</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid xl={3} lg={3} md={6} sm={6} xs={6} style={{border:'1px solid red'}}>
            image
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard