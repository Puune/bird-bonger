const formatDate = (date) => {

  const addZero = (i) => i<10
  ? i = "0" + i
  : i

  date = typeof(date) === Date
    ? date
    : new Date(date);
  
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ', ' +
    addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

export default { formatDate }