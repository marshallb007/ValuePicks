var config = {
  apiKey: "AIzaSyCfFRzBMNfB6CD2L4muxf317IdDs5gjvWY",
  authDomain: "valuepicks-3c989.firebaseapp.com",
  databaseURL: "https://valuepicks-3c989.firebaseio.com",
  projectId: "valuepicks-3c989",
  storageBucket: "valuepicks-3c989.appspot.com",
  messagingSenderId: "1042158801483"
};
firebase.initializeApp(config);

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);


});


$('#myModal').modal({
  keyboard: false
});


$('#myModal').modal('toggle');


$('#myModal').modal('show');


$('#myModal').modal('hide');


$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
});
