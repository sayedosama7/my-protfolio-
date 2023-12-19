import React from 'react'

const Notifacation = () => {


    function createCustomAlert(txt) {
        // step 1
        var alertContainer = document.createElement("div");
        alertContainer.id = "alertCont";
        alertContainer.className = "alertBox";
        // step 2
        var btnClose = document.createElement("span");
        btnClose.className = "alertClose";
        btnClose.innerHTML = '<i class="fas fa-times"></i>';
        btnClose.onclick = function () {
            document.body.removeChild
                (document.getElementById("alertCont"));
        }

        alertContainer.appendChild(btnClose);
        // step 3
        var notificationSign = document.createElement("span");
        notificationSign.className = "notification-sign";
        notificationSign.innerHTML = '<i class="far fa-bell"></i>';

        alertContainer.appendChild(notificationSign);

        // step 4   
        var alertTitle = document.createElement("h1");
        alertTitle.textContent = "sayed osama";

        alertContainer.appendChild(alertTitle);

        // step 5
        var alertbody = document.createElement("p");
        alertbody.textContent = txt;

        alertContainer.appendChild(alertbody);

        // step 6

        document.body.appendChild(alertContainer);

        // step 7
        var autoAction = setTimeout(function () {
            document.body.removeChild
                (document.getElementById("alertCont"));
        }, 5000);

        alertContainer.onmouseover = function () {
            clearTimeout(autoAction);
        };

    }

    window.alert = function (txt) {
        createCustomAlert(txt);
    }


    alert("welcome to my portfolio");




    return (
        <div>

            <div class="container-fluid">


                {/* <div class="alertBox">
        <span class="alertClose">&times;</span>
        <span class="notification-sign"><i class="far fa-bell"></i></span>
        <h1>website name</h1>
        <p>����� ������� ��� 9</p>
    </div> */}



            </div>
        </div>
    )
}

export default Notifacation