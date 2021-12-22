export default function Weekday(inputtedDate) {
  this.inputtedDate = inputtedDate;

  return(inputtedDate);

};

Weekday.prototype.isDate = function() {
  let date = new Date(this.inputtedDate);
  if(date instanceof Date && !isNaN(date.valueOf())) {
    console.log("passed");
    return("is a Date")
  } else {
    console.log("failed")
    return("is not a Date");
  };
};