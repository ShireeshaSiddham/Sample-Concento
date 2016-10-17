/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCOR_INFORMATION_AREA.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.COR_INFORMATION_AREA.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.COR_INFORMATION_AREA." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

