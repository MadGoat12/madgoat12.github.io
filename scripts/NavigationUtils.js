var NavigationUtilsClass=function(){"use strict";function NavigationUtilsClass(params){babelHelpers.classCallCheck(this,NavigationUtilsClass);this.route=null,this._loggedUser=null;this._authFired=!1;this.routeName=null;this.page=null;this.context=null;this.pages=["view2","participantes-view","usuarios-view","reportes-view"];this.userPageListeners=[];this.animations={"push-left":{entry:"slide-from-right-animation",exit:"slide-left-animation"},"push-right":{entry:"slide-from-left-animation",exit:"slide-right-animation"}}}babelHelpers.createClass(NavigationUtilsClass,[{key:"addUserPageListener",value:function addUserPageListener(navigateTo,user,page,animation){if(page){if(user&&this._loggedUser&&this._authFired&&this.page==page){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}else if(!user&&!this._loggedUser&&this._authFired&&this.page==page){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}}else{if(user&&this._loggedUser&&this._authFired){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}else if(!user&&!this._loggedUser&&this._authFired){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}}this.userPageListeners.push({navigateTo:navigateTo,user:user,page:page,animation:animation})}},{key:"launchUserPageListeners",value:function launchUserPageListeners(){for(var i=0;i<this.userPageListeners.length;i++){var navigateTo=this.userPageListeners[i].navigateTo,user=this.userPageListeners[i].user,page=this.userPageListeners[i].page,animation=this.userPageListeners[i].animation;if(page){if(user&&this._loggedUser&&this._authFired&&this.page==page){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}else if(!user&&!this._loggedUser&&this.page==page&&this._authFired){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}}else{if(user&&this._loggedUser&&this._authFired){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}else if(!user&&!this._loggedUser&&this._authFired){NavigationUtils.navigateTo(navigateTo,null,NavigationUtils.animations[animation])}}}}},{key:"setLoggedUser",value:function setLoggedUser(user){this._loggedUser=user;this.launchUserPageListeners()}},{key:"setPage",value:function setPage(page){this.page=page;this.launchUserPageListeners()}},{key:"setRoute",value:function setRoute(context,route,routeName,routeParams,paramsName){this.context=context;this.routeName=routeName;this.route=route;this.routeParams=routeParams;this.paramsName=paramsName}},{key:"navigate",value:function navigate(string,params,options){if(!this.route){console.error("No route object has been set to NavigationUtils")}if(string.startsWith("/")){string=string.substring(1)}var context=this.context,pName=this.context[this.routeName].path;if(pName.startsWith("/")){pName=pName.substring(1)}var origin=pName.split("/")[0];if(origin){var to=this.pages.indexOf(string),from=this.pages.indexOf(origin);if(to<from){context.set("pageAnimation",{entry:"slide-from-left-animation",exit:"slide-right-animation"})}else{context.set("pageAnimation",{entry:"slide-from-right-animation",exit:"slide-left-animation"})}}if(options){if(options.entry&&options.exit){context.set("pageAnimation",{entry:options.entry,exit:options.exit})}if(options.animation){context.set("pageAnimation",NavigationUtils.animations[options.animation])}}this.context.set(this.routeName+".path",string);if(params){this.context.set(this.paramsName,params)}else{this.context.set(this.paramsName,{})}}},{key:"navigateTo",value:function navigateTo(string,origin,options,params){if(!this.route){console.error("No route object has been set to NavigationUtils")}if(string.startsWith("/")){string=string.substring(1)}if(string.startsWith(".")){string=this.route.path+"/"+string.substring(1)}if(this.context[this.routeName].path==string&&{}!=this.context[this.paramsName]){return}var context=this.context;if(!origin){var pName=this.context[this.routeName].path;if(pName.startsWith("/")){pName=pName.substring(1)}origin=pName.split("/")[0];console.log(origin)}if(origin){var to=this.pages.indexOf(string),from=this.pages.indexOf(origin);if(to<from){context.set("pageAnimation",{entry:"slide-from-left-animation",exit:"slide-right-animation"})}else{context.set("pageAnimation",{entry:"slide-from-right-animation",exit:"slide-left-animation"})}}if(options){if(options.entry&&options.exit){context.set("pageAnimation",{entry:options.entry,exit:options.exit})}if(options.animation){context.set("pageAnimation",NavigationUtils.animations[options.animation])}}this.context.set(this.paramsName,{});if(params){this.context.set(this.routeName+".__queryParams",params)}this.context.set(this.routeName+".path",encodeURI(string))}}]);return NavigationUtilsClass}(),NavigationUtils=null;function _initNavigationUtils(context,route,routeName,routeParams,paramsName){if(!NavigationUtils){NavigationUtils=new NavigationUtilsClass;NavigationUtils.setRoute(context,route,routeName,routeParams,paramsName)}}