$('document').ready(function() {
    $('button').click(function() {
        console.log("clicked");
        var input1 = $("#input1").val();
        var input2 = $("#input2").val();
        var API_KEY = '19145990-b4df2b31f4631e8d7a03c4576';
        var URL = "https://pixabay.com/api/?q=yellow&key=" + API_KEY;
        fetchData(URL, input2);
    });
});