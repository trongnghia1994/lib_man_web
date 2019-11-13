export const DUMMY_ACTION = 'DUMMY'
export const SET_TABLE_DATA_ACTION = 'SET_TABLE_DATA'

export function dummyAction(text) {
    return {
        type: DUMMY_ACTION,
        subTitle: text
    };
}

export default function setTableDataAction(tableData) {
    return {
        type: SET_TABLE_DATA_ACTION,
        tableData: tableData
    };
}