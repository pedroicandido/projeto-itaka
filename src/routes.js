import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/signin'
import Layout from './hoc/layout'

import Error from './pages/error'


const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={SignIn} />
    <Route component={Layout}/>
    <Route component={Error} />
  </Switch>
)

export default Routes

