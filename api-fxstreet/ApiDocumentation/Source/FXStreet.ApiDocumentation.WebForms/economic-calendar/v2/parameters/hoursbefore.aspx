<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Hours Before
            </h2>
            <p>
                Integer positive. Max value 240. <br />
                The number maximum hours in the past to display.<br />
                Constraint: only works with view=current.
            </p>   
            <h2>
                Useage
            </h2>
            <p>
                hoursbefore=48
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