


// set month short name
export const setMonthShortName = (data) => {
    if(data === 0){ return "Jan" }else
    if(data === 1){ return "Feb" }else
    if(data === 2){ return "Mar" }else
    if(data === 3){ return "Apr" }else
    if(data === 4){ return "May" }else
    if(data === 5){ return "Jun" }else
    if(data === 6){ return "Jul" }else
    if(data === 7){ return "Aug" }else
    if(data === 8){ return "Sep" }else
    if(data === 9){ return "Oct" }else
    if(data === 10){ return "Nov" }else
    if(data === 11){ return "Dec" }
    else{return false}
}

export const setStateValues = (setState , e, val ) => {
    let pasvalue = e.target.value;
    if(val){
        pasvalue = val
    }
   return setState(prevstate => ({ ...prevstate, [e.target.name]: pasvalue }));
}

