<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Callback
            </h2>
            <p>
                To use this parameter, you should use 'json' format and set as a value the name of a function that will be called sending the result as a parameter in JSON format. (Note that you should code this behavior) 
            </p> 
            <h2>Useage</h2>
            <p>
                callback=yourjavascriptfunction
            </p>
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?f=json&view=week&callback=yourjavascriptfunction&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>
        </div>        
    </div>
</asp:Content>