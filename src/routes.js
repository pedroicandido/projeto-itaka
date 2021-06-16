import { Switch, Route, Redirect } from 'react-router-dom'
import CandidateRegister from './pages/candidate/register'
import UserRegister from './pages/addUser'
import SignIn from './pages/signin'
import Dashboard from './pages/dashboard'
import Course from './pages/course'
import WorkshopInitialPage from './pages/course/initialPage'
import UserInitialPage from './pages/user/initialPage'
import Error from './pages/error'


const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={SignIn} />
    <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/candidate/register" component={CandidateRegister} />
    <Route exact path="/user" component={UserInitialPage} />
    <Route path="/user/register" component={UserRegister} />
    <Route exact path="/course" component={WorkshopInitialPage} />
    <Route path="/course/register" component={Course} />
    <Route component={Error} />
  </Switch>
)

export default Routes

