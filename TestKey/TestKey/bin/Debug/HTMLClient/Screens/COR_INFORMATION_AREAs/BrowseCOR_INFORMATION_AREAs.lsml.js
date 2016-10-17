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
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
    $(element).css({ "min-width": 5 });
    $(element).css({"bottom":10});
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList1_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
    $(element).css({ "min-width": 5 });
    $(element).css({ "bottom": 10 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList2_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
    $(element).css({ "min-width": 5 });
    $(element).css({ "bottom": 10 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList3_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("add");
    $(element).css({ "min-width": 5 });
    $(element).css({ "bottom": 10 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList4_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
    $(element).css({ "min-width": 15 });
    $(element).css({ "bottom": 10 });
    $(element).css({ "left": 90 });
};
myapp.BrowseCOR_INFORMATION_AREAs.SearchSubject_Area_Groups_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
    $(element).css({ "min-width": 15 });
    $(element).css({ "bottom": 10 });
    $(element).css({ "left": 90 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList5_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
    $(element).css({ "min-width": 15 });
    $(element).css({ "bottom": 10 });
    $(element).css({ "left": 90 });
};
myapp.BrowseCOR_INFORMATION_AREAs.ShowCOR_INFORMATION_AREAList6_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("search");
    $(element).css({ "min-width": 15 });
    $(element).css({ "bottom": 10 });
    $(element).css({ "left": 90 });
};
myapp.BrowseCOR_INFORMATION_AREAs.Label_postRender = function (element, contentItem)
{
    $(element).css({ "bottom": 5 });
    $(element).css({ "left": 90 });
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
    $(element).css({ "min-width": 1 });
};