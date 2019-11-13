import React, { Component, PropTypes } from 'react'
import setTableDataAction from "../actions/libItem"
import { connect } from 'react-redux'

class Table extends Component {
    constructor() {
        super();
    }

    render() {        
        const { tableData } = this.props;
        return (            
            <div className="card">
            <Header dispatch={this.props.dispatch}/>
            <table>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Event</th>
                <th>Actions</th>
              </tr>
               <tbody>
                  {tableData.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}                  
               </tbody>
            </table>
         </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.type}</td>
              <td>{this.props.data.title}</td>
              <td>{this.props.data.description}</td>
              <td>{this.props.data.author}</td>
              <td>{this.props.data.event}</td>
            </tr>
        );
    }
}

class Header extends React.Component {
    handleChange(e) {
        const { dispatch } = this.props
        fetch('http://localhost:5000?query=' + e.target.value)
            .then(res => res.json())
            .then((data) => {
                dispatch(setTableDataAction(data));
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
              <input type="text" className="input" placeholder="Search..." onChange={(e) => {this.handleChange(e)}} />
              <a><button className="input" onClick={(e) => {this.handleClick(e)}}>Add New</button></a>              
            </div>
        );
    }
}

function mapPropsToStateTable(state) {
    // state is the entire store's data   
    console.log("Table map state to props", state);
    return {
        tableData: state.dummy.tableData ? state.dummy.tableData : []
    };
}

export default connect(mapPropsToStateTable)(Table);