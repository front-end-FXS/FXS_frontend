<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Past Events
            </h2>
            <p>
                Integer positive. Max value 100.<br />
                The number of events from the past.<br />
                Constraint: only works with view=current.
            </p>   
            <h2>Useage</h2>
            <p>
                pastevents=10
            </p>
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?view=current&pastevents=10&hoursbefore=48&rows=50&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>          
        </div>        
    </div>
</asp:Content>