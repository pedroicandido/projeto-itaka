import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/signin'
import Layout from './hoc/layout'
import PrivateRoute from './routes/privateRoute'

import Error from './pages/error'


const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={SignIn} />
    <PrivateRoute path="/" component={Layout}/>
    <Route path="*" component={Error} />
  </Switch>
)

export default Routes

