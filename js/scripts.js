(function() {
    
    var output = document.querySelector("#output"),
        //positionOutput = document.querySelector("#positionOutput"),
        findPosition = document.querySelector("#findPosition");

        if (!navigator.geolocation) {
            output.innerHTML = "Twoja przeglądarka nie wspiera geolokalizacji";
            output.classList.add("alert-danger");
        }

        function geoSuccess(pos) {
            output.innerHTML = "Twoja pozycja to na mapie bing: ";
            link = document.createElement("a");
            pos.coords.latitude 
            link.setAttribute("href","http://bing.com/maps/default.aspx?cp=" + pos.coords.latitude + "~" + pos.coords.longitude);
            link.setAttribute("target","_blank");
            link.innerHTML = "http://bing.com/maps/default.aspx?cp=" + pos.coords.latitude + "~" + pos.coords.longitude;
            output.appendChild(link);
        }

        function geoError(err) {
            var errorMessage;

            switch(err.code) {
                case err.PERMISSION_DENIED :
                    errorMessage = "Brak pozwolenia na sprawdzenie geolokalizacji";
                    break;
                case err.POSITION_UNAVAILABLE :
                    errorMessage = "Brak dostępu do sieci";
                    break;
                case err.POSITION_TIMEOUT :
                    errorMessage = "Przekroczono czas oczekiwania";
                    break;                    
            }

            output.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
        }

        var options = {
            timeout: 500,

        }

        findPosition.onclick = function(e) {
            e.stopPropagation();
            output.innerHTML = "Czekaj ... ";

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
        }

})();