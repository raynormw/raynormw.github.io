// Week4 Day4 Menyusun Layout HTML dengan JavaScript | Tirta Wirya Putra
// div id = "content"
var content = document.createElement("div");
var contentId = document.createAttribute("id");
contentId.value = "content";
content.setAttributeNode(contentId);
document.getElementById("main").appendChild(content);

// div class = "content-post"
var contentPost = document.createElement("div");
contentPost.setAttribute("class", "content-post");
content.appendChild(contentPost);

// h1
var h1 = document.createElement("h1");
contentPost.appendChild(h1);

// span
var span = document.createElement("span");
contentPost.appendChild(span);

// paragraph
var paragraph = document.createElement("p");
var paragraphText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
paragraph.appendChild(paragraphText);
contentPost.appendChild(paragraph);

// button
var button = document.createElement("button");
var buttonText = document.createTextNode("Share this Post");
button.appendChild(buttonText);
button.setAttribute("class", "share-post-btn");
contentPost.appendChild(button);

// content-post 2 dan children
var contentPostDua = contentPost.cloneNode(true);
content.appendChild(contentPostDua);

// text h1
var h1Text = document.getElementsByTagName("h1");
h1Text[0].textContent = "Judul Post";
h1Text[1].textContent = "Judul Post 2";

// text span
var spanText = document.getElementsByTagName("span");
spanText[0].textContent = "Published on 12 May 2016";
spanText[1].textContent = "Published on 13 May 2016";

// event click button
var share = document.getElementsByClassName("share-post-btn");
for (i = 0; i < share.length; i++) {
  share[i].addEventListener('click', function() {
  alert("You have shared this post!");
	});
}