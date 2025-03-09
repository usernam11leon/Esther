const video = document.getElementById('webcam');
const cameraButton = document.getElementById('camera-button');

cameraButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Error accessing the camera: " + err.message);
        });
});