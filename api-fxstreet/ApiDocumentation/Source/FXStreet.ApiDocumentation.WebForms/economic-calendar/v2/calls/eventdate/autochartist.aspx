<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the Olsen Scale data. <br />
                You can ask for the olsen scale for a event, /event/{IdEcoCalendar}/olsen/ or for a specific eventdate /eventates/{IdEcoCalendarDate}/olsen/. The first one will return the latest events and the second one the specific for that date.
            </p>
            <p>
                To use this call, you can use this parameters:
            </p>                  
            <h2>Parameters</h2>            
            <p>     
                All parameters are optional.                   
                <ul>  
                    <li>
                        <a href="../../parameters/rows.aspx">rows</a>.
                    </li>   
                    <li>
                        <a href="../../parameters/f.aspx">format</a>.
                    </li>                                                                                                                   
                </ul>              
            </p>            
            <h2>autochartist at glance</h2>            
            <h2>
                Nodes
            </h2>            
            <p>
                same format as <a href="history.aspx">history</a>
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Autochartist by Event Date in html format http://calendar.fxstreet.com/eventdate/DE8076D3-21DE-46AB-A359-5110645B01B2/autochartist/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                                 
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>