class DashBoard{
    tieuDe = "trang chủ";

    taiDuLieu(){
        setTimeout(function(){
            console.log(this.tieuDe);

        }, 1000);
    }
}

let dash = new DashBoard();
dash.taiDuLieu();