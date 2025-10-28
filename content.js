function perform(){
    setTimeout(()=>{
        let v = document.querySelector("video");
        let b = document.getElementById("nextCourseItemBtn");
        if (v && b){
            v.addEventListener("ended", ()=>{
                console.log("video ended!");
                b.click();
                perform();
            })
            console.log("waiting the video to finish");
        }
    }, 5000)
}

perform();