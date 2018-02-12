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
let riskLevel = querySt("riskLevel");
let initialInvestment = querySt("initialInvestment");
let regularAmount = querySt("regularAmount");
let length = querySt("length");
let interval = querySt("interval");

if (firstName)
    document.getElementById('first_name').value = firstName;
if (lastName)
    document.getElementById('last_name').value = lastName;
if(riskLevel)
    document.getElementById('riskLevel').value = riskLevel;
if(initialInvestment)
    document.getElementById('initialInvestment').value = initialInvestment;
if(regularAmount)
    document.getElementById('regularAmount').value = regularAmount;
if(length)
    document.getElementById('length').value = length;
if(interval)
    document.getElementById('interval').value = interval;
