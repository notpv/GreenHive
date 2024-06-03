let pic = document.getElementById("change-pic");
let ip_pic = document.getElementById("input-file");

ip_pic.onchange = function() {
    pic.src = URL.createObjectURL(ip_pic.files[0]);
}

function add_photo() {
    let pic = document.getElementById("img");
    let ip_pic = document.getElementById("input-pic");

    ip_pic.onchange = function() {
    pic.src = URL.createObjectURL(ip_pic.files[0]);
    }
    pic.id=Math.random().toString;
    ip_pic.id=Math.random().toString;
}

function new_post() {
    let newEle = document.createElement("div");
    newEle.className = "feed-box"
    newEle.innerHTML = '<div class="feed-img"><img src="../static/add.jpeg" alt="Feed 1" style="cursor:pointer" id="img"></div><div class="feed-text"><span>23 May 2024 / Feed</span><div id="ip-div"><input type="text" placeholder="INSERT TITLE" style="height:30px" id="title"></div><div id="desc-div"><input type="text" placeholder="INSERT DESCRIPTION" style="height:30px; margin: 20px 0 20px 0" id="desc"></div><div id="btn-div" style="display: flex"><button style="height: 30px; background-color: #BC4749; color: white;" onclick="save_post()">Save</button><input type="file" onclick="add_photo()" id="input-pic"></div></div>';
    newEle.id = "newpost";
    let parent_ele = document.getElementById("feed-container");
    parent_ele.appendChild(newEle);
}

function save_post() {
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    let ipdiv = document.getElementById("ip-div");
    let descdiv = document.getElementById("desc-div");
    let btndiv = document.getElementById("btn-div");
    ipdiv.innerHTML = '<a href="#" class="feed-title">' + title + "</a>";
    descdiv.innerHTML = "<p>" + desc + "</p>";
    btndiv.innerHTML = '<a href="#">Read More</a>';
    ipdiv.id=Math.random().toString;
    descdiv.id=Math.random().toString;
    btndiv.id=Math.random().toString;
    // newEle.innerHTML = '<div class="feed-img"><img src="trash.jpeg" alt="Feed 1"></div><div class="feed-text"><span>31 March 2024 / Feed</span><a href="#" class="feed-title">' + title + '</a><p>' + desc + '</p><a href="#">Read More</a></div>';
}