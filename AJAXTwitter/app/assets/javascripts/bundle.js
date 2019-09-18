/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggleUtil = __webpack_require__(/*! ./twitter_api_util */ "./frontend/twitter_api_util.js");

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

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js")

// const followButtonAJAX = queryString => {
//   let methodName = queryString.followState === true ? "DESTROY" : "CREATE";

//   return $.ajax({
 
//     method: methodName,

//   })
// }

$(() => {
  $(".follow-toggle").each((idx, ele) => new FollowToggle(ele));
  
});

/***/ }),

/***/ "./frontend/twitter_api_util.js":
/*!**************************************!*\
  !*** ./frontend/twitter_api_util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map