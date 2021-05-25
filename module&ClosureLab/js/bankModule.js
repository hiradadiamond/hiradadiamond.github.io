var accounInfoList = [];
var createAccount = (function () {
  function showListAccount() {
    var resultStr = "";
    for (var i = 0; i < accounInfoList.length; i++) {
      resultStr += "Account Name " + accounInfoList[i].accName;
      resultStr += " Deposit " + accounInfoList[i].deposit;
      resultStr += "\n";
    }
    document.getElementById("accountList").value = resultStr;
  }
  return {
    openAccount: function () {
      var acc = new Account(document.getElementById("accountName").value, document.getElementById("deposit").value);
      accounInfoList.push(acc);
      showListAccount();
    },
  };
})();

class Account {
  constructor(accName, deposit) {
    this.accName = accName;
    this.deposit = deposit;
  }
}
