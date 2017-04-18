import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FontIcon } from 'material-ui';


import Routes from './routes';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      loading: true,
      collapsed: true };
  }

  componentDidMount(){
    // this.ref = base.syncState(`users/${base.auth().currentUser.uid}/entries`, {
    //   context: this,
    //   state: 'entries',
    //   asArray: true,
    //   then(){
    //     this.setState({loading: false})
    //   }
    // });
  }

  render() {
    return (
      <Router>
        <div className="AppShell">
          <aside className={this.state.collapsed ? 'collapsed' : 'expanded'}>
            <nav>
              <a href="/Home"><FontIcon className="material-icons">home</FontIcon><strong>Home</strong></a>
              <a href="/PastEntries"><FontIcon className="material-icons">format_list_numbered</FontIcon><strong>Past Entries</strong></a>
              <a href="/Feedback"><FontIcon className="material-icons">feedback</FontIcon><strong>Feedback</strong></a>
              <a href="/About"><FontIcon className="material-icons">description</FontIcon><strong>About</strong></a>
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
              <Route  path="/About" component={Routes.About._default}/>
              {/*<Route exact path="/emoji" component={EmojiPage}/>*/}
              {/*<Route exact path="/message" component={MessagePage}/>*/}
              {/*<Route exact path="/rating" component={RatingPage}/>*/}
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
