import WorkshopCard from '../../../components/workshopCard'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import of from '../../../assets/images/of.jpg'
import useStyles from './styles'
import Button from '@material-ui/core/Button'
import { OPEN_CLASS_MENU } from '../../../redux/types'

const WorkshopInitialPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClickNewWorkshop = () => {
    dispatch({ type: OPEN_CLASS_MENU })
    history.push('/course/register')
  }
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className={classes.container}>
          <Avatar src={of} className={classes.avatar} />
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container alignItems="center" justify="flex-end">
          <Grid item xl={1} lg={2} md={3} sm={3} xs={3}><Button fullWidth variant="contained" color="primary" onClick={handleClickNewWorkshop}>NOVA OFICINA</Button></Grid>
        </Grid>
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
      <Grid item xl={4} lg={4}>
        <WorkshopCard />
      </Grid>
    </Grid>
  )
}

export default WorkshopInitialPage