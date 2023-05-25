$(() => {
    function reAction() {
        $("#startButton").click();
        setTimeout(function () {
            $("#stopButton").click();
        }, 6000);
    }
    reAction();
});