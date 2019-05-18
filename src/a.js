var ele = document.createElement('div');
ele.className = "a";
ele.innerHTML = "我是a.js文件！";
console.log("我是a.js文件！");
console.log(ele);
document.getElementById("app").appendChild(ele);