<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>
        <h2>Subscription Client</h2>
        <p>
        Allong this page, you will find information about Subscription Client Service and how to use the configuration file to adjust it.<br />
        The client works storing the received values (actual & revised) on the filesystem or inserted into a database (currently supported SqlServer, Oracle & MySql).<br />
        </p>
        <p>
            In order to configure, edit .ini file.<br />
            Settings:
            <ul>
                <li>SaveAsFile = true | false. The program must write a file or not.</li>
                <li>FilePath = string. In case of SaveAsFile=true, the location for the files. Use Unix format ("/" path separator).</li>
                <li>SaveInDataBase = true | false. The program must interact with a database or not</li>
                <li>ActualSQLCommand = string. Sql command to execute when an Actual value comes. Must contain two parameters separated by "?". The first one will be the IdEcoCalendarDate and the second one the actual value.</li>
                <li>RevisedSQLCommand = string. Sql command to execute when an Actual value comes. Must contain tree parameters separated by "?". The first one will be the IdEcoCalendarDate, the second one the actual value ant the last one the previous value.</li>
            </ul>
        </p>
    </div>
</asp:Content>