import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontIcon } from 'material-ui';
import { Link } from 'react-router-dom';


import Routes from './routes';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      loading: true,
      collapsed: true };
  }

  render() {
    return (
      <Router>
        <div className="AppShell">
          <aside className={this.state.collapsed ? 'collapsed' : 'expanded'}>
            <nav>
              <Link to="/Home"><FontIcon className="material-icons">home</FontIcon><strong>Home</strong></Link>
              <Link to="/PastEntries"><FontIcon className="material-icons">format_list_numbered</FontIcon><strong>Past Entries</strong></Link>
              <Link to="/Feedback"><FontIcon className="material-icons">feedback</FontIcon><strong>Feedback</strong></Link>
              <Link to="/About"><FontIcon className="material-icons">description</FontIcon><strong>About</strong></Link>
            </nav>
            <nav className="footer">
              <Link to="/Settings"><FontIcon className="material-icons">settings</FontIcon><strong>Settings</strong></Link>
            </nav>
          </aside>
          <section name="sidebar-action">
              <FontIcon className="material-icons" onClick={e => this.setState({ collapsed: !this.state.collapsed })}>
              {this.state.collapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}
              </FontIcon>
          </section>

          <article>
            <Switch>
              <Route exact path="/" component={Routes.Landing._default} />
              <Route  path="/About" component={Routes.About._default}/>
              <Route  path="/Login" component={Routes.Login._default}/>
              <Route  path="/Home" component={Routes.Home._default}/>
              <Route  path="/Entry" component={Routes.Entry._default}/>
              <Route  path="/PastEntries" component={Routes.PastEntries._default}/>
              <Route  path="/Feedback" component={Routes.Feedback._default}/>
              <Route component={Routes.NotFound._default} />
            </Switch>
          </article>
        </div>
      </Router>
    )
  }
}
