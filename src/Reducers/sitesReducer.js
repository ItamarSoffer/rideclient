/*
Saves General variables:
    1. editMode- controls if story is in edit mode or not
    2. timelineRenderCount- if true, forces to re-fetch the events from backend. turns the false after fetch.
    3. storyViewMode- timeline of table.
    4. cardsRenderCount- being changed after search in home or all, forces re-fetching relevant cards.
    5. storyExpandMode- true == expand, false == collapse.
 */
const darkModeLocalStorage = window.localStorage.getItem('darkMode');

let darkModeData = null;
if (darkModeLocalStorage === 'true'){
    darkModeData = true;
}
else if (darkModeLocalStorage === 'false'){
    darkModeData = false;
}

const siteInitState = {
    darkMode: darkModeData,
};

const sitesReducer = (state = siteInitState, action) => {

    switch(action.type){
        case "SET_THEME":
            window.localStorage.setItem('darkMode',action.payload);
            state = {...state, darkMode: action.payload};
            break;

        default:
            break;
    }

    return state;
};

export default sitesReducer;