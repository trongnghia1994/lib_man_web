import { DUMMY_ACTION, SET_TABLE_DATA_ACTION } from '../actions/libItem'

function dummy(state = [], action) {
    switch (action.type) {
        case DUMMY_ACTION:                     
            return {
                subTitle: action.subTitle
            }
    	case SET_TABLE_DATA_ACTION:                     
            return {
                tableData: action.tableData
            }
        default:
            return state
    }
}

export default dummy;