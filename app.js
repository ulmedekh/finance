var uiController = (function() {
  return {
    getInput: function() {
      return {
        type: document.querySelector(".add__type").value
      };
    }
  };
})();

var financeController = (function() {})();

var appController = (function(uiController, financeController) {
  var addItem = function() {
    //оруулах өгөгдлийг хүснэгтээс авна
    // авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална
    // авсан өгөгдлүүдийг веб дээрээ тохирох хэсэгт нь гаргана
    //төсвийг тооцоолно
  };

  document.querySelector(".add__btn").addEventListener("click", function() {
    console.log(uiController.getInput());
    addItem();
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      addItem();
    }
  });
})(uiController, financeController);
