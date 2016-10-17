/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewMonthTable.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.MonthTable.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.MonthTable." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

