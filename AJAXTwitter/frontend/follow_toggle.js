const FollowToggleUtil = require('./twitter_api_util');

class FollowToggle {
  constructor(el){
    this.$el = $(el);
    // debugger
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    // debugger
    this.render(this.followState)

    this.handleClick();
  }

  render(followState) {
    let status = followState === 'followed' ? 'unfollow' : 'follow';
    this.$el.empty();
    this.$el.append(status);
  }

  handleClick() {
    this.$el.on("click", e => {
      
      e.preventDefault();
      const successCB = response => {
        this.followState = this.followState === "followed" ? "unfollowed" : "followed";
        this.render(this.followState);
      }
      FollowToggleUtil.followButtonAJAX({userId:this.userId,
        followState:this.followState}).then(successCB);
      // debugger
    })
    

  }
  


} 


   



// --- Button ACTIONS - follow, unfollow, save ---

const toggleFollow = () => {
  const $userId = $('.follow-toggle .userId');
  const $followState = $(".follow-toggle .followState");

}








module.exports = FollowToggle;