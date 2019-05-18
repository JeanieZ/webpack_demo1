var ele = document.createElement('div');
ele.className = "b";
ele.innerHTML = "我是b.js文件！";
console.log("我是b.js文件！");
document.getElementById("app").appendChild(ele);