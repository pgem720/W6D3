//Ajax files

const followToggleUtil = {
  followButtonAJAX: el => {
    
  let methodName = el.followState === "followed" ? "DELETE" : "POST"; //switch to delete and post
  
  
  return $.ajax({
    method: methodName,
    url: `/users/${el.userId}/follow`,
    dataType: "json",
  });

  } 
}

module.exports = followToggleUtil;