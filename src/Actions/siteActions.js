export const setThemeAction = (isCurrentDark) => {
    //console.log("THEME NOW IS DARK:", isCurrentDark);
    return {
        type: "SET_THEME",
        payload: isCurrentDark
    }
};
