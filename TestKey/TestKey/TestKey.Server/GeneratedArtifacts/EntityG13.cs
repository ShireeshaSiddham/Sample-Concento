﻿

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    #region Entities
    
    /// <summary>
    /// No Modeled Description Available
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    public sealed partial class MonthTable : global::Microsoft.LightSwitch.Framework.Base.EntityObject<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new instance of the MonthTable entity.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public MonthTable()
            : this(null)
        {
        }
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public MonthTable(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.MonthTable> entitySet)
            : base(entitySet)
        {
            global::LightSwitchApplication.MonthTable.DetailsClass.Initialize(this);
        }
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthTable_Created();
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthTable_AllowSaveWithErrors(ref bool result);
    
        #endregion
    
        #region Private Properties
        
        /// <summary>
        /// Gets the Application object for this application.  The Application object provides access to active screens, methods to open screens and access to the current user.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace> Application
        {
            get
            {
                return (global::Microsoft.LightSwitch.IApplication<global::LightSwitchApplication.DataWorkspace>)global::LightSwitchApplication.Application.Current;
            }
        }
        
        /// <summary>
        /// Gets the containing data workspace.  The data workspace provides access to all data sources in the application.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.DataWorkspace DataWorkspace
        {
            get
            {
                return (global::LightSwitchApplication.DataWorkspace)this.Details.EntitySet.Details.DataService.Details.DataWorkspace;
            }
        }
        
        #endregion
    
        #region Public Properties
    
        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public int MonthID
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthID);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthID_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthID_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthID_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public string MonthName
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthName);
            }
            set
            {
                global::LightSwitchApplication.MonthTable.DetailsClass.SetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthName, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthName_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthName_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void MonthName_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public int NoOfDays
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.NoOfDays);
            }
            set
            {
                global::LightSwitchApplication.MonthTable.DetailsClass.SetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.NoOfDays, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void NoOfDays_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void NoOfDays_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void NoOfDays_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public int WeekDays
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.WeekDays);
            }
            set
            {
                global::LightSwitchApplication.MonthTable.DetailsClass.SetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.WeekDays, value);
            }
        }
        
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void WeekDays_IsReadOnly(ref bool result);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void WeekDays_Validate(global::Microsoft.LightSwitch.EntityValidationResultsBuilder results);
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void WeekDays_Changed();

        /// <summary>
        /// No Modeled Description Available
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.LightSwitch.Framework.EntityCollection<global::LightSwitchApplication.EmployeeMonth> EmployeeMonths
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetValue(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.EmployeeMonths);
            }
        }
        
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public Microsoft.LightSwitch.IDataServiceQueryable<global::LightSwitchApplication.EmployeeMonth> EmployeeMonthsQuery
        {
            get
            {
                return global::LightSwitchApplication.MonthTable.DetailsClass.GetQuery(this, global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.EmployeeMonths);
            }
        }

        #endregion
    
        #region Details Class
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public sealed class DetailsClass : global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<
                global::LightSwitchApplication.MonthTable,
                global::LightSwitchApplication.MonthTable.DetailsClass,
                global::LightSwitchApplication.MonthTable.DetailsClass.IImplementation,
                global::LightSwitchApplication.MonthTable.DetailsClass.PropertySet,
                global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>,
                global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>>
        {
    
            static DetailsClass()
            {
                var initializeEntry = global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthID;
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>.Entry
                __MonthTableEntry = new global::Microsoft.LightSwitch.Details.Framework.Base.EntityDetails<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>.Entry(
                    global::LightSwitchApplication.MonthTable.DetailsClass.__MonthTable_CreateNew,
                    global::LightSwitchApplication.MonthTable.DetailsClass.__MonthTable_Created,
                    global::LightSwitchApplication.MonthTable.DetailsClass.__MonthTable_AllowSaveWithErrors);
            private static global::LightSwitchApplication.MonthTable __MonthTable_CreateNew(global::Microsoft.LightSwitch.Framework.EntitySet<global::LightSwitchApplication.MonthTable> es)
            {
                return new global::LightSwitchApplication.MonthTable(es);
            }
            private static void __MonthTable_Created(global::LightSwitchApplication.MonthTable e)
            {
                e.MonthTable_Created();
            }
            private static bool __MonthTable_AllowSaveWithErrors(global::LightSwitchApplication.MonthTable e)
            {
                bool result = false;
                e.MonthTable_AllowSaveWithErrors(ref result);
                return result;
            }
    
            public DetailsClass() : base()
            {
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityCommandSet<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass> Commands
            {
                get
                {
                    return base.Commands;
                }
            }
    
            public new global::Microsoft.LightSwitch.Details.Framework.EntityMethodSet<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass> Methods
            {
                get
                {
                    return base.Methods;
                }
            }
    
            public new global::LightSwitchApplication.MonthTable.DetailsClass.PropertySet Properties
            {
                get
                {
                    return base.Properties;
                }
            }
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            public sealed class PropertySet : global::Microsoft.LightSwitch.Details.Framework.Base.EntityPropertySet<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass>
            {
    
                public PropertySet() : base()
                {
                }
    
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int> MonthID
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthID) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string> MonthName
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.MonthName) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int> NoOfDays
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.NoOfDays) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int> WeekDays
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.WeekDays) as global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>;
                    }
                }
                
                public global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth> EmployeeMonths
                {
                    get
                    {
                        return base.GetItem(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.EmployeeMonths) as global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth>;
                    }
                }
                
            }
    
            #pragma warning disable 109
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
            public interface IImplementation : global::Microsoft.LightSwitch.Internal.IEntityImplementation
            {
                new int MonthID { get; }
                new string MonthName { get; set; }
                new int NoOfDays { get; set; }
                new int WeekDays { get; set; }
                new global::System.Collections.IEnumerable EmployeeMonths { get; }
            }
            #pragma warning restore 109
    
            [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            internal class PropertySetProperties
            {
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry
                    MonthID = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry(
                        "MonthID",
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthID_Stub,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthID_ComputeIsReadOnly,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthID_Validate,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthID_GetImplementationValue,
                        null,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthID_OnValueChanged);
                private static void _MonthID_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.MonthTable.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data> c, global::LightSwitchApplication.MonthTable.DetailsClass d, object sf)
                {
                    c(d, ref d._MonthID, sf);
                }
                private static bool _MonthID_ComputeIsReadOnly(global::LightSwitchApplication.MonthTable e)
                {
                    bool result = false;
                    e.MonthID_IsReadOnly(ref result);
                    return result;
                }
                private static void _MonthID_Validate(global::LightSwitchApplication.MonthTable e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.MonthID_Validate(r);
                }
                private static int _MonthID_GetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.ImplementationEntity.MonthID;
                }
                private static void _MonthID_OnValueChanged(global::LightSwitchApplication.MonthTable e)
                {
                    e.MonthID_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string>.Entry
                    MonthName = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string>.Entry(
                        "MonthName",
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_Stub,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_ComputeIsReadOnly,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_Validate,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_GetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_SetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._MonthName_OnValueChanged);
                private static void _MonthName_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.MonthTable.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string>.Data> c, global::LightSwitchApplication.MonthTable.DetailsClass d, object sf)
                {
                    c(d, ref d._MonthName, sf);
                }
                private static bool _MonthName_ComputeIsReadOnly(global::LightSwitchApplication.MonthTable e)
                {
                    bool result = false;
                    e.MonthName_IsReadOnly(ref result);
                    return result;
                }
                private static void _MonthName_Validate(global::LightSwitchApplication.MonthTable e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.MonthName_Validate(r);
                }
                private static string _MonthName_GetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.ImplementationEntity.MonthName;
                }
                private static void _MonthName_SetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d, string v)
                {
                    d.ImplementationEntity.MonthName = v;
                }
                private static void _MonthName_OnValueChanged(global::LightSwitchApplication.MonthTable e)
                {
                    e.MonthName_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry
                    NoOfDays = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry(
                        "NoOfDays",
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_Stub,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_ComputeIsReadOnly,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_Validate,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_GetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_SetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._NoOfDays_OnValueChanged);
                private static void _NoOfDays_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.MonthTable.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data> c, global::LightSwitchApplication.MonthTable.DetailsClass d, object sf)
                {
                    c(d, ref d._NoOfDays, sf);
                }
                private static bool _NoOfDays_ComputeIsReadOnly(global::LightSwitchApplication.MonthTable e)
                {
                    bool result = false;
                    e.NoOfDays_IsReadOnly(ref result);
                    return result;
                }
                private static void _NoOfDays_Validate(global::LightSwitchApplication.MonthTable e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.NoOfDays_Validate(r);
                }
                private static int _NoOfDays_GetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.ImplementationEntity.NoOfDays;
                }
                private static void _NoOfDays_SetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d, int v)
                {
                    d.ImplementationEntity.NoOfDays = v;
                }
                private static void _NoOfDays_OnValueChanged(global::LightSwitchApplication.MonthTable e)
                {
                    e.NoOfDays_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry
                    WeekDays = new global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Entry(
                        "WeekDays",
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_Stub,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_ComputeIsReadOnly,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_Validate,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_GetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_SetImplementationValue,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._WeekDays_OnValueChanged);
                private static void _WeekDays_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.MonthTable.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data> c, global::LightSwitchApplication.MonthTable.DetailsClass d, object sf)
                {
                    c(d, ref d._WeekDays, sf);
                }
                private static bool _WeekDays_ComputeIsReadOnly(global::LightSwitchApplication.MonthTable e)
                {
                    bool result = false;
                    e.WeekDays_IsReadOnly(ref result);
                    return result;
                }
                private static void _WeekDays_Validate(global::LightSwitchApplication.MonthTable e, global::Microsoft.LightSwitch.EntityValidationResultsBuilder r)
                {
                    e.WeekDays_Validate(r);
                }
                private static int _WeekDays_GetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.ImplementationEntity.WeekDays;
                }
                private static void _WeekDays_SetImplementationValue(global::LightSwitchApplication.MonthTable.DetailsClass d, int v)
                {
                    d.ImplementationEntity.WeekDays = v;
                }
                private static void _WeekDays_OnValueChanged(global::LightSwitchApplication.MonthTable e)
                {
                    e.WeekDays_Changed();
                }
    
                [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
                public static readonly global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth>.Entry
                    EmployeeMonths = new global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth>.Entry(
                        "EmployeeMonths",
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._EmployeeMonths_Stub,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._EmployeeMonths_GetReferencedEntities,
                        global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties._EmployeeMonths_GetEntityCollection);
                private static void _EmployeeMonths_Stub(global::Microsoft.LightSwitch.Details.Framework.Base.DetailsCallback<global::LightSwitchApplication.MonthTable.DetailsClass, global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth>.Data> c, global::LightSwitchApplication.MonthTable.DetailsClass d, object sf)
                {
                    c(d, ref d._EmployeeMonths, sf);
                }
                private static global::System.Collections.Generic.IEnumerable<global::LightSwitchApplication.EmployeeMonth> _EmployeeMonths_GetReferencedEntities(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.GetReferencedEntities<global::LightSwitchApplication.EmployeeMonth, global::LightSwitchApplication.EmployeeMonth.DetailsClass>(global::LightSwitchApplication.MonthTable.DetailsClass.PropertySetProperties.EmployeeMonths, ref d._EmployeeMonths);
                }
                private static global::System.Collections.IEnumerable _EmployeeMonths_GetEntityCollection(global::LightSwitchApplication.MonthTable.DetailsClass d)
                {
                    return d.ImplementationEntity.EmployeeMonths;
                }
    
            }
    
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data _MonthID;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, string>.Data _MonthName;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data _NoOfDays;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityStorageProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, int>.Data _WeekDays;
            
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private global::Microsoft.LightSwitch.Details.Framework.EntityCollectionProperty<global::LightSwitchApplication.MonthTable, global::LightSwitchApplication.MonthTable.DetailsClass, global::LightSwitchApplication.EmployeeMonth>.Data _EmployeeMonths;
            
        }
    
        #endregion
    }
    
    #endregion
}
