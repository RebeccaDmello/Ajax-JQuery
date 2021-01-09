function fetchData(URL, input2) {
    fetch(URL).then(response => response.json()).then(imageData => {
        $("#imgdiv").html("");
        for(var i = 0; i < input2; i++) {
            var downloads = imageData.hits[i].downloads;
            var largeImgURL = imageData.hits[i].largeImageURL;
            var likes = imageData.hits[i].likes;
            var tags = imageData.hits[i].tags;
            var imgType = imageData.hits[i].type;
            var userNm = imageData.hits[i].user;
            var URLimg = imageData.hits[i].userImageURL;
            text =  "<div class='row'> "+
                        "<div class='col col-lg-4'><img src='"+ URLimg +"' alt='Images' ></div>"+
                        "<div class='col col-lg-4'><p><h3>Image Details</h3>   <br><strong>Downloads: </strong>"+ downloads +"<br>"+
                        "<strong>LargeImageURL: </strong><a href='"+largeImgURL+"'>"+largeImgURL+"</a><br>"+
                        "<strong>Image Likes: </strong>"+likes+"<br>"+
                        "<strong>Tags: </strong>"+tags+"<br>"+
                        "<strong>Image Type: </strong>"+imgType+"<br>"+
                        "<strong>User Name: </strong>"+userNm+"<br>"+
                        "<strong>URL: </strong><a href='"+URLimg+"'>"+URLimg+"</a>"+
                        "</p></div><hr>"
                    "</div>";
            $("#imgdiv").append(text);
        }
    }).catch((err) => console.log("Looks like there was a problem", err))
}