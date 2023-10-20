function checkUniqueId() {
  var uniqueId = document.getElementById("uniqueID").value;
  var gdriveLink = "";
  if (uniqueId === "1ZPGS82IU9XZ6WT7") {
    gdriveLink = "https://drive.google.com/drive/folders/1Yg1ATn27BaL4U1QZ3irAQMmCPqOYbeMr";
  } else if (uniqueId === "ID2") {
    gdriveLink = "Link2";
  }

  if (gdriveLink !== "") {
    var element = document.querySelector("[data-redirect-link]");
    element.setAttribute("data-redirect-link", gdriveLink);
    const ytBTN = document.getElementById("DownDemo");
	ytBTN.style.display = "block";
  } else {
    alert("First, you need to purchase the Download Timer script to generate your unique-ID.");
  }
}