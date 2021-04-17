/*
Control opening and closing windows in story.
All values are true or false, except the EditEvent:
    the EditEvent is shown by the event_id that is edited, to deal with collisions.
 */
const siteInitState = {
    showNewRideModal: false,
};

const modalsReducer = (state = siteInitState, action) => {

    switch(action.type){
        case "NEW_RIDE_MODAL_VIEW":
            state = {...state, showNewRideModal: action.payload};
            break;


        default:
            break;
    }

    return state;
};

export default modalsReducer;