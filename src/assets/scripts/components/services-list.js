const servicesButtons = document.querySelectorAll('.services-list__service-schedule');
servicesButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let buttonParent = button.closest('.services-list__service');
        let title = buttonParent.querySelector('.services-list__service-name').innerText.toLowerCase();
        let homeUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/belviso/';
        let urlWithoutSearch = homeUrl + 'zakazivanje';
        let searchParams = new URLSearchParams({ title: title });
        let urlWithSearch = urlWithoutSearch + '?' + searchParams.toString();
        window.location.href = urlWithSearch;
    });
});
