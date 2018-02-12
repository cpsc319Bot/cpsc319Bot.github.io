function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}
let firstName = querySt("first_name");
let lastName = querySt("last_name");

document.getElementById('first_name').value = firstName;
document.getElementById('last_name').value = lastName
