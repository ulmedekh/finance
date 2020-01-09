var uiController = (function() {})();

var financeController = (function() {})();

var appController = (function(uiController, financeController) {
  var addItem = function() {
    //оруулах өгөгдлийг хүснэгтээс авна
    // авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална
    // авсан өгөгдлүүдийг веб дээрээ тохирох хэсэгт нь гаргана
    //төсвийг тооцоолно
    alert("beep");
  };

  document.querySelector(".add__btn").addEventListener("click", function() {
    addItem();
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      addItem();
    }
  });
})(uiController, financeController);
