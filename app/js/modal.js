$(document).on('hidden.bs.modal','.modal', function () {
    if($('.modal').hasClass('in')) {
        $('body').addClass('modal-open');
    }
});