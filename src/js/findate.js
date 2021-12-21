export default function Weekday(inputtedDate) {
  this.inputtedDate = inputtedDate;

  return(inputtedDate);

};

Weekday.prototype.isDate = function() {
  let date = new Date(this.inputtedDate);
  if(date instanceof Date && !isNaN(date.valueOf())) {
    return("is a Date")
  } else {
    return("is not a Date");
  };
};