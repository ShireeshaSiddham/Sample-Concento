/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewInformationAreaDetails.Delete_execute = function (screen)
{
    // Write code here.
    var r = confirm("Are you Sure you want to delete!");
    if (r == true) {
        // Write code here.
        var deleteRecord = screen.COR_INFORMATION_AREAs.data[0].INFORMATION_AREA_NAME;
        msls.promiseOperation(deleteRecords).then(function PromiseSuccess(PromiseResult) {
            // Set the result of the getRecordsCount function to the 
            // Label of the entity
            var Records = PromiseResult;           
        });
    }


    function deleteRecords(operation) {
        $.ajax({
            type: 'post',
            data: { deleteRecord: deleteRecord },
            url: '../deleteRecords.ashx',
            success: operation.code(function AjaxSuccess(AjaxResult) {
                operation.complete(AjaxResult);
            })
        });
    }
    // Save changes
    myapp.commitChanges().then(function success() {
        if (r == true) {           
            // If success.
            // Delete selected
            msls.showMessageBox("Delete is successfull.", { title: "Delete" });
            location.reload();
        }
    }, function fail(e) {
        // If error occurs,
        msls.showMessageBox(e.message, { title: e.title }).then(function () {
            // Cancel Changes
            myapp.cancelChanges();

        });
    });
};


myapp.ViewInformationAreaDetails.created = function (screen) {
    var count = 13;
     //Write code here.
    screen.findContentItem("Method").displayName = count;
   
};
myapp.ViewInformationAreaDetails.Method_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().css({ "width": "100px" });
    $(element).children().css({ "background-image": "url('Content/Images/book.png')" });
    $(element).children().css({ "background-repeat": "no-repeat" });
    $(element).children().css({ "background-position": "20% 20%" });    
};

//myapp.ViewInformationAreaDetails.Label1_postRender = function (element, contentItem) {
    // Write code here.
    //$(element).children().css({ "width": "100px" });
    //$(element).children().css({ "text-decoration": "underline" });
    //$(element).children().css({ "border": "none" });
    //$(element).children().css({ "background": "none" });    
//};
myapp.ViewInformationAreaDetails.INFORMATION_ARCHITECT_ID_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().css({ "text-decoration": "underline" });
};
