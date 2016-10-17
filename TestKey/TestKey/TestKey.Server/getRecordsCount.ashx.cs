using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for getRecordsCount
    /// </summary>
    public class getRecordsCount : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            DataTable dt = new DataTable();
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["Intrinsic"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string recordCount = "select cast(count(*) as nvarchar(max))+' rows' as RecordCount from InformationArea";
            SqlDataAdapter da = new SqlDataAdapter(recordCount, conn);
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                var records = dt.Rows[0][0];
                context.Response.Write(records);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}