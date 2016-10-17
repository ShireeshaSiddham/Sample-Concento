/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditCOR_INFORMATION_AREA.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            value: lightSwitchApplication.AddEditCOR_INFORMATION_AREA
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        INFORMATION_AREA_ID: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_AREA_NAME: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_AREA_DESCRIPTION: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_DESCRIPTION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_ARCHITECT_ID: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_ARCHITECT_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        OLD_REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "OLD_REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        REVIEWED_BY: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        REVIEWED_ON: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        CREATED_BY: {
            _$class: msls.ContentItem,
            _$name: "CREATED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        CREATED_ON: {
            _$class: msls.ContentItem,
            _$name: "CREATED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        MODIFIED_ON: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        MODIFIED_BY: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_INFORMATION_AREA
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCOR_INFORMATION_AREA, {
        /// <field>
        /// Called when a new AddEditCOR_INFORMATION_AREA screen is created.
        /// <br/>created(msls.application.AddEditCOR_INFORMATION_AREA screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCOR_INFORMATION_AREA],
        /// <field>
        /// Called before changes on an active AddEditCOR_INFORMATION_AREA screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCOR_INFORMATION_AREA screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCOR_INFORMATION_AREA],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("left"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_ID"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_NAME"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_DESCRIPTION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_DESCRIPTION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_DESCRIPTION"); }],
        /// <field>
        /// Called after the INFORMATION_ARCHITECT_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_ARCHITECT_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("INFORMATION_ARCHITECT_ID"); }],
        /// <field>
        /// Called after the REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("REVIEW_STATUS"); }],
        /// <field>
        /// Called after the OLD_REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OLD_REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("OLD_REVIEW_STATUS"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("right"); }],
        /// <field>
        /// Called after the REVIEWED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("REVIEWED_BY"); }],
        /// <field>
        /// Called after the REVIEWED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("REVIEWED_ON"); }],
        /// <field>
        /// Called after the CREATED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("CREATED_BY"); }],
        /// <field>
        /// Called after the CREATED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("CREATED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("MODIFIED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_INFORMATION_AREA().findContentItem("MODIFIED_BY"); }]
    });

    lightSwitchApplication.BrowseCOR_INFORMATION_AREAs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        COR_INFORMATION_AREAList: {
            _$class: msls.ContentItem,
            _$name: "COR_INFORMATION_AREAList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "COR_INFORMATION_AREAList",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group3",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Label: {
            _$class: msls.ContentItem,
            _$name: "Label",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: String
        },
        ShowCOR_INFORMATION_AREAList4: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList4",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Group3",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        InformationAreas: {
            _$class: msls.ContentItem,
            _$name: "InformationAreas",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
                _$entry: {
                    elementType: lightSwitchApplication.InformationArea
                }
            }
        },
        InformationAreasTemplate: {
            _$class: msls.ContentItem,
            _$name: "InformationAreasTemplate",
            _$parentName: "InformationAreas",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.InformationArea,
            value: lightSwitchApplication.InformationArea
        },
        INFORMATION_AREA_NAME: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME",
            _$parentName: "InformationAreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.InformationArea,
            value: String
        },
        Cnt: {
            _$class: msls.ContentItem,
            _$name: "Cnt",
            _$parentName: "InformationAreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.InformationArea,
            value: Number
        },
        View: {
            _$class: msls.ContentItem,
            _$name: "View",
            _$parentName: "InformationAreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group6: {
            _$class: msls.ContentItem,
            _$name: "Group6",
            _$parentName: "COR_INFORMATION_AREAList",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group6",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList1: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList1",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        SearchSubject_Area_Groups: {
            _$class: msls.ContentItem,
            _$name: "SearchSubject_Area_Groups",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Subject_Area_Groups: {
            _$class: msls.ContentItem,
            _$name: "Subject_Area_Groups",
            _$parentName: "Group6",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
                _$entry: {
                    elementType: lightSwitchApplication.Subject_Area_Group
                }
            }
        },
        Subject_Area_GroupsTemplate: {
            _$class: msls.ContentItem,
            _$name: "Subject_Area_GroupsTemplate",
            _$parentName: "Subject_Area_Groups",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area_Group,
            value: lightSwitchApplication.Subject_Area_Group
        },
        INFORMATION_AREA_NAME1: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME1",
            _$parentName: "Subject_Area_GroupsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area_Group,
            value: String
        },
        SUBJECT_AREA_GROUP_NAME: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_NAME",
            _$parentName: "Subject_Area_GroupsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area_Group,
            value: String
        },
        Cnt1: {
            _$class: msls.ContentItem,
            _$name: "Cnt1",
            _$parentName: "Subject_Area_GroupsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area_Group,
            value: Number
        },
        Group7: {
            _$class: msls.ContentItem,
            _$name: "Group7",
            _$parentName: "COR_INFORMATION_AREAList",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Group7",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList2: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList2",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList5: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList5",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Subject_Areas: {
            _$class: msls.ContentItem,
            _$name: "Subject_Areas",
            _$parentName: "Group7",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
                _$entry: {
                    elementType: lightSwitchApplication.Subject_Area
                }
            }
        },
        Subject_AreasTemplate: {
            _$class: msls.ContentItem,
            _$name: "Subject_AreasTemplate",
            _$parentName: "Subject_Areas",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area,
            value: lightSwitchApplication.Subject_Area
        },
        INFORMATION_AREA_NAME2: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME2",
            _$parentName: "Subject_AreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area,
            value: String
        },
        SUBJECT_AREA_GROUP_NAME1: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_NAME1",
            _$parentName: "Subject_AreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area,
            value: String
        },
        SUBJECT_AREA_NAME: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_NAME",
            _$parentName: "Subject_AreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area,
            value: String
        },
        Cnt2: {
            _$class: msls.ContentItem,
            _$name: "Cnt2",
            _$parentName: "Subject_AreasTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Subject_Area,
            value: Number
        },
        Group8: {
            _$class: msls.ContentItem,
            _$name: "Group8",
            _$parentName: "COR_INFORMATION_AREAList",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Group5: {
            _$class: msls.ContentItem,
            _$name: "Group5",
            _$parentName: "Group8",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList3: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList3",
            _$parentName: "Group5",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        ShowCOR_INFORMATION_AREAList6: {
            _$class: msls.ContentItem,
            _$name: "ShowCOR_INFORMATION_AREAList6",
            _$parentName: "Group5",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        },
        Datasets: {
            _$class: msls.ContentItem,
            _$name: "Datasets",
            _$parentName: "Group8",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
                _$entry: {
                    elementType: lightSwitchApplication.Dataset
                }
            }
        },
        DatasetsTemplate: {
            _$class: msls.ContentItem,
            _$name: "DatasetsTemplate",
            _$parentName: "Datasets",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Dataset,
            value: lightSwitchApplication.Dataset
        },
        INFORMATION_AREA_NAME3: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME3",
            _$parentName: "DatasetsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Dataset,
            value: String
        },
        SUBJECT_AREA_GROUP_NAME2: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_NAME2",
            _$parentName: "DatasetsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Dataset,
            value: String
        },
        SUBJECT_AREA_NAME1: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_NAME1",
            _$parentName: "DatasetsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Dataset,
            value: String
        },
        DATASET_NAME: {
            _$class: msls.ContentItem,
            _$name: "DATASET_NAME",
            _$parentName: "DatasetsTemplate",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs,
            data: lightSwitchApplication.Dataset,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCOR_INFORMATION_AREAs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCOR_INFORMATION_AREAs, {
        /// <field>
        /// Called when a new BrowseCOR_INFORMATION_AREAs screen is created.
        /// <br/>created(msls.application.BrowseCOR_INFORMATION_AREAs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCOR_INFORMATION_AREAs],
        /// <field>
        /// Called before changes on an active BrowseCOR_INFORMATION_AREAs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCOR_INFORMATION_AREAs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCOR_INFORMATION_AREAs],
        /// <field>
        /// Called after the COR_INFORMATION_AREAList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        COR_INFORMATION_AREAList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("COR_INFORMATION_AREAList"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group1"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList"); }],
        /// <field>
        /// Called after the Label content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Label_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Label"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList4_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList4"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group"); }],
        /// <field>
        /// Called after the InformationAreas content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InformationAreas_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("InformationAreas"); }],
        /// <field>
        /// Called after the InformationAreasTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InformationAreasTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("InformationAreasTemplate"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("INFORMATION_AREA_NAME"); }],
        /// <field>
        /// Called after the Cnt content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cnt_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Cnt"); }],
        /// <field>
        /// Called after the View content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        View_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("View"); }],
        /// <field>
        /// Called after the Group6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group6_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group6"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group2"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList1"); }],
        /// <field>
        /// Called after the SearchSubject_Area_Groups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchSubject_Area_Groups_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SearchSubject_Area_Groups"); }],
        /// <field>
        /// Called after the Subject_Area_Groups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_Area_Groups_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Subject_Area_Groups"); }],
        /// <field>
        /// Called after the Subject_Area_GroupsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_Area_GroupsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Subject_Area_GroupsTemplate"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("INFORMATION_AREA_NAME1"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_NAME_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SUBJECT_AREA_GROUP_NAME"); }],
        /// <field>
        /// Called after the Cnt1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cnt1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Cnt1"); }],
        /// <field>
        /// Called after the Group7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group7_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group7"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group4"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList2"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList5_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList5"); }],
        /// <field>
        /// Called after the Subject_Areas content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_Areas_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Subject_Areas"); }],
        /// <field>
        /// Called after the Subject_AreasTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_AreasTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Subject_AreasTemplate"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("INFORMATION_AREA_NAME2"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_NAME1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_NAME1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SUBJECT_AREA_GROUP_NAME1"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_NAME_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SUBJECT_AREA_NAME"); }],
        /// <field>
        /// Called after the Cnt2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cnt2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Cnt2"); }],
        /// <field>
        /// Called after the Group8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group8_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group8"); }],
        /// <field>
        /// Called after the Group5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group5_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Group5"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList3_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList3"); }],
        /// <field>
        /// Called after the ShowCOR_INFORMATION_AREAList6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowCOR_INFORMATION_AREAList6_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("ShowCOR_INFORMATION_AREAList6"); }],
        /// <field>
        /// Called after the Datasets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Datasets_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("Datasets"); }],
        /// <field>
        /// Called after the DatasetsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatasetsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("DatasetsTemplate"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME3_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("INFORMATION_AREA_NAME3"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_NAME2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_NAME2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SUBJECT_AREA_GROUP_NAME2"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_NAME1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_NAME1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("SUBJECT_AREA_NAME1"); }],
        /// <field>
        /// Called after the DATASET_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_NAME_postRender: [$element, function () { return new lightSwitchApplication.BrowseCOR_INFORMATION_AREAs().findContentItem("DATASET_NAME"); }]
    });

    lightSwitchApplication.ViewCOR_INFORMATION_AREA.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            value: lightSwitchApplication.ViewCOR_INFORMATION_AREA
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        INFORMATION_AREA_ID: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_AREA_NAME: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_AREA_DESCRIPTION: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_DESCRIPTION",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        INFORMATION_ARCHITECT_ID: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_ARCHITECT_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        OLD_REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "OLD_REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: lightSwitchApplication.COR_INFORMATION_AREA
        },
        REVIEWED_BY: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        REVIEWED_ON: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        CREATED_BY: {
            _$class: msls.ContentItem,
            _$name: "CREATED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        CREATED_ON: {
            _$class: msls.ContentItem,
            _$name: "CREATED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        MODIFIED_ON: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: Date
        },
        MODIFIED_BY: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA,
            data: lightSwitchApplication.COR_INFORMATION_AREA,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCOR_INFORMATION_AREA
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewCOR_INFORMATION_AREA, {
        /// <field>
        /// Called when a new ViewCOR_INFORMATION_AREA screen is created.
        /// <br/>created(msls.application.ViewCOR_INFORMATION_AREA screen)
        /// </field>
        created: [lightSwitchApplication.ViewCOR_INFORMATION_AREA],
        /// <field>
        /// Called before changes on an active ViewCOR_INFORMATION_AREA screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewCOR_INFORMATION_AREA screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewCOR_INFORMATION_AREA],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("left"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_ID_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_ID"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_NAME_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_NAME"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_DESCRIPTION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_DESCRIPTION_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("INFORMATION_AREA_DESCRIPTION"); }],
        /// <field>
        /// Called after the INFORMATION_ARCHITECT_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_ARCHITECT_ID_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("INFORMATION_ARCHITECT_ID"); }],
        /// <field>
        /// Called after the REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("REVIEW_STATUS"); }],
        /// <field>
        /// Called after the OLD_REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OLD_REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("OLD_REVIEW_STATUS"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("right"); }],
        /// <field>
        /// Called after the REVIEWED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_BY_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("REVIEWED_BY"); }],
        /// <field>
        /// Called after the REVIEWED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_ON_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("REVIEWED_ON"); }],
        /// <field>
        /// Called after the CREATED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_BY_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("CREATED_BY"); }],
        /// <field>
        /// Called after the CREATED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_ON_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("CREATED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_ON_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("MODIFIED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_BY_postRender: [$element, function () { return new lightSwitchApplication.ViewCOR_INFORMATION_AREA().findContentItem("MODIFIED_BY"); }]
    });

    lightSwitchApplication.AddEditEmployeeProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.AddEditEmployeeProject,
            value: lightSwitchApplication.AddEditEmployeeProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.AddEditEmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        ProjectTable: {
            _$class: msls.ContentItem,
            _$name: "ProjectTable",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectTable
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProjectTable",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.ProjectTable,
            value: lightSwitchApplication.ProjectTable
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeProject, {
        /// <field>
        /// Called when a new AddEditEmployeeProject screen is created.
        /// <br/>created(msls.application.AddEditEmployeeProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called before changes on an active AddEditEmployeeProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Hours"); }],
        /// <field>
        /// Called after the ProjectTable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTable_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("ProjectTable"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseEmployeeProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects
        },
        EmployeeProjectList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: lightSwitchApplication.BrowseEmployeeProjects
        },
        EmpProjs: {
            _$class: msls.ContentItem,
            _$name: "EmpProjs",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjects,
                _$entry: {
                    elementType: lightSwitchApplication.EmpProj
                }
            }
        },
        EmpProjsTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmpProjsTemplate",
            _$parentName: "EmpProjs",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmpProj,
            value: lightSwitchApplication.EmpProj
        },
        MonthName1: {
            _$class: msls.ContentItem,
            _$name: "MonthName1",
            _$parentName: "EmpProjsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmpProj,
            value: String
        },
        SubProject1: {
            _$class: msls.ContentItem,
            _$name: "SubProject1",
            _$parentName: "EmpProjsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmpProj,
            value: String
        },
        c_Date1: {
            _$class: msls.ContentItem,
            _$name: "c_Date1",
            _$parentName: "EmpProjsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmpProj,
            value: Date
        },
        Hours1: {
            _$class: msls.ContentItem,
            _$name: "Hours1",
            _$parentName: "EmpProjsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmpProj,
            value: String
        },
        EmployeeProjects: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjects",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjects,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "EmployeeProjects",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        ProjectTable: {
            _$class: msls.ContentItem,
            _$name: "ProjectTable",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectTable
        },
        MonthTables_selectedItem: {
            _$class: msls.ContentItem,
            _$name: "MonthTables_selectedItem",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: lightSwitchApplication.MonthTable
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "MonthTables_selectedItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.MonthTable,
            value: String
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "MonthTables_selectedItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "MonthTables_selectedItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeProjects, {
        /// <field>
        /// Called when a new BrowseEmployeeProjects screen is created.
        /// <br/>created(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called before changes on an active BrowseEmployeeProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called after the EmployeeProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmployeeProjectList"); }],
        /// <field>
        /// Called after the EmpProjs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpProjs_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmpProjs"); }],
        /// <field>
        /// Called after the EmpProjsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpProjsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmpProjsTemplate"); }],
        /// <field>
        /// Called after the MonthName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("MonthName1"); }],
        /// <field>
        /// Called after the SubProject1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("SubProject1"); }],
        /// <field>
        /// Called after the c_Date1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("c_Date1"); }],
        /// <field>
        /// Called after the Hours1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Hours1"); }],
        /// <field>
        /// Called after the EmployeeProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmployeeProjects"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("rows"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Hours"); }],
        /// <field>
        /// Called after the ProjectTable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTable_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("ProjectTable"); }],
        /// <field>
        /// Called after the MonthTables_selectedItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthTables_selectedItem_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("MonthTables_selectedItem"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("WeekDays"); }]
    });

    lightSwitchApplication.ViewEmployeeProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.ViewEmployeeProject,
            value: lightSwitchApplication.ViewEmployeeProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.ViewEmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        ProjectTable: {
            _$class: msls.ContentItem,
            _$name: "ProjectTable",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectTable
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEmployeeProject, {
        /// <field>
        /// Called when a new ViewEmployeeProject screen is created.
        /// <br/>created(msls.application.ViewEmployeeProject screen)
        /// </field>
        created: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called before changes on an active ViewEmployeeProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEmployeeProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Hours"); }],
        /// <field>
        /// Called after the ProjectTable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTable_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("ProjectTable"); }]
    });

    lightSwitchApplication.AddEditMonthTable.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonthTable
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.AddEditMonthTable,
            value: lightSwitchApplication.AddEditMonthTable
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.AddEditMonthTable,
            value: lightSwitchApplication.MonthTable
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.MonthTable
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: String
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.MonthTable
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonthTable
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMonthTable, {
        /// <field>
        /// Called when a new AddEditMonthTable screen is created.
        /// <br/>created(msls.application.AddEditMonthTable screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMonthTable],
        /// <field>
        /// Called before changes on an active AddEditMonthTable screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMonthTable screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMonthTable],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("left"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("right"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonthTable().findContentItem("WeekDays"); }]
    });

    lightSwitchApplication.BrowseMonthTables.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMonthTables
        },
        MonthTableList: {
            _$class: msls.ContentItem,
            _$name: "MonthTableList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.BrowseMonthTables,
            value: lightSwitchApplication.BrowseMonthTables
        },
        MonthTables: {
            _$class: msls.ContentItem,
            _$name: "MonthTables",
            _$parentName: "MonthTableList",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.BrowseMonthTables,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMonthTables,
                _$entry: {
                    elementType: lightSwitchApplication.MonthTable
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "MonthTables",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.MonthTable
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.MonthTable,
            value: String
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.EmpProj
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseMonthTables,
            data: lightSwitchApplication.EmpProj,
            value: lightSwitchApplication.EmpProj
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMonthTables
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMonthTables, {
        /// <field>
        /// Called when a new BrowseMonthTables screen is created.
        /// <br/>created(msls.application.BrowseMonthTables screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMonthTables],
        /// <field>
        /// Called before changes on an active BrowseMonthTables screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMonthTables screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMonthTables],
        /// <field>
        /// Called after the MonthTableList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthTableList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("MonthTableList"); }],
        /// <field>
        /// Called after the MonthTables content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthTables_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("MonthTables"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("rows"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonthTables().findContentItem("Property1Template"); }]
    });

    lightSwitchApplication.ViewMonthTable.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMonthTable
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.ViewMonthTable,
            value: lightSwitchApplication.ViewMonthTable
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.ViewMonthTable,
            value: lightSwitchApplication.MonthTable
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.MonthTable
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: String
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: lightSwitchApplication.MonthTable
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMonthTable,
            data: lightSwitchApplication.MonthTable,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMonthTable
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewMonthTable, {
        /// <field>
        /// Called when a new ViewMonthTable screen is created.
        /// <br/>created(msls.application.ViewMonthTable screen)
        /// </field>
        created: [lightSwitchApplication.ViewMonthTable],
        /// <field>
        /// Called before changes on an active ViewMonthTable screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewMonthTable screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewMonthTable],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("left"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("right"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.ViewMonthTable().findContentItem("WeekDays"); }]
    });

    lightSwitchApplication.AddEditCOR_DATASET.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_DATASET
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.AddEditCOR_DATASET,
            value: lightSwitchApplication.AddEditCOR_DATASET
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.AddEditCOR_DATASET,
            value: lightSwitchApplication.COR_DATASET
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: lightSwitchApplication.COR_DATASET
        },
        DATASET_ID: {
            _$class: msls.ContentItem,
            _$name: "DATASET_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_NAME: {
            _$class: msls.ContentItem,
            _$name: "DATASET_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_DESCRIPTION: {
            _$class: msls.ContentItem,
            _$name: "DATASET_DESCRIPTION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_SME: {
            _$class: msls.ContentItem,
            _$name: "DATA_SME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_STEWARD: {
            _$class: msls.ContentItem,
            _$name: "DATA_STEWARD",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASOURCE_ID: {
            _$class: msls.ContentItem,
            _$name: "DATASOURCE_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TECHNICAL_SME: {
            _$class: msls.ContentItem,
            _$name: "TECHNICAL_SME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        HOW_TO_ACCESS: {
            _$class: msls.ContentItem,
            _$name: "HOW_TO_ACCESS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TRAINING_INFORMATION: {
            _$class: msls.ContentItem,
            _$name: "TRAINING_INFORMATION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        USERS: {
            _$class: msls.ContentItem,
            _$name: "USERS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        USAGE_SCENARIOS: {
            _$class: msls.ContentItem,
            _$name: "USAGE_SCENARIOS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        USAGE_GUIDLINES: {
            _$class: msls.ContentItem,
            _$name: "USAGE_GUIDLINES",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        HISTORICAL_DATA_AVAILABLE: {
            _$class: msls.ContentItem,
            _$name: "HISTORICAL_DATA_AVAILABLE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        REFERENCE_DOCUMENTATION: {
            _$class: msls.ContentItem,
            _$name: "REFERENCE_DOCUMENTATION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        UPDATE_FREQUENCY: {
            _$class: msls.ContentItem,
            _$name: "UPDATE_FREQUENCY",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        GRANULARITY: {
            _$class: msls.ContentItem,
            _$name: "GRANULARITY",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        ALIASES: {
            _$class: msls.ContentItem,
            _$name: "ALIASES",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        ADDITIONAL_NOTES: {
            _$class: msls.ContentItem,
            _$name: "ADDITIONAL_NOTES",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_ACCESS_TOOLS_USED: {
            _$class: msls.ContentItem,
            _$name: "DATA_ACCESS_TOOLS_USED",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_ACQUISITION_METHOD: {
            _$class: msls.ContentItem,
            _$name: "DATA_ACQUISITION_METHOD",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_ACQUISITION_DETAILS: {
            _$class: msls.ContentItem,
            _$name: "DATA_ACQUISITION_DETAILS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_CLASSIFICATION: {
            _$class: msls.ContentItem,
            _$name: "DATASET_CLASSIFICATION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATA_CLASSIFICATION_RATIONALE: {
            _$class: msls.ContentItem,
            _$name: "DATA_CLASSIFICATION_RATIONALE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_TYPE: {
            _$class: msls.ContentItem,
            _$name: "DATASET_TYPE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TECHNICAL_OBJECT_TYPE_ID: {
            _$class: msls.ContentItem,
            _$name: "TECHNICAL_OBJECT_TYPE_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TECHNICAL_OBJECT_NAME: {
            _$class: msls.ContentItem,
            _$name: "TECHNICAL_OBJECT_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        OBJECT_TYPE_ID: {
            _$class: msls.ContentItem,
            _$name: "OBJECT_TYPE_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Number
        },
        REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        OLD_REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "OLD_REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RECORD_TYPE_TABLE: {
            _$class: msls.ContentItem,
            _$name: "RECORD_TYPE_TABLE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RECORD_TYPE_FIELD: {
            _$class: msls.ContentItem,
            _$name: "RECORD_TYPE_FIELD",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        FUNCTIONAL_LEAD: {
            _$class: msls.ContentItem,
            _$name: "FUNCTIONAL_LEAD",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_OWNER: {
            _$class: msls.ContentItem,
            _$name: "DATASET_OWNER",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: lightSwitchApplication.COR_DATASET
        },
        DEVELOPER: {
            _$class: msls.ContentItem,
            _$name: "DEVELOPER",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        GEOGRAPHIC_SCOPE: {
            _$class: msls.ContentItem,
            _$name: "GEOGRAPHIC_SCOPE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RETENTION_UNIT: {
            _$class: msls.ContentItem,
            _$name: "RETENTION_UNIT",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RETENTION_LENGTH: {
            _$class: msls.ContentItem,
            _$name: "RETENTION_LENGTH",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Number
        },
        LOAD_TYPE: {
            _$class: msls.ContentItem,
            _$name: "LOAD_TYPE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_ACTIVE: {
            _$class: msls.ContentItem,
            _$name: "DATASET_ACTIVE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Boolean
        },
        TIER: {
            _$class: msls.ContentItem,
            _$name: "TIER",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        COMPLEXITY: {
            _$class: msls.ContentItem,
            _$name: "COMPLEXITY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DESIGN_DATE: {
            _$class: msls.ContentItem,
            _$name: "DESIGN_DATE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        DEVELOP_DATE: {
            _$class: msls.ContentItem,
            _$name: "DEVELOP_DATE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        TEST_DATE: {
            _$class: msls.ContentItem,
            _$name: "TEST_DATE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        CONTROL: {
            _$class: msls.ContentItem,
            _$name: "CONTROL",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Number
        },
        WORKSHOP_DATE: {
            _$class: msls.ContentItem,
            _$name: "WORKSHOP_DATE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        WORKSHOP_NOTES: {
            _$class: msls.ContentItem,
            _$name: "WORKSHOP_NOTES",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RICEFW: {
            _$class: msls.ContentItem,
            _$name: "RICEFW",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TCODE: {
            _$class: msls.ContentItem,
            _$name: "TCODE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        SHORT_NAME: {
            _$class: msls.ContentItem,
            _$name: "SHORT_NAME",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        RELEVANCY_RULE: {
            _$class: msls.ContentItem,
            _$name: "RELEVANCY_RULE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        LOAD_XML_ID: {
            _$class: msls.ContentItem,
            _$name: "LOAD_XML_ID",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        LOAD_FILE_NAME: {
            _$class: msls.ContentItem,
            _$name: "LOAD_FILE_NAME",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TARGET_SERVER: {
            _$class: msls.ContentItem,
            _$name: "TARGET_SERVER",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TARGET_DATABASE: {
            _$class: msls.ContentItem,
            _$name: "TARGET_DATABASE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        TARGET_DATASTORE: {
            _$class: msls.ContentItem,
            _$name: "TARGET_DATASTORE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DESIGN_DOC: {
            _$class: msls.ContentItem,
            _$name: "DESIGN_DOC",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        REVIEWED_BY: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        REVIEWED_ON: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        CREATED_BY: {
            _$class: msls.ContentItem,
            _$name: "CREATED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        CREATED_ON: {
            _$class: msls.ContentItem,
            _$name: "CREATED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        MODIFIED_BY: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        MODIFIED_ON: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: Date
        },
        SOURCE_SYSTEM: {
            _$class: msls.ContentItem,
            _$name: "SOURCE_SYSTEM",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        DATASET_TYPE_ID: {
            _$class: msls.ContentItem,
            _$name: "DATASET_TYPE_ID",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: String
        },
        COR_SUBJECT_AREA: {
            _$class: msls.ContentItem,
            _$name: "COR_SUBJECT_AREA",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_DATASET,
            value: lightSwitchApplication.COR_SUBJECT_AREA
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "COR_SUBJECT_AREA",
            screen: lightSwitchApplication.AddEditCOR_DATASET,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: lightSwitchApplication.COR_SUBJECT_AREA
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_DATASET
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCOR_DATASET, {
        /// <field>
        /// Called when a new AddEditCOR_DATASET screen is created.
        /// <br/>created(msls.application.AddEditCOR_DATASET screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCOR_DATASET],
        /// <field>
        /// Called before changes on an active AddEditCOR_DATASET screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCOR_DATASET screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCOR_DATASET],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("left"); }],
        /// <field>
        /// Called after the DATASET_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_ID"); }],
        /// <field>
        /// Called after the DATASET_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_NAME"); }],
        /// <field>
        /// Called after the DATASET_DESCRIPTION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_DESCRIPTION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_DESCRIPTION"); }],
        /// <field>
        /// Called after the DATA_SME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_SME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_SME"); }],
        /// <field>
        /// Called after the DATA_STEWARD content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_STEWARD_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_STEWARD"); }],
        /// <field>
        /// Called after the DATASOURCE_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASOURCE_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASOURCE_ID"); }],
        /// <field>
        /// Called after the TECHNICAL_SME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TECHNICAL_SME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TECHNICAL_SME"); }],
        /// <field>
        /// Called after the HOW_TO_ACCESS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HOW_TO_ACCESS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("HOW_TO_ACCESS"); }],
        /// <field>
        /// Called after the TRAINING_INFORMATION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TRAINING_INFORMATION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TRAINING_INFORMATION"); }],
        /// <field>
        /// Called after the USERS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        USERS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("USERS"); }],
        /// <field>
        /// Called after the USAGE_SCENARIOS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        USAGE_SCENARIOS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("USAGE_SCENARIOS"); }],
        /// <field>
        /// Called after the USAGE_GUIDLINES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        USAGE_GUIDLINES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("USAGE_GUIDLINES"); }],
        /// <field>
        /// Called after the HISTORICAL_DATA_AVAILABLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HISTORICAL_DATA_AVAILABLE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("HISTORICAL_DATA_AVAILABLE"); }],
        /// <field>
        /// Called after the REFERENCE_DOCUMENTATION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REFERENCE_DOCUMENTATION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("REFERENCE_DOCUMENTATION"); }],
        /// <field>
        /// Called after the UPDATE_FREQUENCY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UPDATE_FREQUENCY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("UPDATE_FREQUENCY"); }],
        /// <field>
        /// Called after the GRANULARITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GRANULARITY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("GRANULARITY"); }],
        /// <field>
        /// Called after the ALIASES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ALIASES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("ALIASES"); }],
        /// <field>
        /// Called after the ADDITIONAL_NOTES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ADDITIONAL_NOTES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("ADDITIONAL_NOTES"); }],
        /// <field>
        /// Called after the DATA_ACCESS_TOOLS_USED content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_ACCESS_TOOLS_USED_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_ACCESS_TOOLS_USED"); }],
        /// <field>
        /// Called after the DATA_ACQUISITION_METHOD content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_ACQUISITION_METHOD_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_ACQUISITION_METHOD"); }],
        /// <field>
        /// Called after the DATA_ACQUISITION_DETAILS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_ACQUISITION_DETAILS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_ACQUISITION_DETAILS"); }],
        /// <field>
        /// Called after the DATASET_CLASSIFICATION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_CLASSIFICATION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_CLASSIFICATION"); }],
        /// <field>
        /// Called after the DATA_CLASSIFICATION_RATIONALE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_CLASSIFICATION_RATIONALE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATA_CLASSIFICATION_RATIONALE"); }],
        /// <field>
        /// Called after the DATASET_TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_TYPE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_TYPE"); }],
        /// <field>
        /// Called after the TECHNICAL_OBJECT_TYPE_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TECHNICAL_OBJECT_TYPE_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TECHNICAL_OBJECT_TYPE_ID"); }],
        /// <field>
        /// Called after the TECHNICAL_OBJECT_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TECHNICAL_OBJECT_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TECHNICAL_OBJECT_NAME"); }],
        /// <field>
        /// Called after the OBJECT_TYPE_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OBJECT_TYPE_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("OBJECT_TYPE_ID"); }],
        /// <field>
        /// Called after the REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("REVIEW_STATUS"); }],
        /// <field>
        /// Called after the OLD_REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OLD_REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("OLD_REVIEW_STATUS"); }],
        /// <field>
        /// Called after the RECORD_TYPE_TABLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RECORD_TYPE_TABLE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RECORD_TYPE_TABLE"); }],
        /// <field>
        /// Called after the RECORD_TYPE_FIELD content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RECORD_TYPE_FIELD_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RECORD_TYPE_FIELD"); }],
        /// <field>
        /// Called after the FUNCTIONAL_LEAD content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FUNCTIONAL_LEAD_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("FUNCTIONAL_LEAD"); }],
        /// <field>
        /// Called after the DATASET_OWNER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_OWNER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_OWNER"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("right"); }],
        /// <field>
        /// Called after the DEVELOPER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DEVELOPER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DEVELOPER"); }],
        /// <field>
        /// Called after the GEOGRAPHIC_SCOPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GEOGRAPHIC_SCOPE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("GEOGRAPHIC_SCOPE"); }],
        /// <field>
        /// Called after the RETENTION_UNIT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RETENTION_UNIT_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RETENTION_UNIT"); }],
        /// <field>
        /// Called after the RETENTION_LENGTH content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RETENTION_LENGTH_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RETENTION_LENGTH"); }],
        /// <field>
        /// Called after the LOAD_TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LOAD_TYPE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("LOAD_TYPE"); }],
        /// <field>
        /// Called after the DATASET_ACTIVE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_ACTIVE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_ACTIVE"); }],
        /// <field>
        /// Called after the TIER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TIER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TIER"); }],
        /// <field>
        /// Called after the COMPLEXITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        COMPLEXITY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("COMPLEXITY"); }],
        /// <field>
        /// Called after the DESIGN_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DESIGN_DATE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DESIGN_DATE"); }],
        /// <field>
        /// Called after the DEVELOP_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DEVELOP_DATE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DEVELOP_DATE"); }],
        /// <field>
        /// Called after the TEST_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TEST_DATE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TEST_DATE"); }],
        /// <field>
        /// Called after the CONTROL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CONTROL_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("CONTROL"); }],
        /// <field>
        /// Called after the WORKSHOP_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WORKSHOP_DATE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("WORKSHOP_DATE"); }],
        /// <field>
        /// Called after the WORKSHOP_NOTES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WORKSHOP_NOTES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("WORKSHOP_NOTES"); }],
        /// <field>
        /// Called after the RICEFW content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RICEFW_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RICEFW"); }],
        /// <field>
        /// Called after the TCODE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TCODE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TCODE"); }],
        /// <field>
        /// Called after the SHORT_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SHORT_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("SHORT_NAME"); }],
        /// <field>
        /// Called after the RELEVANCY_RULE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RELEVANCY_RULE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RELEVANCY_RULE"); }],
        /// <field>
        /// Called after the LOAD_XML_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LOAD_XML_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("LOAD_XML_ID"); }],
        /// <field>
        /// Called after the LOAD_FILE_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LOAD_FILE_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("LOAD_FILE_NAME"); }],
        /// <field>
        /// Called after the TARGET_SERVER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TARGET_SERVER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TARGET_SERVER"); }],
        /// <field>
        /// Called after the TARGET_DATABASE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TARGET_DATABASE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TARGET_DATABASE"); }],
        /// <field>
        /// Called after the TARGET_DATASTORE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TARGET_DATASTORE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("TARGET_DATASTORE"); }],
        /// <field>
        /// Called after the DESIGN_DOC content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DESIGN_DOC_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DESIGN_DOC"); }],
        /// <field>
        /// Called after the REVIEWED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("REVIEWED_BY"); }],
        /// <field>
        /// Called after the REVIEWED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("REVIEWED_ON"); }],
        /// <field>
        /// Called after the CREATED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("CREATED_BY"); }],
        /// <field>
        /// Called after the CREATED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("CREATED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("MODIFIED_BY"); }],
        /// <field>
        /// Called after the MODIFIED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("MODIFIED_ON"); }],
        /// <field>
        /// Called after the SOURCE_SYSTEM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SOURCE_SYSTEM_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("SOURCE_SYSTEM"); }],
        /// <field>
        /// Called after the DATASET_TYPE_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATASET_TYPE_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("DATASET_TYPE_ID"); }],
        /// <field>
        /// Called after the COR_SUBJECT_AREA content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        COR_SUBJECT_AREA_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("COR_SUBJECT_AREA"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_DATASET().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditCOR_SUBJECT_AREA.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            value: lightSwitchApplication.AddEditCOR_SUBJECT_AREA
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            value: lightSwitchApplication.COR_SUBJECT_AREA
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: lightSwitchApplication.COR_SUBJECT_AREA
        },
        SUBJECT_AREA_ID: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_GROUP_ID: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_NAME: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_DESCRIPTION: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_DESCRIPTION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_DATA_STEWARD: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_DATA_STEWARD",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_SOLUTION_MANAGER: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_SOLUTION_MANAGER",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        SUBJECT_AREA_ALIASES: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_ALIASES",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        DATA_FLOW_DIAGRAM: {
            _$class: msls.ContentItem,
            _$name: "DATA_FLOW_DIAGRAM",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        DATA_CLASSIFICATION_ID: {
            _$class: msls.ContentItem,
            _$name: "DATA_CLASSIFICATION_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: lightSwitchApplication.COR_SUBJECT_AREA
        },
        DATA_CLASSIFICATION_RATIONALE: {
            _$class: msls.ContentItem,
            _$name: "DATA_CLASSIFICATION_RATIONALE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REVIEW_STATUS",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        OLD_REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "OLD_REVIEW_STATUS",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        REVIEWED_BY: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        REVIEWED_ON: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: Date
        },
        CREATED_BY: {
            _$class: msls.ContentItem,
            _$name: "CREATED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        CREATED_ON: {
            _$class: msls.ContentItem,
            _$name: "CREATED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: Date
        },
        MODIFIED_BY: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: String
        },
        MODIFIED_ON: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA,
            data: lightSwitchApplication.COR_SUBJECT_AREA,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCOR_SUBJECT_AREA, {
        /// <field>
        /// Called when a new AddEditCOR_SUBJECT_AREA screen is created.
        /// <br/>created(msls.application.AddEditCOR_SUBJECT_AREA screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCOR_SUBJECT_AREA],
        /// <field>
        /// Called before changes on an active AddEditCOR_SUBJECT_AREA screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCOR_SUBJECT_AREA screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCOR_SUBJECT_AREA],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("left"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_ID"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_GROUP_ID"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_NAME"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_DESCRIPTION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_DESCRIPTION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_DESCRIPTION"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_DATA_STEWARD content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_DATA_STEWARD_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_DATA_STEWARD"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_SOLUTION_MANAGER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_SOLUTION_MANAGER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_SOLUTION_MANAGER"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_ALIASES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_ALIASES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("SUBJECT_AREA_ALIASES"); }],
        /// <field>
        /// Called after the DATA_FLOW_DIAGRAM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_FLOW_DIAGRAM_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("DATA_FLOW_DIAGRAM"); }],
        /// <field>
        /// Called after the DATA_CLASSIFICATION_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_CLASSIFICATION_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("DATA_CLASSIFICATION_ID"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("right"); }],
        /// <field>
        /// Called after the DATA_CLASSIFICATION_RATIONALE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DATA_CLASSIFICATION_RATIONALE_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("DATA_CLASSIFICATION_RATIONALE"); }],
        /// <field>
        /// Called after the REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("REVIEW_STATUS"); }],
        /// <field>
        /// Called after the OLD_REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OLD_REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("OLD_REVIEW_STATUS"); }],
        /// <field>
        /// Called after the REVIEWED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("REVIEWED_BY"); }],
        /// <field>
        /// Called after the REVIEWED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("REVIEWED_ON"); }],
        /// <field>
        /// Called after the CREATED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("CREATED_BY"); }],
        /// <field>
        /// Called after the CREATED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("CREATED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("MODIFIED_BY"); }],
        /// <field>
        /// Called after the MODIFIED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA().findContentItem("MODIFIED_ON"); }]
    });

    lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            value: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            value: lightSwitchApplication.COR_SUBJECT_AREA_GROUP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: lightSwitchApplication.COR_SUBJECT_AREA_GROUP
        },
        SUBJECT_AREA_GROUP_ID: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        INFORMATION_AREA_ID: {
            _$class: msls.ContentItem,
            _$name: "INFORMATION_AREA_ID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        SUBJECT_AREA_GROUP_NAME: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_NAME",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        SUBJECT_AREA_GROUP_DESCRIPTION: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_DESCRIPTION",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        SUBJECT_AREA_GROUP_ALIASES: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_ALIASES",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        OLD_REVIEW_STATUS: {
            _$class: msls.ContentItem,
            _$name: "OLD_REVIEW_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: lightSwitchApplication.COR_SUBJECT_AREA_GROUP
        },
        SUBJECT_AREA_GROUP_OWNER: {
            _$class: msls.ContentItem,
            _$name: "SUBJECT_AREA_GROUP_OWNER",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        REVIEWED_BY: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        REVIEWED_ON: {
            _$class: msls.ContentItem,
            _$name: "REVIEWED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: Date
        },
        CREATED_BY: {
            _$class: msls.ContentItem,
            _$name: "CREATED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        CREATED_ON: {
            _$class: msls.ContentItem,
            _$name: "CREATED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: Date
        },
        MODIFIED_BY: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_BY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: String
        },
        MODIFIED_ON: {
            _$class: msls.ContentItem,
            _$name: "MODIFIED_ON",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP,
            data: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP, {
        /// <field>
        /// Called when a new AddEditCOR_SUBJECT_AREA_GROUP screen is created.
        /// <br/>created(msls.application.AddEditCOR_SUBJECT_AREA_GROUP screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP],
        /// <field>
        /// Called before changes on an active AddEditCOR_SUBJECT_AREA_GROUP screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCOR_SUBJECT_AREA_GROUP screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("left"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("SUBJECT_AREA_GROUP_ID"); }],
        /// <field>
        /// Called after the INFORMATION_AREA_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INFORMATION_AREA_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("INFORMATION_AREA_ID"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_NAME_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("SUBJECT_AREA_GROUP_NAME"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_DESCRIPTION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_DESCRIPTION_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("SUBJECT_AREA_GROUP_DESCRIPTION"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_ALIASES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_ALIASES_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("SUBJECT_AREA_GROUP_ALIASES"); }],
        /// <field>
        /// Called after the REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("REVIEW_STATUS"); }],
        /// <field>
        /// Called after the OLD_REVIEW_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OLD_REVIEW_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("OLD_REVIEW_STATUS"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("right"); }],
        /// <field>
        /// Called after the SUBJECT_AREA_GROUP_OWNER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SUBJECT_AREA_GROUP_OWNER_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("SUBJECT_AREA_GROUP_OWNER"); }],
        /// <field>
        /// Called after the REVIEWED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("REVIEWED_BY"); }],
        /// <field>
        /// Called after the REVIEWED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REVIEWED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("REVIEWED_ON"); }],
        /// <field>
        /// Called after the CREATED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("CREATED_BY"); }],
        /// <field>
        /// Called after the CREATED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CREATED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("CREATED_ON"); }],
        /// <field>
        /// Called after the MODIFIED_BY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_BY_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("MODIFIED_BY"); }],
        /// <field>
        /// Called after the MODIFIED_ON content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MODIFIED_ON_postRender: [$element, function () { return new lightSwitchApplication.AddEditCOR_SUBJECT_AREA_GROUP().findContentItem("MODIFIED_ON"); }]
    });

}(msls.application));