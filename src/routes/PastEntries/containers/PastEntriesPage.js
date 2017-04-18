import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import RaisedButton from 'material-ui/RaisedButton';
import base from '../../../config';

class PastEntries extends Component {

  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentDidMount() {
    const uid = localStorage.getItem('user');
    base.syncState(`users/${uid}/entries`, {
      context: this,
      state: 'entries',
      asArray: true
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  handleEditItem(){
    this.setState({
      entry: this.state.entry
    });
  }
  handleRemoveEntry(index){
    const newEntryList = this.state.entries;
    newEntryList.splice(index, 1);
    this.setState({
      entry: newEntryList
    })
  }

  render() {

    return (
    <h1>Past Entries

      <div>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHeaderColumn> Entry Date </TableHeaderColumn>
              <TableHeaderColumn> Emotion </TableHeaderColumn>
              <TableHeaderColumn> Rating </TableHeaderColumn>
              <TableHeaderColumn> Message </TableHeaderColumn>
              <TableHeaderColumn> Edit </TableHeaderColumn>
              <TableHeaderColumn> Delete </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.state.entries.map(entry => (
                <TableRow key={entry.key}>
                  <TableRowColumn>{entry.date} </TableRowColumn>
                  <TableRowColumn>{entry.emotion}</TableRowColumn>
                  <TableRowColumn>{entry.rating}</TableRowColumn>
                  <TableRowColumn>{entry.messages}</TableRowColumn>
                  <TableRowColumn><i className="material-icons">mode_edit</i></TableRowColumn>
                  <TableRowColumn ><i className="material-icons" onClick={this.handleRemoveEntry.bind(this)}>delete</i></TableRowColumn>

                </TableRow >
              ))
            }

            {/*{this.state.loading === true ? <h3> LOADING ... </h3> : <List items={this.state.list} remove={this.handleRemoveItem.bind(this)}/>}*/}
          </TableBody>
        </Table>
      </div>
    </h1>
    )

  }
}

export default PastEntries;
