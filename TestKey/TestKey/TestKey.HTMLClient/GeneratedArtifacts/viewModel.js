/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditCOR_INFORMATION_AREA(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCOR_INFORMATION_AREA screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_INFORMATION_AREA" type="msls.application.COR_INFORMATION_AREA">
        /// Gets or sets the cOR_INFORMATION_AREA for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCOR_INFORMATION_AREA.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCOR_INFORMATION_AREA", parameters);
    }

    function BrowseCOR_INFORMATION_AREAs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCOR_INFORMATION_AREAs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_INFORMATION_AREAs" type="msls.VisualCollection" elementType="msls.application.COR_INFORMATION_AREA">
        /// Gets the cOR_INFORMATION_AREAs for this screen.
        /// </field>
        /// <field name="InformationAreas" type="msls.VisualCollection" elementType="msls.application.InformationArea">
        /// Gets the informationAreas for this screen.
        /// </field>
        /// <field name="Subject_Area_Groups" type="msls.VisualCollection" elementType="msls.application.Subject_Area_Group">
        /// Gets the subject_Area_Groups for this screen.
        /// </field>
        /// <field name="Subject_Areas" type="msls.VisualCollection" elementType="msls.application.Subject_Area">
        /// Gets the subject_Areas for this screen.
        /// </field>
        /// <field name="Datasets" type="msls.VisualCollection" elementType="msls.application.Dataset">
        /// Gets the datasets for this screen.
        /// </field>
        /// <field name="COR_SUBJECT_AREA_GROUPs" type="msls.VisualCollection" elementType="msls.application.COR_SUBJECT_AREA_GROUP">
        /// Gets the cOR_SUBJECT_AREA_GROUPs for this screen.
        /// </field>
        /// <field name="COR_SUBJECT_AREAs" type="msls.VisualCollection" elementType="msls.application.COR_SUBJECT_AREA">
        /// Gets the cOR_SUBJECT_AREAs for this screen.
        /// </field>
        /// <field name="COR_DATASETs" type="msls.VisualCollection" elementType="msls.application.COR_DATASET">
        /// Gets the cOR_DATASETs for this screen.
        /// </field>
        /// <field name="Label" type="String">
        /// Gets or sets the label for this screen.
        /// </field>
        /// <field name="SAGCount" type="String">
        /// Gets or sets the sAGCount for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCOR_INFORMATION_AREAs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCOR_INFORMATION_AREAs", parameters);
    }

    function ViewCOR_INFORMATION_AREA(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewCOR_INFORMATION_AREA screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_INFORMATION_AREA" type="msls.application.COR_INFORMATION_AREA">
        /// Gets or sets the cOR_INFORMATION_AREA for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewCOR_INFORMATION_AREA.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewCOR_INFORMATION_AREA", parameters);
    }

    function AddEditEmployeeProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.MonthTable">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeProject", parameters);
    }

    function BrowseEmployeeProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProjects" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.EmployeeProject">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="MonthTables" type="msls.VisualCollection" elementType="msls.application.MonthTable">
        /// Gets the monthTables for this screen.
        /// </field>
        /// <field name="EmpProjs" type="msls.VisualCollection" elementType="msls.application.EmpProj">
        /// Gets the empProjs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeProjects", parameters);
    }

    function ViewEmployeeProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEmployeeProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEmployeeProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEmployeeProject", parameters);
    }

    function AddEditMonthTable(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMonthTable screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MonthTable" type="msls.application.MonthTable">
        /// Gets or sets the monthTable for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMonthTable.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMonthTable", parameters);
    }

    function BrowseMonthTables(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMonthTables screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MonthTables" type="msls.VisualCollection" elementType="msls.application.MonthTable">
        /// Gets the monthTables for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.EmpProj">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMonthTables.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMonthTables", parameters);
    }

    function ViewMonthTable(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewMonthTable screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MonthTable" type="msls.application.MonthTable">
        /// Gets or sets the monthTable for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewMonthTable.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewMonthTable", parameters);
    }

    function AddEditCOR_DATASET(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCOR_DATASET screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_DATASET" type="msls.application.COR_DATASET">
        /// Gets or sets the cOR_DATASET for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCOR_DATASET.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCOR_DATASET", parameters);
    }

    function AddEditCOR_SUBJECT_AREA(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCOR_SUBJECT_AREA screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_SUBJECT_AREA" type="msls.application.COR_SUBJECT_AREA">
        /// Gets or sets the cOR_SUBJECT_AREA for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCOR_SUBJECT_AREA.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCOR_SUBJECT_AREA", parameters);
    }

    function AddEditCOR_SUBJECT_AREA_GROUP(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCOR_SUBJECT_AREA_GROUP screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_SUBJECT_AREA_GROUP" type="msls.application.COR_SUBJECT_AREA_GROUP">
        /// Gets or sets the cOR_SUBJECT_AREA_GROUP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCOR_SUBJECT_AREA_GROUP.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCOR_SUBJECT_AREA_GROUP", parameters);
    }

    function AddEditInformationAreaDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditInformationAreaDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InformationAreaDetail" type="msls.application.InformationAreaDetail">
        /// Gets or sets the informationAreaDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditInformationAreaDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditInformationAreaDetail", parameters);
    }

    function BrowseInformationAreaDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseInformationAreaDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InformationAreaDetails" type="msls.VisualCollection" elementType="msls.application.InformationAreaDetail">
        /// Gets the informationAreaDetails for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.InformationAreaDetail">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseInformationAreaDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseInformationAreaDetails", parameters);
    }

    function EditInformationArea(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditInformationArea screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InformationAreas" type="msls.VisualCollection" elementType="msls.application.InformationArea">
        /// Gets the informationAreas for this screen.
        /// </field>
        /// <field name="COR_INFORMATION_AREAs" type="msls.VisualCollection" elementType="msls.application.COR_INFORMATION_AREA">
        /// Gets the cOR_INFORMATION_AREAs for this screen.
        /// </field>
        /// <field name="InformationAreaName" type="String">
        /// Gets or sets the informationAreaName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditInformationArea.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditInformationArea", parameters);
    }

    function EditInformationAreaDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditInformationAreaDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="COR_INFORMATION_AREAs" type="msls.VisualCollection" elementType="msls.application.COR_INFORMATION_AREA">
        /// Gets the cOR_INFORMATION_AREAs for this screen.
        /// </field>
        /// <field name="InformationAreaName" type="String">
        /// Gets or sets the informationAreaName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditInformationAreaDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditInformationAreaDetails", parameters);
    }

    function ViewInformationAreaDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewInformationAreaDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InformationAreas" type="msls.VisualCollection" elementType="msls.application.InformationArea">
        /// Gets the informationAreas for this screen.
        /// </field>
        /// <field name="InformationAreaName" type="String">
        /// Gets or sets the informationAreaName for this screen.
        /// </field>
        /// <field name="COR_INFORMATION_AREAs" type="msls.VisualCollection" elementType="msls.application.COR_INFORMATION_AREA">
        /// Gets the cOR_INFORMATION_AREAs for this screen.
        /// </field>
        /// <field name="Text" type="String">
        /// Gets or sets the text for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewInformationAreaDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewInformationAreaDetails", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditCOR_INFORMATION_AREA: $defineScreen(AddEditCOR_INFORMATION_AREA, [
            { name: "COR_INFORMATION_AREA", kind: "local", type: lightSwitchApplication.COR_INFORMATION_AREA }
        ], [
        ]),

        BrowseCOR_INFORMATION_AREAs: $defineScreen(BrowseCOR_INFORMATION_AREAs, [
            {
                name: "COR_INFORMATION_AREAs", kind: "collection", elementType: lightSwitchApplication.COR_INFORMATION_AREA,
                createQuery: function (InformationAreaName) {
                    return this.dataWorkspace.DDATAPOLICYData.COR_INFORMATION_AREAs.filter("" + ((InformationAreaName === undefined || InformationAreaName === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(InformationAreaName, "String?") + ")") + "");
                }
            },
            {
                name: "InformationAreas", kind: "collection", elementType: lightSwitchApplication.InformationArea,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.InformationAreas;
                }
            },
            {
                name: "Subject_Area_Groups", kind: "collection", elementType: lightSwitchApplication.Subject_Area_Group,
                createQuery: function (InformationAreaName) {
                    return this.dataWorkspace.DDATAPOLICYData.Subject_Area_Groups.filter("" + ((InformationAreaName === undefined || InformationAreaName === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(InformationAreaName, "String?") + ")") + "");
                }
            },
            {
                name: "Subject_Areas", kind: "collection", elementType: lightSwitchApplication.Subject_Area,
                createQuery: function (InformationAreaName, SubjectAreaGroupName) {
                    return this.dataWorkspace.DDATAPOLICYData.Subject_Areas.filter("" + ((InformationAreaName === undefined || InformationAreaName === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(InformationAreaName, "String?") + ")") + " and " + ((SubjectAreaGroupName === undefined || SubjectAreaGroupName === null) ? "false" : "(SUBJECT_AREA_GROUP_NAME eq " + $toODataString(SubjectAreaGroupName, "String?") + ")") + "");
                }
            },
            {
                name: "Datasets", kind: "collection", elementType: lightSwitchApplication.Dataset,
                createQuery: function (InformationAreaName, SubjectAreaGroupName, SubjectAreaName) {
                    return this.dataWorkspace.DDATAPOLICYData.Datasets.filter("(" + ((InformationAreaName === undefined || InformationAreaName === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(InformationAreaName, "String?") + ")") + " and " + ((SubjectAreaGroupName === undefined || SubjectAreaGroupName === null) ? "false" : "(SUBJECT_AREA_GROUP_NAME eq " + $toODataString(SubjectAreaGroupName, "String?") + ")") + ") and " + ((SubjectAreaName === undefined || SubjectAreaName === null) ? "false" : "(SUBJECT_AREA_NAME eq " + $toODataString(SubjectAreaName, "String?") + ")") + "");
                }
            },
            {
                name: "COR_SUBJECT_AREA_GROUPs", kind: "collection", elementType: lightSwitchApplication.COR_SUBJECT_AREA_GROUP,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.COR_SUBJECT_AREA_GROUPs;
                }
            },
            {
                name: "COR_SUBJECT_AREAs", kind: "collection", elementType: lightSwitchApplication.COR_SUBJECT_AREA,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.COR_SUBJECT_AREAs;
                }
            },
            {
                name: "COR_DATASETs", kind: "collection", elementType: lightSwitchApplication.COR_DATASET,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.COR_DATASETs;
                }
            },
            { name: "Label", kind: "local", type: String },
            { name: "SAGCount", kind: "local", type: String }
        ], [
            { name: "Close" },
            { name: "Search" },
            { name: "Edit" },
            { name: "Save" },
            { name: "Cancel" }
        ]),

        ViewCOR_INFORMATION_AREA: $defineScreen(ViewCOR_INFORMATION_AREA, [
            { name: "COR_INFORMATION_AREA", kind: "local", type: lightSwitchApplication.COR_INFORMATION_AREA }
        ], [
        ]),

        AddEditEmployeeProject: $defineScreen(AddEditEmployeeProject, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject },
            { name: "Property1", kind: "local", type: lightSwitchApplication.MonthTable }
        ], [
        ]),

        BrowseEmployeeProjects: $defineScreen(BrowseEmployeeProjects, [
            {
                name: "EmployeeProjects", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function () {
                    return this.dataWorkspace.LS_UTData.EmployeeProjects.expand("ProjectTable");
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.EmployeeProject },
            {
                name: "MonthTables", kind: "collection", elementType: lightSwitchApplication.MonthTable,
                createQuery: function (Parameter) {
                    return this.dataWorkspace.LS_UTData.MonthTables;
                }
            },
            {
                name: "EmpProjs", kind: "collection", elementType: lightSwitchApplication.EmpProj,
                createQuery: function () {
                    return this.dataWorkspace.LS_UTData.EmpProjs;
                }
            }
        ], [
        ]),

        ViewEmployeeProject: $defineScreen(ViewEmployeeProject, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject }
        ], [
        ]),

        AddEditMonthTable: $defineScreen(AddEditMonthTable, [
            { name: "MonthTable", kind: "local", type: lightSwitchApplication.MonthTable }
        ], [
        ]),

        BrowseMonthTables: $defineScreen(BrowseMonthTables, [
            {
                name: "MonthTables", kind: "collection", elementType: lightSwitchApplication.MonthTable,
                createQuery: function () {
                    return this.dataWorkspace.LS_UTData.MonthTables;
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.EmpProj }
        ], [
        ]),

        ViewMonthTable: $defineScreen(ViewMonthTable, [
            { name: "MonthTable", kind: "local", type: lightSwitchApplication.MonthTable }
        ], [
        ]),

        AddEditCOR_DATASET: $defineScreen(AddEditCOR_DATASET, [
            { name: "COR_DATASET", kind: "local", type: lightSwitchApplication.COR_DATASET }
        ], [
        ]),

        AddEditCOR_SUBJECT_AREA: $defineScreen(AddEditCOR_SUBJECT_AREA, [
            { name: "COR_SUBJECT_AREA", kind: "local", type: lightSwitchApplication.COR_SUBJECT_AREA }
        ], [
        ]),

        AddEditCOR_SUBJECT_AREA_GROUP: $defineScreen(AddEditCOR_SUBJECT_AREA_GROUP, [
            { name: "COR_SUBJECT_AREA_GROUP", kind: "local", type: lightSwitchApplication.COR_SUBJECT_AREA_GROUP }
        ], [
        ]),

        AddEditInformationAreaDetail: $defineScreen(AddEditInformationAreaDetail, [
            { name: "InformationAreaDetail", kind: "local", type: lightSwitchApplication.InformationAreaDetail }
        ], [
        ]),

        BrowseInformationAreaDetails: $defineScreen(BrowseInformationAreaDetails, [
            {
                name: "InformationAreaDetails", kind: "collection", elementType: lightSwitchApplication.InformationAreaDetail,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.InformationAreaDetails;
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.InformationAreaDetail }
        ], [
        ]),

        EditInformationArea: $defineScreen(EditInformationArea, [
            {
                name: "InformationAreas", kind: "collection", elementType: lightSwitchApplication.InformationArea,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.InformationAreas;
                }
            },
            {
                name: "COR_INFORMATION_AREAs", kind: "collection", elementType: lightSwitchApplication.COR_INFORMATION_AREA,
                createQuery: function (INFORMATION_AREA_NAME) {
                    return this.dataWorkspace.DDATAPOLICYData.COR_INFORMATION_AREAs.filter("" + ((INFORMATION_AREA_NAME === undefined || INFORMATION_AREA_NAME === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(INFORMATION_AREA_NAME, "String?") + ")") + "");
                }
            },
            { name: "InformationAreaName", kind: "local", type: String }
        ], [
        ]),

        EditInformationAreaDetails: $defineScreen(EditInformationAreaDetails, [
            {
                name: "COR_INFORMATION_AREAs", kind: "collection", elementType: lightSwitchApplication.COR_INFORMATION_AREA,
                createQuery: function (INFORMATION_AREA_NAME) {
                    return this.dataWorkspace.DDATAPOLICYData.COR_INFORMATION_AREAs.filter("" + ((INFORMATION_AREA_NAME === undefined || INFORMATION_AREA_NAME === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(INFORMATION_AREA_NAME, "String?") + ")") + "");
                }
            },
            { name: "InformationAreaName", kind: "local", type: String }
        ], [
            { name: "Label" }
        ]),

        ViewInformationAreaDetails: $defineScreen(ViewInformationAreaDetails, [
            {
                name: "InformationAreas", kind: "collection", elementType: lightSwitchApplication.InformationArea,
                createQuery: function () {
                    return this.dataWorkspace.DDATAPOLICYData.InformationAreas;
                }
            },
            { name: "InformationAreaName", kind: "local", type: String },
            {
                name: "COR_INFORMATION_AREAs", kind: "collection", elementType: lightSwitchApplication.COR_INFORMATION_AREA,
                createQuery: function (INFORMATION_AREA_NAME) {
                    return this.dataWorkspace.DDATAPOLICYData.COR_INFORMATION_AREAs.filter("" + ((INFORMATION_AREA_NAME === undefined || INFORMATION_AREA_NAME === null) ? "false" : "(INFORMATION_AREA_NAME eq " + $toODataString(INFORMATION_AREA_NAME, "String?") + ")") + "");
                }
            },
            { name: "Text", kind: "local", type: String }
        ], [
            { name: "Edit" },
            { name: "Delete" },
            { name: "Label" },
            { name: "Method" }
        ]),

        showAddEditCOR_INFORMATION_AREA: $defineShowScreen(function showAddEditCOR_INFORMATION_AREA(COR_INFORMATION_AREA, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCOR_INFORMATION_AREA screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCOR_INFORMATION_AREA", parameters, options);
        }),

        showBrowseCOR_INFORMATION_AREAs: $defineShowScreen(function showBrowseCOR_INFORMATION_AREAs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCOR_INFORMATION_AREAs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCOR_INFORMATION_AREAs", parameters, options);
        }),

        showViewCOR_INFORMATION_AREA: $defineShowScreen(function showViewCOR_INFORMATION_AREA(COR_INFORMATION_AREA, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewCOR_INFORMATION_AREA screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewCOR_INFORMATION_AREA", parameters, options);
        }),

        showAddEditEmployeeProject: $defineShowScreen(function showAddEditEmployeeProject(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeProject", parameters, options);
        }),

        showBrowseEmployeeProjects: $defineShowScreen(function showBrowseEmployeeProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeProjects", parameters, options);
        }),

        showViewEmployeeProject: $defineShowScreen(function showViewEmployeeProject(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEmployeeProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEmployeeProject", parameters, options);
        }),

        showAddEditMonthTable: $defineShowScreen(function showAddEditMonthTable(MonthTable, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMonthTable screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMonthTable", parameters, options);
        }),

        showBrowseMonthTables: $defineShowScreen(function showBrowseMonthTables(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMonthTables screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMonthTables", parameters, options);
        }),

        showViewMonthTable: $defineShowScreen(function showViewMonthTable(MonthTable, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewMonthTable screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewMonthTable", parameters, options);
        }),

        showAddEditCOR_DATASET: $defineShowScreen(function showAddEditCOR_DATASET(COR_DATASET, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCOR_DATASET screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCOR_DATASET", parameters, options);
        }),

        showAddEditCOR_SUBJECT_AREA: $defineShowScreen(function showAddEditCOR_SUBJECT_AREA(COR_SUBJECT_AREA, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCOR_SUBJECT_AREA screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCOR_SUBJECT_AREA", parameters, options);
        }),

        showAddEditCOR_SUBJECT_AREA_GROUP: $defineShowScreen(function showAddEditCOR_SUBJECT_AREA_GROUP(COR_SUBJECT_AREA_GROUP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCOR_SUBJECT_AREA_GROUP screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCOR_SUBJECT_AREA_GROUP", parameters, options);
        }),

        showAddEditInformationAreaDetail: $defineShowScreen(function showAddEditInformationAreaDetail(InformationAreaDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditInformationAreaDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditInformationAreaDetail", parameters, options);
        }),

        showBrowseInformationAreaDetails: $defineShowScreen(function showBrowseInformationAreaDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseInformationAreaDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseInformationAreaDetails", parameters, options);
        }),

        showEditInformationArea: $defineShowScreen(function showEditInformationArea(InformationAreaName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditInformationArea screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditInformationArea", parameters, options);
        }),

        showEditInformationAreaDetails: $defineShowScreen(function showEditInformationAreaDetails(InformationAreaName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditInformationAreaDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditInformationAreaDetails", parameters, options);
        }),

        showViewInformationAreaDetails: $defineShowScreen(function showViewInformationAreaDetails(InformationAreaName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewInformationAreaDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewInformationAreaDetails", parameters, options);
        })

    });

}(msls.application));
