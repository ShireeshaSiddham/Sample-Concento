using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class LS_UTDataService
    {
        partial void Query1_PreprocessQuery(ref IQueryable<EmployeeProject> query)
        {
            // query = select MonthName,SubProject,Date,Hours from MonthTable MT join EmployeeProject EP on MT.MonthID=EP.MonthID;
            //query = query.Join(MonthTables,
            //                MonthName => MonthName,
            //                Hours => Hours, (EmployeeProject, MonthTable);
        }
    }
}