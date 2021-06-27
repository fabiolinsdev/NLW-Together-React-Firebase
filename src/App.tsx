import { BrowserRouter, Route, Switch} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { room } from './pages/Room';
import { adminRoom } from './pages/adminRoom';

//import { AuthContextProvider } from "./contexts/AuthContext"

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={room} />

      <Route path="/admin/rooms/:id" component={adminRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
