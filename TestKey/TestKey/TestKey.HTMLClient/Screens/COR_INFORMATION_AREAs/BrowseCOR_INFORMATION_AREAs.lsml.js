/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseCOR_INFORMATION_AREAs.COR_INFORMATION_AREAList_postRender = function (element, contentItem) {
    // Write code here.
    $(element).css("font-family", "Times, serif");
    $(element).css("font-size", "14px");
};

myapp.BrowseCOR_INFORMATION_AREAs.InformationAreasTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var s = contentItem.screen.InformationAreas;
    if (s.isLoaded && s.data[0] != null) {
        s.selectedItem = s.data[0];
    }
};
myapp.BrowseCOR_INFORMATION_AREAs.Subject_Area_GroupsTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var s = contentItem.screen.Subject_Area_Groups;
    if (s.isLoaded && s.data[0] != null) {
        s.selectedItem = s.data[0];
    }
};
myapp.BrowseCOR_INFORMATION_AREAs.Subject_AreasTemplate_postRender = function (element, contentItem) {
    // Write code here.  
    var s = contentItem.screen.Subject_Areas;
    if (s.isLoaded && s.data[0] != null) {
        s.selectedItem = s.data[0];
    }
};
myapp.BrowseCOR_INFORMATION_AREAs.DatasetsTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var s = contentItem.screen.Datasets;
    if (s.isLoaded && s.data[0] != null) {
        s.selectedItem = s.data[0];
    }
};
myapp.BrowseCOR_INFORMATION_AREAs.Add_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList1_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList2_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
    //$(element).css({ "min-width": 5 });
    //$(element).css({ "bottom": 10 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList3_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
};
//myapp.BrowseCOR_INFORMATION_AREAs.Search_postRender = function (element, contentItem) {
//    // Write code here.
//    $(element).children().addClass("search");
//};
myapp.BrowseCOR_INFORMATION_AREAs.SearchSubject_Area_Groups_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList5_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList6_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
};
myapp.BrowseCOR_INFORMATION_AREAs.Label_postRender = function (element, contentItem)
{

    // Write code here.
    msls.promiseOperation(getRecordsCount).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the getRecordsCount function to the 
        // Label of the entity
        var Records = PromiseResult;
        element.innerText =  Records;
    });
};

function getRecordsCount(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../getRecordsCount.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}

myapp.BrowseCOR_INFORMATION_AREAs.View_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("View");
};

myapp.BrowseCOR_INFORMATION_AREAs.Label1_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
  
};

myapp.BrowseCOR_INFORMATION_AREAs.Label2_postRender = function (element, contentItem) {
    // Write code here.
    msls.promiseOperation(getRecordsCount).then(function PromiseSuccess(PromiseResult) {
        var Records = PromiseResult;
        element.innerText = Records;
    });
};
myapp.BrowseCOR_INFORMATION_AREAs.SubjectAreaGroup_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
};
myapp.BrowseCOR_INFORMATION_AREAs.SubjectArea_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
};
myapp.BrowseCOR_INFORMATION_AREAs.Dataset_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
};

myapp.BrowseCOR_INFORMATION_AREAs.Group3_postRender = function (element, contentItem) {
    // Write code here.
    //$(element).parent().on("popupcreate", function (e) {
    //    $(e.target).popup({
    //        positionTo: "window",     // position the popup in the center of the browser window
    //        dismissible: false        // prevent the popup from being dismissable
    //    });
    //});
};
myapp.BrowseCOR_INFORMATION_AREAs.Label3_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
    $(element).parent().find("label").css({ "color": "white" });
};

myapp.BrowseCOR_INFORMATION_AREAs.Close_execute = function (screen) {
    // Write code here.
    screen.closePopup();
   
};

//myapp.BrowseCOR_INFORMATION_AREAs.Clear_execute = function (screen) {
//    // Write code here.
//      screen.InformationAreas.enableSearch = screen.InformationAreas.enableSearch === false;
//};
myapp.BrowseCOR_INFORMATION_AREAs.Search1_postRender = function (element, contentItem) { 
    // Write code here.
    $(element).children().addClass("search");
};
myapp.BrowseCOR_INFORMATION_AREAs.Search_execute = function (screen) {
    // Write code here.
    screen.InformationAreas.enableSearch = screen.InformationAreas.enableSearch===false;
};
myapp.BrowseCOR_INFORMATION_AREAs.Edit_execute = function (screen) {
    // Write code here.
    screen.closePopup("Group3");
    screen.showPopup("Group11");

};
myapp.BrowseCOR_INFORMATION_AREAs.Label4_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().find("label").css({ "font-size": "20px" });
    $(element).parent().find("label").css({ "color": "white" });
};

myapp.BrowseCOR_INFORMATION_AREAs.Cancel_execute = function (screen) {
    // Write code here.
    screen.closePopup("Group11");
    screen.showPopup("Group3");
};
myapp.BrowseCOR_INFORMATION_AREAs.Group12_postRender = function (element, contentItem) {
    // Write code here.
    $(element).css("background-color", "steelblue");
    $(element).css("font-weight", "bold");
};
myapp.BrowseCOR_INFORMATION_AREAs.Group10_postRender = function (element, contentItem) {
    // Write code here.
    $(element).css("font-weight", "bold");
    $(element).css("background-color", "steelblue");
};