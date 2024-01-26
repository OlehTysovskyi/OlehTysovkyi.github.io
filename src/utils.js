export function callPhoneNumber() {
    const phoneNumber = "+380989684475";
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = "tel:" + phoneNumber;
    } else {
        alert("Дзвінки не підтримуються на цьому пристрої.");
    }
}

