<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Timezone
            </h2>
            <p>
                              
                You can find the possible values in:
                
                <p> http://calendar.fxstreet.com/country/GetTimeZones?v=2&f=json </p> 
                <p> http://calendar.fxstreet.com/country/GetTimeZones?v=2 </p>
            </p>  
            <h2>Useage</h2>
            <p>
                timezone=South+Africa+Standard+Time
            </p>
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?timezone=South+Africa+Standard+Time&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>          
        </div>        
    </div>
</asp:Content>