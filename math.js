function math_blockD(){
    let num_math = Number(document.getElementById("num_math").value);
    let num_novel = Number(document.getElementById("num_novel").value);
    let num_eng = Number(document.getElementById("num_eng").value);
    let area = document.getElementById("area").value;
    let result = ""

    // debugger
    switch (area){
        case "KV1":
            document.getElementById("result").innerHTML= num_eng + num_math + num_novel + 0.75;
        break;
        case "KV2":
            document.getElementById("result").innerHTML= num_eng + num_math + num_novel + 0.5;
        break;
        case "KV2-NT":
            document.getElementById("result").innerHTML= num_eng + num_math + num_novel + 0.25;
        break;
        case "KV3":
            document.getElementById("result").innerHTML= num_eng + num_math + num_novel + 0;
        break;
        default:
            alert("Chưa chọn khu vực")
    }
}