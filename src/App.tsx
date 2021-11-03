import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import EventsExamplePage from './components/EventsExamplePage';
import UserItemPage from './components/UserItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <NavLink to='/users'>Пользователи</NavLink>
          <NavLink to='/todos'>Список дел</NavLink>
          <NavLink to='/events'>Примеры events</NavLink>
        </div>
        <Route path='/users' exact>
          <UsersPage />
        </Route>
        <Route path='/users/:id' exact>
          <UserItemPage />
        </Route>
        <Route path='/todos' exact>
          <TodosPage />
        </Route>
        <Route path='/events' exact>
          <EventsExamplePage />
        </Route>

      </div>
    </BrowserRouter>
  )
}

export default App;
