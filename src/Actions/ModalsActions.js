export const controlNewRideModalAction = (isOpen) => {
    // isOpen is bool- open or close the modal
    return {
        type: "NEW_RIDE_MODAL_VIEW",
        payload: isOpen
    }
};