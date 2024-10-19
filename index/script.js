function openTab(tabName) {
    // ซ่อนเนื้อหาทั้งหมด
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // แสดงเนื้อหาของแท็บที่เลือก
    document.getElementById(tabName).style.display = "block";
}
