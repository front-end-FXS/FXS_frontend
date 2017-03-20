<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Rows
            </h2>
            <p>
                Integer positive. The number of rows to display.
            </p>  
            <h2>
                Useage
            </h2>
            <p>
                rows=50
            </p>
            <h2>
                Sample
            </h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?view=current&pastevents=10&hoursbefore=48&rows=50&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>           
        </div>        
    </div>
</asp:Content>