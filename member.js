function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.value;
    if (memberValue == "yes") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}