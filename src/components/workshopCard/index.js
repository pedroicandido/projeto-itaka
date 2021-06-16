import Card from "../card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import natacaoIcon from '../../assets/customIcons/natacao.png'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import { Button } from "@material-ui/core";

const WorkshopCard = () => {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xl={2} lg={2} md={2}>
              <img src={natacaoIcon} width="100%" height="100%" />
            </Grid>
            <Grid item xl={6} lg={4} md={4}>
              <Typography component="h1" variant="h6">Oficina de Natação</Typography>

            </Grid>
            <Grid item xl={4} lg={4} md={4}>
              <Typography component="h2" variant="h6" style={{ fontSize: '17px' }}>Professor: Pedro</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12}>
              Lista atualizada com o nome, telefone e idade do aluno apto a participar.
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={2}>
                  <AccessTimeIcon />
                </Grid>
                <Grid item xl={10}><Typography>Atualizado há 2 hrs</Typography></Grid>
              </Grid>
            </Grid>

            <Grid item >
              <Button startIcon={<DoneIcon />}>Acessar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WorkshopCard;
