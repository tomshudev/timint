var openModal = function (trackName) {
    // Get the modal
    var modal = document.getElementById('modal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var modalText = document.getElementById('modal-text');

    modal.style.display = "block";
    modalText.innerHTML = "The track <b>" + trackName + "</b> has been deleted succesfully.";

    setTimeout(function() { 
        modal.style.display = 'none';
    }, 600);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}