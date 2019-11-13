import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './components/Title.jsx'
import Table from './components/Table.jsx'
import setTableDataAction from './actions/libItem'

class App extends Component {    
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then((data) => {            
            this.props.dispatch(setTableDataAction(data));
        })
        .catch(console.log)        
    }

    render() {
        const { dispatch, subTitle, tableData } = this.props        
        return (
            <div className="app">
            <Title dispatch = {this.props.dispatch} subTitle = {subTitle}/>
            <Table tableData = {tableData}/>
         </div>
        )
    }
}

function mapPropsToState(state) {      
    // state is the entire store's data   
    console.log("Map state to props", state);
    return {
        subTitle: state.dummy.subTitle,
        tableData: state.dummy.tableData? state.dummy.tableData: []
    };
}

export default connect(mapPropsToState)(App);