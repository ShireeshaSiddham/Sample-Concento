/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function EmployeeMonth(entitySet) {
        /// <summary>
        /// Represents the EmployeeMonth entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeMonth.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeMonth.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this employeeMonth.
        /// </field>
        /// <field name="NoOfHolidays" type="Number">
        /// Gets or sets the noOfHolidays for this employeeMonth.
        /// </field>
        /// <field name="NoOfLeaves" type="Number">
        /// Gets or sets the noOfLeaves for this employeeMonth.
        /// </field>
        /// <field name="TotalHours" type="Number">
        /// Gets or sets the totalHours for this employeeMonth.
        /// </field>
        /// <field name="EmployeeTable" type="msls.application.EmployeeTable">
        /// Gets or sets the employeeTable for this employeeMonth.
        /// </field>
        /// <field name="MonthTable" type="msls.application.MonthTable">
        /// Gets or sets the monthTable for this employeeMonth.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeMonth.Details">
        /// Gets the details for this employeeMonth.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeProject(entitySet) {
        /// <summary>
        /// Represents the EmployeeProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeProject.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this employeeProject.
        /// </field>
        /// <field name="TaskID" type="Number">
        /// Gets or sets the taskID for this employeeProject.
        /// </field>
        /// <field name="SubProject" type="String">
        /// Gets or sets the subProject for this employeeProject.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this employeeProject.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this employeeProject.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this employeeProject.
        /// </field>
        /// <field name="ProjectTable" type="msls.application.ProjectTable">
        /// Gets or sets the projectTable for this employeeProject.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeProject.Details">
        /// Gets the details for this employeeProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeTable(entitySet) {
        /// <summary>
        /// Represents the EmployeeTable entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeTable.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeTable.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this employeeTable.
        /// </field>
        /// <field name="Designation" type="String">
        /// Gets or sets the designation for this employeeTable.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employeeTable.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this employeeTable.
        /// </field>
        /// <field name="EmployeeMonths" type="msls.EntityCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the employeeMonths for this employeeTable.
        /// </field>
        /// <field name="EmployeeTables" type="msls.EntityCollection" elementType="msls.application.EmployeeTable">
        /// Gets the employeeTables for this employeeTable.
        /// </field>
        /// <field name="EmployeeTable1" type="msls.application.EmployeeTable">
        /// Gets or sets the employeeTable1 for this employeeTable.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeTable.Details">
        /// Gets the details for this employeeTable.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmpProj(entitySet) {
        /// <summary>
        /// Represents the EmpProj entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this empProj.
        /// </param>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this empProj.
        /// </field>
        /// <field name="SubProject" type="String">
        /// Gets or sets the subProject for this empProj.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this empProj.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this empProj.
        /// </field>
        /// <field name="details" type="msls.application.EmpProj.Details">
        /// Gets the details for this empProj.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function MonthTable(entitySet) {
        /// <summary>
        /// Represents the MonthTable entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this monthTable.
        /// </param>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this monthTable.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this monthTable.
        /// </field>
        /// <field name="NoOfDays" type="Number">
        /// Gets or sets the noOfDays for this monthTable.
        /// </field>
        /// <field name="WeekDays" type="Number">
        /// Gets or sets the weekDays for this monthTable.
        /// </field>
        /// <field name="EmployeeMonths" type="msls.EntityCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the employeeMonths for this monthTable.
        /// </field>
        /// <field name="details" type="msls.application.MonthTable.Details">
        /// Gets the details for this monthTable.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectTable(entitySet) {
        /// <summary>
        /// Represents the ProjectTable entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectTable.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this projectTable.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this projectTable.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectTable.
        /// </field>
        /// <field name="Complexity" type="Number">
        /// Gets or sets the complexity for this projectTable.
        /// </field>
        /// <field name="Scope" type="Number">
        /// Gets or sets the scope for this projectTable.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this projectTable.
        /// </field>
        /// <field name="ProjectStatus" type="String">
        /// Gets or sets the projectStatus for this projectTable.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this projectTable.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this projectTable.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.EntityCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this projectTable.
        /// </field>
        /// <field name="details" type="msls.application.ProjectTable.Details">
        /// Gets the details for this projectTable.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function COR_DATASET(entitySet) {
        /// <summary>
        /// Represents the COR_DATASET entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cOR_DATASET.
        /// </param>
        /// <field name="DATASET_ID" type="String">
        /// Gets or sets the dATASET_ID for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_NAME" type="String">
        /// Gets or sets the dATASET_NAME for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_DESCRIPTION" type="String">
        /// Gets or sets the dATASET_DESCRIPTION for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_SME" type="String">
        /// Gets or sets the dATA_SME for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_STEWARD" type="String">
        /// Gets or sets the dATA_STEWARD for this cOR_DATASET.
        /// </field>
        /// <field name="DATASOURCE_ID" type="String">
        /// Gets or sets the dATASOURCE_ID for this cOR_DATASET.
        /// </field>
        /// <field name="TECHNICAL_SME" type="String">
        /// Gets or sets the tECHNICAL_SME for this cOR_DATASET.
        /// </field>
        /// <field name="HOW_TO_ACCESS" type="String">
        /// Gets or sets the hOW_TO_ACCESS for this cOR_DATASET.
        /// </field>
        /// <field name="TRAINING_INFORMATION" type="String">
        /// Gets or sets the tRAINING_INFORMATION for this cOR_DATASET.
        /// </field>
        /// <field name="USERS" type="String">
        /// Gets or sets the uSERS for this cOR_DATASET.
        /// </field>
        /// <field name="USAGE_SCENARIOS" type="String">
        /// Gets or sets the uSAGE_SCENARIOS for this cOR_DATASET.
        /// </field>
        /// <field name="USAGE_GUIDLINES" type="String">
        /// Gets or sets the uSAGE_GUIDLINES for this cOR_DATASET.
        /// </field>
        /// <field name="HISTORICAL_DATA_AVAILABLE" type="String">
        /// Gets or sets the hISTORICAL_DATA_AVAILABLE for this cOR_DATASET.
        /// </field>
        /// <field name="REFERENCE_DOCUMENTATION" type="String">
        /// Gets or sets the rEFERENCE_DOCUMENTATION for this cOR_DATASET.
        /// </field>
        /// <field name="UPDATE_FREQUENCY" type="String">
        /// Gets or sets the uPDATE_FREQUENCY for this cOR_DATASET.
        /// </field>
        /// <field name="GRANULARITY" type="String">
        /// Gets or sets the gRANULARITY for this cOR_DATASET.
        /// </field>
        /// <field name="ALIASES" type="String">
        /// Gets or sets the aLIASES for this cOR_DATASET.
        /// </field>
        /// <field name="ADDITIONAL_NOTES" type="String">
        /// Gets or sets the aDDITIONAL_NOTES for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_ACCESS_TOOLS_USED" type="String">
        /// Gets or sets the dATA_ACCESS_TOOLS_USED for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_ACQUISITION_METHOD" type="String">
        /// Gets or sets the dATA_ACQUISITION_METHOD for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_ACQUISITION_DETAILS" type="String">
        /// Gets or sets the dATA_ACQUISITION_DETAILS for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_CLASSIFICATION" type="String">
        /// Gets or sets the dATASET_CLASSIFICATION for this cOR_DATASET.
        /// </field>
        /// <field name="DATA_CLASSIFICATION_RATIONALE" type="String">
        /// Gets or sets the dATA_CLASSIFICATION_RATIONALE for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_TYPE" type="String">
        /// Gets or sets the dATASET_TYPE for this cOR_DATASET.
        /// </field>
        /// <field name="TECHNICAL_OBJECT_TYPE_ID" type="String">
        /// Gets or sets the tECHNICAL_OBJECT_TYPE_ID for this cOR_DATASET.
        /// </field>
        /// <field name="TECHNICAL_OBJECT_NAME" type="String">
        /// Gets or sets the tECHNICAL_OBJECT_NAME for this cOR_DATASET.
        /// </field>
        /// <field name="OBJECT_TYPE_ID" type="Number">
        /// Gets or sets the oBJECT_TYPE_ID for this cOR_DATASET.
        /// </field>
        /// <field name="REVIEW_STATUS" type="String">
        /// Gets or sets the rEVIEW_STATUS for this cOR_DATASET.
        /// </field>
        /// <field name="OLD_REVIEW_STATUS" type="String">
        /// Gets or sets the oLD_REVIEW_STATUS for this cOR_DATASET.
        /// </field>
        /// <field name="RECORD_TYPE_TABLE" type="String">
        /// Gets or sets the rECORD_TYPE_TABLE for this cOR_DATASET.
        /// </field>
        /// <field name="RECORD_TYPE_FIELD" type="String">
        /// Gets or sets the rECORD_TYPE_FIELD for this cOR_DATASET.
        /// </field>
        /// <field name="FUNCTIONAL_LEAD" type="String">
        /// Gets or sets the fUNCTIONAL_LEAD for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_OWNER" type="String">
        /// Gets or sets the dATASET_OWNER for this cOR_DATASET.
        /// </field>
        /// <field name="DEVELOPER" type="String">
        /// Gets or sets the dEVELOPER for this cOR_DATASET.
        /// </field>
        /// <field name="GEOGRAPHIC_SCOPE" type="String">
        /// Gets or sets the gEOGRAPHIC_SCOPE for this cOR_DATASET.
        /// </field>
        /// <field name="RETENTION_UNIT" type="String">
        /// Gets or sets the rETENTION_UNIT for this cOR_DATASET.
        /// </field>
        /// <field name="RETENTION_LENGTH" type="Number">
        /// Gets or sets the rETENTION_LENGTH for this cOR_DATASET.
        /// </field>
        /// <field name="LOAD_TYPE" type="String">
        /// Gets or sets the lOAD_TYPE for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_ACTIVE" type="Boolean">
        /// Gets or sets the dATASET_ACTIVE for this cOR_DATASET.
        /// </field>
        /// <field name="TIER" type="String">
        /// Gets or sets the tIER for this cOR_DATASET.
        /// </field>
        /// <field name="COMPLEXITY" type="String">
        /// Gets or sets the cOMPLEXITY for this cOR_DATASET.
        /// </field>
        /// <field name="DESIGN_DATE" type="Date">
        /// Gets or sets the dESIGN_DATE for this cOR_DATASET.
        /// </field>
        /// <field name="DEVELOP_DATE" type="Date">
        /// Gets or sets the dEVELOP_DATE for this cOR_DATASET.
        /// </field>
        /// <field name="TEST_DATE" type="Date">
        /// Gets or sets the tEST_DATE for this cOR_DATASET.
        /// </field>
        /// <field name="CONTROL" type="Number">
        /// Gets or sets the cONTROL for this cOR_DATASET.
        /// </field>
        /// <field name="WORKSHOP_DATE" type="Date">
        /// Gets or sets the wORKSHOP_DATE for this cOR_DATASET.
        /// </field>
        /// <field name="WORKSHOP_NOTES" type="String">
        /// Gets or sets the wORKSHOP_NOTES for this cOR_DATASET.
        /// </field>
        /// <field name="RICEFW" type="String">
        /// Gets or sets the rICEFW for this cOR_DATASET.
        /// </field>
        /// <field name="TCODE" type="String">
        /// Gets or sets the tCODE for this cOR_DATASET.
        /// </field>
        /// <field name="SHORT_NAME" type="String">
        /// Gets or sets the sHORT_NAME for this cOR_DATASET.
        /// </field>
        /// <field name="RELEVANCY_RULE" type="String">
        /// Gets or sets the rELEVANCY_RULE for this cOR_DATASET.
        /// </field>
        /// <field name="LOAD_XML_ID" type="String">
        /// Gets or sets the lOAD_XML_ID for this cOR_DATASET.
        /// </field>
        /// <field name="LOAD_FILE_NAME" type="String">
        /// Gets or sets the lOAD_FILE_NAME for this cOR_DATASET.
        /// </field>
        /// <field name="TARGET_SERVER" type="String">
        /// Gets or sets the tARGET_SERVER for this cOR_DATASET.
        /// </field>
        /// <field name="TARGET_DATABASE" type="String">
        /// Gets or sets the tARGET_DATABASE for this cOR_DATASET.
        /// </field>
        /// <field name="TARGET_DATASTORE" type="String">
        /// Gets or sets the tARGET_DATASTORE for this cOR_DATASET.
        /// </field>
        /// <field name="DESIGN_DOC" type="String">
        /// Gets or sets the dESIGN_DOC for this cOR_DATASET.
        /// </field>
        /// <field name="REVIEWED_BY" type="String">
        /// Gets or sets the rEVIEWED_BY for this cOR_DATASET.
        /// </field>
        /// <field name="REVIEWED_ON" type="Date">
        /// Gets or sets the rEVIEWED_ON for this cOR_DATASET.
        /// </field>
        /// <field name="CREATED_BY" type="String">
        /// Gets or sets the cREATED_BY for this cOR_DATASET.
        /// </field>
        /// <field name="CREATED_ON" type="Date">
        /// Gets or sets the cREATED_ON for this cOR_DATASET.
        /// </field>
        /// <field name="MODIFIED_BY" type="String">
        /// Gets or sets the mODIFIED_BY for this cOR_DATASET.
        /// </field>
        /// <field name="MODIFIED_ON" type="Date">
        /// Gets or sets the mODIFIED_ON for this cOR_DATASET.
        /// </field>
        /// <field name="SOURCE_SYSTEM" type="String">
        /// Gets or sets the sOURCE_SYSTEM for this cOR_DATASET.
        /// </field>
        /// <field name="DATASET_TYPE_ID" type="String">
        /// Gets or sets the dATASET_TYPE_ID for this cOR_DATASET.
        /// </field>
        /// <field name="COR_SUBJECT_AREA" type="msls.application.COR_SUBJECT_AREA">
        /// Gets or sets the cOR_SUBJECT_AREA for this cOR_DATASET.
        /// </field>
        /// <field name="details" type="msls.application.COR_DATASET.Details">
        /// Gets the details for this cOR_DATASET.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function COR_INFORMATION_AREA(entitySet) {
        /// <summary>
        /// Represents the COR_INFORMATION_AREA entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cOR_INFORMATION_AREA.
        /// </param>
        /// <field name="INFORMATION_AREA_ID" type="String">
        /// Gets or sets the iNFORMATION_AREA_ID for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="INFORMATION_AREA_NAME" type="String">
        /// Gets or sets the iNFORMATION_AREA_NAME for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="INFORMATION_AREA_DESCRIPTION" type="String">
        /// Gets or sets the iNFORMATION_AREA_DESCRIPTION for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="INFORMATION_ARCHITECT_ID" type="String">
        /// Gets or sets the iNFORMATION_ARCHITECT_ID for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="REVIEW_STATUS" type="String">
        /// Gets or sets the rEVIEW_STATUS for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="OLD_REVIEW_STATUS" type="String">
        /// Gets or sets the oLD_REVIEW_STATUS for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="REVIEWED_BY" type="String">
        /// Gets or sets the rEVIEWED_BY for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="REVIEWED_ON" type="Date">
        /// Gets or sets the rEVIEWED_ON for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="CREATED_BY" type="String">
        /// Gets or sets the cREATED_BY for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="CREATED_ON" type="Date">
        /// Gets or sets the cREATED_ON for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="MODIFIED_ON" type="Date">
        /// Gets or sets the mODIFIED_ON for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="MODIFIED_BY" type="String">
        /// Gets or sets the mODIFIED_BY for this cOR_INFORMATION_AREA.
        /// </field>
        /// <field name="details" type="msls.application.COR_INFORMATION_AREA.Details">
        /// Gets the details for this cOR_INFORMATION_AREA.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function COR_SUBJECT_AREA_GROUP(entitySet) {
        /// <summary>
        /// Represents the COR_SUBJECT_AREA_GROUP entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cOR_SUBJECT_AREA_GROUP.
        /// </param>
        /// <field name="SUBJECT_AREA_GROUP_ID" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_ID for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="INFORMATION_AREA_ID" type="String">
        /// Gets or sets the iNFORMATION_AREA_ID for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_NAME for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_DESCRIPTION" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_DESCRIPTION for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_ALIASES" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_ALIASES for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="REVIEW_STATUS" type="String">
        /// Gets or sets the rEVIEW_STATUS for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="OLD_REVIEW_STATUS" type="String">
        /// Gets or sets the oLD_REVIEW_STATUS for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_OWNER" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_OWNER for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="REVIEWED_BY" type="String">
        /// Gets or sets the rEVIEWED_BY for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="REVIEWED_ON" type="Date">
        /// Gets or sets the rEVIEWED_ON for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="CREATED_BY" type="String">
        /// Gets or sets the cREATED_BY for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="CREATED_ON" type="Date">
        /// Gets or sets the cREATED_ON for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="MODIFIED_BY" type="String">
        /// Gets or sets the mODIFIED_BY for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="MODIFIED_ON" type="Date">
        /// Gets or sets the mODIFIED_ON for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        /// <field name="details" type="msls.application.COR_SUBJECT_AREA_GROUP.Details">
        /// Gets the details for this cOR_SUBJECT_AREA_GROUP.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function COR_SUBJECT_AREA(entitySet) {
        /// <summary>
        /// Represents the COR_SUBJECT_AREA entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cOR_SUBJECT_AREA.
        /// </param>
        /// <field name="SUBJECT_AREA_ID" type="String">
        /// Gets or sets the sUBJECT_AREA_ID for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_ID" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_ID for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_NAME for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_DESCRIPTION" type="String">
        /// Gets or sets the sUBJECT_AREA_DESCRIPTION for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_DATA_STEWARD" type="String">
        /// Gets or sets the sUBJECT_AREA_DATA_STEWARD for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_SOLUTION_MANAGER" type="String">
        /// Gets or sets the sUBJECT_AREA_SOLUTION_MANAGER for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="SUBJECT_AREA_ALIASES" type="String">
        /// Gets or sets the sUBJECT_AREA_ALIASES for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="DATA_FLOW_DIAGRAM" type="String">
        /// Gets or sets the dATA_FLOW_DIAGRAM for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="DATA_CLASSIFICATION_ID" type="String">
        /// Gets or sets the dATA_CLASSIFICATION_ID for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="DATA_CLASSIFICATION_RATIONALE" type="String">
        /// Gets or sets the dATA_CLASSIFICATION_RATIONALE for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="REVIEW_STATUS" type="String">
        /// Gets or sets the rEVIEW_STATUS for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="OLD_REVIEW_STATUS" type="String">
        /// Gets or sets the oLD_REVIEW_STATUS for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="REVIEWED_BY" type="String">
        /// Gets or sets the rEVIEWED_BY for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="REVIEWED_ON" type="Date">
        /// Gets or sets the rEVIEWED_ON for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="CREATED_BY" type="String">
        /// Gets or sets the cREATED_BY for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="CREATED_ON" type="Date">
        /// Gets or sets the cREATED_ON for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="MODIFIED_BY" type="String">
        /// Gets or sets the mODIFIED_BY for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="MODIFIED_ON" type="Date">
        /// Gets or sets the mODIFIED_ON for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="COR_DATASETs" type="msls.EntityCollection" elementType="msls.application.COR_DATASET">
        /// Gets the cOR_DATASETs for this cOR_SUBJECT_AREA.
        /// </field>
        /// <field name="details" type="msls.application.COR_SUBJECT_AREA.Details">
        /// Gets the details for this cOR_SUBJECT_AREA.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Dataset(entitySet) {
        /// <summary>
        /// Represents the Dataset entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this dataset.
        /// </param>
        /// <field name="INFORMATION_AREA_NAME" type="String">
        /// Gets or sets the iNFORMATION_AREA_NAME for this dataset.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_NAME for this dataset.
        /// </field>
        /// <field name="SUBJECT_AREA_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_NAME for this dataset.
        /// </field>
        /// <field name="DATASET_NAME" type="String">
        /// Gets or sets the dATASET_NAME for this dataset.
        /// </field>
        /// <field name="details" type="msls.application.Dataset.Details">
        /// Gets the details for this dataset.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InformationArea(entitySet) {
        /// <summary>
        /// Represents the InformationArea entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this informationArea.
        /// </param>
        /// <field name="INFORMATION_AREA_NAME" type="String">
        /// Gets or sets the iNFORMATION_AREA_NAME for this informationArea.
        /// </field>
        /// <field name="Cnt" type="Number">
        /// Gets or sets the cnt for this informationArea.
        /// </field>
        /// <field name="details" type="msls.application.InformationArea.Details">
        /// Gets the details for this informationArea.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Subject_Area_Group(entitySet) {
        /// <summary>
        /// Represents the Subject_Area_Group entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this subject_Area_Group.
        /// </param>
        /// <field name="INFORMATION_AREA_NAME" type="String">
        /// Gets or sets the iNFORMATION_AREA_NAME for this subject_Area_Group.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_NAME for this subject_Area_Group.
        /// </field>
        /// <field name="Cnt" type="Number">
        /// Gets or sets the cnt for this subject_Area_Group.
        /// </field>
        /// <field name="details" type="msls.application.Subject_Area_Group.Details">
        /// Gets the details for this subject_Area_Group.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Subject_Area(entitySet) {
        /// <summary>
        /// Represents the Subject_Area entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this subject_Area.
        /// </param>
        /// <field name="INFORMATION_AREA_NAME" type="String">
        /// Gets or sets the iNFORMATION_AREA_NAME for this subject_Area.
        /// </field>
        /// <field name="SUBJECT_AREA_GROUP_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_GROUP_NAME for this subject_Area.
        /// </field>
        /// <field name="SUBJECT_AREA_NAME" type="String">
        /// Gets or sets the sUBJECT_AREA_NAME for this subject_Area.
        /// </field>
        /// <field name="Cnt" type="Number">
        /// Gets or sets the cnt for this subject_Area.
        /// </field>
        /// <field name="details" type="msls.application.Subject_Area.Details">
        /// Gets the details for this subject_Area.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function LS_UTData(dataWorkspace) {
        /// <summary>
        /// Represents the LS_UTData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="EmployeeMonths" type="msls.EntitySet">
        /// Gets the EmployeeMonths entity set.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.EntitySet">
        /// Gets the EmployeeProjects entity set.
        /// </field>
        /// <field name="EmployeeTables" type="msls.EntitySet">
        /// Gets the EmployeeTables entity set.
        /// </field>
        /// <field name="EmpProjs" type="msls.EntitySet">
        /// Gets the EmpProjs entity set.
        /// </field>
        /// <field name="MonthTables" type="msls.EntitySet">
        /// Gets the MonthTables entity set.
        /// </field>
        /// <field name="ProjectTables" type="msls.EntitySet">
        /// Gets the ProjectTables entity set.
        /// </field>
        /// <field name="details" type="msls.application.LS_UTData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function DDATAPOLICYData(dataWorkspace) {
        /// <summary>
        /// Represents the DDATAPOLICYData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="COR_DATASETs" type="msls.EntitySet">
        /// Gets the COR_DATASETs entity set.
        /// </field>
        /// <field name="COR_INFORMATION_AREAs" type="msls.EntitySet">
        /// Gets the COR_INFORMATION_AREAs entity set.
        /// </field>
        /// <field name="COR_SUBJECT_AREA_GROUPs" type="msls.EntitySet">
        /// Gets the COR_SUBJECT_AREA_GROUPs entity set.
        /// </field>
        /// <field name="COR_SUBJECT_AREAs" type="msls.EntitySet">
        /// Gets the COR_SUBJECT_AREAs entity set.
        /// </field>
        /// <field name="Datasets" type="msls.EntitySet">
        /// Gets the Datasets entity set.
        /// </field>
        /// <field name="InformationAreas" type="msls.EntitySet">
        /// Gets the InformationAreas entity set.
        /// </field>
        /// <field name="Subject_Area_Groups" type="msls.EntitySet">
        /// Gets the Subject_Area_Groups entity set.
        /// </field>
        /// <field name="Subject_Areas" type="msls.EntitySet">
        /// Gets the Subject_Areas entity set.
        /// </field>
        /// <field name="details" type="msls.application.DDATAPOLICYData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="LS_UTData" type="msls.application.LS_UTData">
        /// Gets the LS_UTData data service.
        /// </field>
        /// <field name="DDATAPOLICYData" type="msls.application.DDATAPOLICYData">
        /// Gets the DDATAPOLICYData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        EmployeeMonth: $defineEntity(EmployeeMonth, [
            { name: "EmpID", type: Number },
            { name: "MonthID", type: Number },
            { name: "NoOfHolidays", type: Number },
            { name: "NoOfLeaves", type: Number },
            { name: "TotalHours", type: Number },
            { name: "EmployeeTable", kind: "reference", type: EmployeeTable },
            { name: "MonthTable", kind: "reference", type: MonthTable }
        ]),

        EmployeeProject: $defineEntity(EmployeeProject, [
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "TaskID", type: Number, isReadOnly: true },
            { name: "SubProject", type: String },
            { name: "MonthID", type: Number },
            { name: "c_Date", type: Date },
            { name: "Hours", type: String },
            { name: "ProjectTable", kind: "reference", type: ProjectTable }
        ]),

        EmployeeTable: $defineEntity(EmployeeTable, [
            { name: "EmpID", type: Number },
            { name: "EmpName", type: String },
            { name: "Designation", type: String },
            { name: "Email", type: String },
            { name: "UserName", type: String },
            { name: "EmployeeMonths", kind: "collection", elementType: EmployeeMonth },
            { name: "EmployeeTables", kind: "collection", elementType: EmployeeTable },
            { name: "EmployeeTable1", kind: "reference", type: EmployeeTable }
        ]),

        EmpProj: $defineEntity(EmpProj, [
            { name: "MonthName", type: String },
            { name: "SubProject", type: String },
            { name: "c_Date", type: Date },
            { name: "Hours", type: String }
        ]),

        MonthTable: $defineEntity(MonthTable, [
            { name: "MonthID", type: Number, isReadOnly: true },
            { name: "MonthName", type: String },
            { name: "NoOfDays", type: Number },
            { name: "WeekDays", type: Number },
            { name: "EmployeeMonths", kind: "collection", elementType: EmployeeMonth }
        ]),

        ProjectTable: $defineEntity(ProjectTable, [
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number, isReadOnly: true },
            { name: "ProjectName", type: String },
            { name: "Complexity", type: Number },
            { name: "Scope", type: Number },
            { name: "ProjectType", type: String },
            { name: "ProjectStatus", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "EmployeeProjects", kind: "collection", elementType: EmployeeProject }
        ]),

        COR_DATASET: $defineEntity(COR_DATASET, [
            { name: "DATASET_ID", type: String },
            { name: "DATASET_NAME", type: String },
            { name: "DATASET_DESCRIPTION", type: String },
            { name: "DATA_SME", type: String },
            { name: "DATA_STEWARD", type: String },
            { name: "DATASOURCE_ID", type: String },
            { name: "TECHNICAL_SME", type: String },
            { name: "HOW_TO_ACCESS", type: String },
            { name: "TRAINING_INFORMATION", type: String },
            { name: "USERS", type: String },
            { name: "USAGE_SCENARIOS", type: String },
            { name: "USAGE_GUIDLINES", type: String },
            { name: "HISTORICAL_DATA_AVAILABLE", type: String },
            { name: "REFERENCE_DOCUMENTATION", type: String },
            { name: "UPDATE_FREQUENCY", type: String },
            { name: "GRANULARITY", type: String },
            { name: "ALIASES", type: String },
            { name: "ADDITIONAL_NOTES", type: String },
            { name: "DATA_ACCESS_TOOLS_USED", type: String },
            { name: "DATA_ACQUISITION_METHOD", type: String },
            { name: "DATA_ACQUISITION_DETAILS", type: String },
            { name: "DATASET_CLASSIFICATION", type: String },
            { name: "DATA_CLASSIFICATION_RATIONALE", type: String },
            { name: "DATASET_TYPE", type: String },
            { name: "TECHNICAL_OBJECT_TYPE_ID", type: String },
            { name: "TECHNICAL_OBJECT_NAME", type: String },
            { name: "OBJECT_TYPE_ID", type: Number },
            { name: "REVIEW_STATUS", type: String },
            { name: "OLD_REVIEW_STATUS", type: String },
            { name: "RECORD_TYPE_TABLE", type: String },
            { name: "RECORD_TYPE_FIELD", type: String },
            { name: "FUNCTIONAL_LEAD", type: String },
            { name: "DATASET_OWNER", type: String },
            { name: "DEVELOPER", type: String },
            { name: "GEOGRAPHIC_SCOPE", type: String },
            { name: "RETENTION_UNIT", type: String },
            { name: "RETENTION_LENGTH", type: Number },
            { name: "LOAD_TYPE", type: String },
            { name: "DATASET_ACTIVE", type: Boolean },
            { name: "TIER", type: String },
            { name: "COMPLEXITY", type: String },
            { name: "DESIGN_DATE", type: Date },
            { name: "DEVELOP_DATE", type: Date },
            { name: "TEST_DATE", type: Date },
            { name: "CONTROL", type: Number },
            { name: "WORKSHOP_DATE", type: Date },
            { name: "WORKSHOP_NOTES", type: String },
            { name: "RICEFW", type: String },
            { name: "TCODE", type: String },
            { name: "SHORT_NAME", type: String },
            { name: "RELEVANCY_RULE", type: String },
            { name: "LOAD_XML_ID", type: String },
            { name: "LOAD_FILE_NAME", type: String },
            { name: "TARGET_SERVER", type: String },
            { name: "TARGET_DATABASE", type: String },
            { name: "TARGET_DATASTORE", type: String },
            { name: "DESIGN_DOC", type: String },
            { name: "REVIEWED_BY", type: String },
            { name: "REVIEWED_ON", type: Date },
            { name: "CREATED_BY", type: String },
            { name: "CREATED_ON", type: Date },
            { name: "MODIFIED_BY", type: String },
            { name: "MODIFIED_ON", type: Date },
            { name: "SOURCE_SYSTEM", type: String },
            { name: "DATASET_TYPE_ID", type: String },
            { name: "COR_SUBJECT_AREA", kind: "reference", type: COR_SUBJECT_AREA }
        ]),

        COR_INFORMATION_AREA: $defineEntity(COR_INFORMATION_AREA, [
            { name: "INFORMATION_AREA_ID", type: String },
            { name: "INFORMATION_AREA_NAME", type: String },
            { name: "INFORMATION_AREA_DESCRIPTION", type: String },
            { name: "INFORMATION_ARCHITECT_ID", type: String },
            { name: "REVIEW_STATUS", type: String },
            { name: "OLD_REVIEW_STATUS", type: String },
            { name: "REVIEWED_BY", type: String },
            { name: "REVIEWED_ON", type: Date },
            { name: "CREATED_BY", type: String },
            { name: "CREATED_ON", type: Date },
            { name: "MODIFIED_ON", type: Date },
            { name: "MODIFIED_BY", type: String }
        ]),

        COR_SUBJECT_AREA_GROUP: $defineEntity(COR_SUBJECT_AREA_GROUP, [
            { name: "SUBJECT_AREA_GROUP_ID", type: String },
            { name: "INFORMATION_AREA_ID", type: String },
            { name: "SUBJECT_AREA_GROUP_NAME", type: String },
            { name: "SUBJECT_AREA_GROUP_DESCRIPTION", type: String },
            { name: "SUBJECT_AREA_GROUP_ALIASES", type: String },
            { name: "REVIEW_STATUS", type: String },
            { name: "OLD_REVIEW_STATUS", type: String },
            { name: "SUBJECT_AREA_GROUP_OWNER", type: String },
            { name: "REVIEWED_BY", type: String },
            { name: "REVIEWED_ON", type: Date },
            { name: "CREATED_BY", type: String },
            { name: "CREATED_ON", type: Date },
            { name: "MODIFIED_BY", type: String },
            { name: "MODIFIED_ON", type: Date }
        ]),

        COR_SUBJECT_AREA: $defineEntity(COR_SUBJECT_AREA, [
            { name: "SUBJECT_AREA_ID", type: String },
            { name: "SUBJECT_AREA_GROUP_ID", type: String },
            { name: "SUBJECT_AREA_NAME", type: String },
            { name: "SUBJECT_AREA_DESCRIPTION", type: String },
            { name: "SUBJECT_AREA_DATA_STEWARD", type: String },
            { name: "SUBJECT_AREA_SOLUTION_MANAGER", type: String },
            { name: "SUBJECT_AREA_ALIASES", type: String },
            { name: "DATA_FLOW_DIAGRAM", type: String },
            { name: "DATA_CLASSIFICATION_ID", type: String },
            { name: "DATA_CLASSIFICATION_RATIONALE", type: String },
            { name: "REVIEW_STATUS", type: String },
            { name: "OLD_REVIEW_STATUS", type: String },
            { name: "REVIEWED_BY", type: String },
            { name: "REVIEWED_ON", type: Date },
            { name: "CREATED_BY", type: String },
            { name: "CREATED_ON", type: Date },
            { name: "MODIFIED_BY", type: String },
            { name: "MODIFIED_ON", type: Date },
            { name: "COR_DATASETs", kind: "collection", elementType: COR_DATASET }
        ]),

        Dataset: $defineEntity(Dataset, [
            { name: "INFORMATION_AREA_NAME", type: String },
            { name: "SUBJECT_AREA_GROUP_NAME", type: String },
            { name: "SUBJECT_AREA_NAME", type: String },
            { name: "DATASET_NAME", type: String }
        ]),

        InformationArea: $defineEntity(InformationArea, [
            { name: "INFORMATION_AREA_NAME", type: String },
            { name: "Cnt", type: Number }
        ]),

        Subject_Area_Group: $defineEntity(Subject_Area_Group, [
            { name: "INFORMATION_AREA_NAME", type: String },
            { name: "SUBJECT_AREA_GROUP_NAME", type: String },
            { name: "Cnt", type: Number }
        ]),

        Subject_Area: $defineEntity(Subject_Area, [
            { name: "INFORMATION_AREA_NAME", type: String },
            { name: "SUBJECT_AREA_GROUP_NAME", type: String },
            { name: "SUBJECT_AREA_NAME", type: String },
            { name: "Cnt", type: Number }
        ]),

        LS_UTData: $defineDataService(LS_UTData, lightSwitchApplication.rootUri + "/LS_UTData.svc", [
            { name: "EmployeeMonths", elementType: EmployeeMonth },
            { name: "EmployeeProjects", elementType: EmployeeProject },
            { name: "EmployeeTables", elementType: EmployeeTable },
            { name: "EmpProjs", elementType: EmpProj },
            { name: "MonthTables", elementType: MonthTable },
            { name: "ProjectTables", elementType: ProjectTable }
        ], [
            {
                name: "EmployeeMonths_SingleOrDefault", value: function (EmpID, MonthID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeMonths },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/EmployeeMonths(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeProjects_SingleOrDefault", value: function (EmpID, ProjectID, TaskID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/EmployeeProjects(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "TaskID=" + $toODataString(TaskID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Query1", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/Query1()",
                        {
                        });
                }
            },
            {
                name: "EmployeeTables_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeTables },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/EmployeeTables(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmpProjs_SingleOrDefault", value: function (MonthName, Hours) {
                    return new $DataServiceQuery({ _entitySet: this.EmpProjs },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/EmpProjs(" + "MonthName=" + $toODataString(MonthName, "String?") + "," + "Hours=" + $toODataString(Hours, "Decimal?") + ")"
                    );
                }
            },
            {
                name: "MonthTables_SingleOrDefault", value: function (MonthID) {
                    return new $DataServiceQuery({ _entitySet: this.MonthTables },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/MonthTables(" + "MonthID=" + $toODataString(MonthID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectTables_SingleOrDefault", value: function (EmpID, ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectTables },
                        lightSwitchApplication.rootUri + "/LS_UTData.svc" + "/ProjectTables(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + ")"
                    );
                }
            }
        ]),

        DDATAPOLICYData: $defineDataService(DDATAPOLICYData, lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc", [
            { name: "COR_DATASETs", elementType: COR_DATASET },
            { name: "COR_INFORMATION_AREAs", elementType: COR_INFORMATION_AREA },
            { name: "COR_SUBJECT_AREA_GROUPs", elementType: COR_SUBJECT_AREA_GROUP },
            { name: "COR_SUBJECT_AREAs", elementType: COR_SUBJECT_AREA },
            { name: "Datasets", elementType: Dataset },
            { name: "InformationAreas", elementType: InformationArea },
            { name: "Subject_Area_Groups", elementType: Subject_Area_Group },
            { name: "Subject_Areas", elementType: Subject_Area }
        ], [
            {
                name: "COR_DATASETs_SingleOrDefault", value: function (DATASET_ID) {
                    return new $DataServiceQuery({ _entitySet: this.COR_DATASETs },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/COR_DATASETs(" + "DATASET_ID=" + $toODataString(DATASET_ID, "Guid?") + ")"
                    );
                }
            },
            {
                name: "COR_INFORMATION_AREAs_SingleOrDefault", value: function (INFORMATION_AREA_ID) {
                    return new $DataServiceQuery({ _entitySet: this.COR_INFORMATION_AREAs },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/COR_INFORMATION_AREAs(" + "INFORMATION_AREA_ID=" + $toODataString(INFORMATION_AREA_ID, "Guid?") + ")"
                    );
                }
            },
            {
                name: "COR_SUBJECT_AREA_GROUPs_SingleOrDefault", value: function (SUBJECT_AREA_GROUP_ID) {
                    return new $DataServiceQuery({ _entitySet: this.COR_SUBJECT_AREA_GROUPs },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/COR_SUBJECT_AREA_GROUPs(" + "SUBJECT_AREA_GROUP_ID=" + $toODataString(SUBJECT_AREA_GROUP_ID, "Guid?") + ")"
                    );
                }
            },
            {
                name: "COR_SUBJECT_AREAs_SingleOrDefault", value: function (SUBJECT_AREA_ID) {
                    return new $DataServiceQuery({ _entitySet: this.COR_SUBJECT_AREAs },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/COR_SUBJECT_AREAs(" + "SUBJECT_AREA_ID=" + $toODataString(SUBJECT_AREA_ID, "Guid?") + ")"
                    );
                }
            },
            {
                name: "Datasets_SingleOrDefault", value: function (INFORMATION_AREA_NAME, SUBJECT_AREA_GROUP_NAME, SUBJECT_AREA_NAME, DATASET_NAME) {
                    return new $DataServiceQuery({ _entitySet: this.Datasets },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/Datasets(" + "INFORMATION_AREA_NAME=" + $toODataString(INFORMATION_AREA_NAME, "String?") + "," + "SUBJECT_AREA_GROUP_NAME=" + $toODataString(SUBJECT_AREA_GROUP_NAME, "String?") + "," + "SUBJECT_AREA_NAME=" + $toODataString(SUBJECT_AREA_NAME, "String?") + "," + "DATASET_NAME=" + $toODataString(DATASET_NAME, "String?") + ")"
                    );
                }
            },
            {
                name: "InformationAreas_SingleOrDefault", value: function (INFORMATION_AREA_NAME) {
                    return new $DataServiceQuery({ _entitySet: this.InformationAreas },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/InformationAreas(" + "INFORMATION_AREA_NAME=" + $toODataString(INFORMATION_AREA_NAME, "String?") + ")"
                    );
                }
            },
            {
                name: "Subject_Area_Groups_SingleOrDefault", value: function (INFORMATION_AREA_NAME, SUBJECT_AREA_GROUP_NAME) {
                    return new $DataServiceQuery({ _entitySet: this.Subject_Area_Groups },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/Subject_Area_Groups(" + "INFORMATION_AREA_NAME=" + $toODataString(INFORMATION_AREA_NAME, "String?") + "," + "SUBJECT_AREA_GROUP_NAME=" + $toODataString(SUBJECT_AREA_GROUP_NAME, "String?") + ")"
                    );
                }
            },
            {
                name: "Subject_Areas_SingleOrDefault", value: function (INFORMATION_AREA_NAME, SUBJECT_AREA_GROUP_NAME, SUBJECT_AREA_NAME) {
                    return new $DataServiceQuery({ _entitySet: this.Subject_Areas },
                        lightSwitchApplication.rootUri + "/DDATAPOLICYData.svc" + "/Subject_Areas(" + "INFORMATION_AREA_NAME=" + $toODataString(INFORMATION_AREA_NAME, "String?") + "," + "SUBJECT_AREA_GROUP_NAME=" + $toODataString(SUBJECT_AREA_GROUP_NAME, "String?") + "," + "SUBJECT_AREA_NAME=" + $toODataString(SUBJECT_AREA_NAME, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "LS_UTData", type: LS_UTData },
            { name: "DDATAPOLICYData", type: DDATAPOLICYData }
        ])

    });

}(msls.application));
