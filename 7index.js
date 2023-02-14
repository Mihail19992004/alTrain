const parseDate = str => {
   return str.split(':').reduce((acc,time) => (60 * acc) + +time);
}

const parseFromDate = sec_num => {
    var date = new Date(0);
    date.setSeconds(sec_num); // specify value for SECONDS here
    return  date.toISOString().substring(11, 19);
}

const func = (str) => {
    const [startRequest, serverTimeString, endRequest] = str.split(' ').map(parseDate)

    const res = serverTimeString + ((endRequest - startRequest ) / 2)

    return parseFromDate(res)
}

console.log(func('15:01:00 18:09:45 15:01:40'))