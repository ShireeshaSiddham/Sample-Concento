/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.AddEditEmployeeProject.MonthID_postRender = function (element, contentItem) {
    // Write code here.
    // Write code here.
    function updateMonth() {
        var month = contentItem.screen.EmployeeProject.c_Date;
        var Fdate = new Date(month),
        Fmnth = ("0" + (Fdate.getMonth() + 1)).slice(-2).toString("MMMM"),
                        Fday = ("0" + Fdate.getDate()).slice(-2);
        Fyear = Fdate.getFullYear();
        var FrmDate = Fyear + "-" + Fmnth + "-" + Fday;

        var month = new Array();
        month[0] = 1;
        month[1] = 2;
        month[2] = 3;
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var d = new Date(FrmDate);
        var n = month[d.getMonth()];
        if (n != undefined) {
            element.innerHTML = "June";
            contentItem.screen.EmployeeProject.MonthID = n;
        }

    }
    contentItem.dataBind("screen.EmployeeProject.c_Date", updateMonth);


};