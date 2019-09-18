const FollowToggle = require("./follow_toggle")

// const followButtonAJAX = queryString => {
//   let methodName = queryString.followState === true ? "DESTROY" : "CREATE";

//   return $.ajax({
 
//     method: methodName,

//   })
// }

$(() => {
  $(".follow-toggle").each((idx, ele) => new FollowToggle(ele));
  
});