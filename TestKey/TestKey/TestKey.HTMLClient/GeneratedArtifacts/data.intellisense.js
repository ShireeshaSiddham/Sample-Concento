/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.EmployeeMonth, {
        /// <field>
        /// Called when a new employeeMonth is created.
        /// <br/>created(msls.application.EmployeeMonth entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeMonth]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeProject, {
        /// <field>
        /// Called when a new employeeProject is created.
        /// <br/>created(msls.application.EmployeeProject entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeProject]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeTable, {
        /// <field>
        /// Called when a new employeeTable is created.
        /// <br/>created(msls.application.EmployeeTable entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeTable]
    });

    msls._addEntryPoints(lightSwitchApplication.EmpProj, {
        /// <field>
        /// Called when a new empProj is created.
        /// <br/>created(msls.application.EmpProj entity)
        /// </field>
        created: [lightSwitchApplication.EmpProj]
    });

    msls._addEntryPoints(lightSwitchApplication.MonthTable, {
        /// <field>
        /// Called when a new monthTable is created.
        /// <br/>created(msls.application.MonthTable entity)
        /// </field>
        created: [lightSwitchApplication.MonthTable]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjectTable, {
        /// <field>
        /// Called when a new projectTable is created.
        /// <br/>created(msls.application.ProjectTable entity)
        /// </field>
        created: [lightSwitchApplication.ProjectTable]
    });

    msls._addEntryPoints(lightSwitchApplication.COR_DATASET, {
        /// <field>
        /// Called when a new cOR_DATASET is created.
        /// <br/>created(msls.application.COR_DATASET entity)
        /// </field>
        created: [lightSwitchApplication.COR_DATASET]
    });

    msls._addEntryPoints(lightSwitchApplication.COR_INFORMATION_AREA, {
        /// <field>
        /// Called when a new cOR_INFORMATION_AREA is created.
        /// <br/>created(msls.application.COR_INFORMATION_AREA entity)
        /// </field>
        created: [lightSwitchApplication.COR_INFORMATION_AREA]
    });

    msls._addEntryPoints(lightSwitchApplication.COR_SUBJECT_AREA_GROUP, {
        /// <field>
        /// Called when a new cOR_SUBJECT_AREA_GROUP is created.
        /// <br/>created(msls.application.COR_SUBJECT_AREA_GROUP entity)
        /// </field>
        created: [lightSwitchApplication.COR_SUBJECT_AREA_GROUP]
    });

    msls._addEntryPoints(lightSwitchApplication.COR_SUBJECT_AREA, {
        /// <field>
        /// Called when a new cOR_SUBJECT_AREA is created.
        /// <br/>created(msls.application.COR_SUBJECT_AREA entity)
        /// </field>
        created: [lightSwitchApplication.COR_SUBJECT_AREA]
    });

    msls._addEntryPoints(lightSwitchApplication.Dataset, {
        /// <field>
        /// Called when a new dataset is created.
        /// <br/>created(msls.application.Dataset entity)
        /// </field>
        created: [lightSwitchApplication.Dataset]
    });

    msls._addEntryPoints(lightSwitchApplication.InformationArea, {
        /// <field>
        /// Called when a new informationArea is created.
        /// <br/>created(msls.application.InformationArea entity)
        /// </field>
        created: [lightSwitchApplication.InformationArea]
    });

    msls._addEntryPoints(lightSwitchApplication.Subject_Area_Group, {
        /// <field>
        /// Called when a new subject_Area_Group is created.
        /// <br/>created(msls.application.Subject_Area_Group entity)
        /// </field>
        created: [lightSwitchApplication.Subject_Area_Group]
    });

    msls._addEntryPoints(lightSwitchApplication.Subject_Area, {
        /// <field>
        /// Called when a new subject_Area is created.
        /// <br/>created(msls.application.Subject_Area entity)
        /// </field>
        created: [lightSwitchApplication.Subject_Area]
    });

}(msls.application));
