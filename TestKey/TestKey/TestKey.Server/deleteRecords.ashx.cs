using System;
using System.Collections.Generic;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for deleteRecords
    /// </summary>
    public class deleteRecords : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            string deleteRecord = context.Request.Form["deleteRecord"];
            DataTable dt = new DataTable();
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["Intrinsic"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string recordCount = "delete from Cor_Information_Area where Information_Area_Name='"+ deleteRecord + "'";
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