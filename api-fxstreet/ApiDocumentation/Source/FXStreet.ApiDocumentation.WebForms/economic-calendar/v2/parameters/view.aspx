<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                View
            </h2>
            <p>
                Possible values: <br />
                <ul>
                    <li>Current: Displays n events (parameter <a href="rows.aspx">rows</a>), tacking m from the past (parameter <a href="pastevents.aspx">pastevents</a>), going k hours back (parameter <a href="hoursbefore.aspx">hoursbefore</a>).</li>
                    <li>Range: Displays events from a <a href="start.aspx">start</a> date to a <a href="end.aspx">end</a> date</li>
                    <li>Day: Displays the events for the current day</li>
                    <li>Week: Displays the events for the current week</li>
                    <li>Month: Displays the events for the current month</li>                    
                </ul>
            </p>      
            <h2>
                Useage
            </h2>
            <p>
                view=day
            </p>
            <h2>
                Sample
            </h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?view=day&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>      
        </div>        
    </div>
</asp:Content>