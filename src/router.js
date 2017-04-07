import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontIcon } from 'material-ui';

import Routes from './routes';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: true };
  }

  render() {
    return (
      <Router>
        <div className="AppShell">
          <aside className={this.state.collapsed ? 'collapsed' : 'expanded'}>
            <nav>
              <a href="/Home"><FontIcon className="material-icons">home</FontIcon><strong>Home</strong></a>
              <a href="/questions"><FontIcon
                className="material-icons">question_answer</FontIcon><strong>Questions</strong></a>
              <a href="/queue"><FontIcon className="material-icons">format_list_numbered</FontIcon><strong>Help
                Queue</strong></a>
            </nav>
            <nav className="footer">
              <a href="/settings"><FontIcon className="material-icons">settings</FontIcon><strong>Settings</strong></a>
            </nav>
          </aside>
          <section name="sidebar-action">
            <FontIcon className="material-icons" onClick={e => this.setState({ collapsed: !this.state.collapsed })}>{this.state.collapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</FontIcon>
          </section>

          <article>
            <Switch>
              <Route exact path="/" component={Routes.Landing._default} />
              <Route exact path="/About" component={Routes.About._default}/>
              {/*<Route exact path="/emoji" component={EmojiPage}/>*/}
              {/*<Route exact path="/message" component={MessagePage}/>*/}
              {/*<Route exact path="/rating" component={RatingPage}/>*/}
              <Route exact path="/Login" component={Routes.Login._default}/>
              <Route exact path="/Home" component={Routes.Home._default}/>
              <Route exact path="/Entry" component={Routes.Entry._default}/>
              <Route component={Routes.NotFound._default} />
            </Switch>
          </article>
        </div>

      </Router>
    )
  }
}


// state = {
//   logged: true
// };
// handleChange = (event, logged) => {
//   this.setState({logged: logged});
// };
// constructor(props) {
//   super(props);
//   this.state = {open: false}
// }
// handleToggle = () => this.setState({ open: !this.state.open });

