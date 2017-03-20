<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Categories
            </h2>
            <p>
                This parameter allows you to choose the cateogries.<br />
                Possible values. Multiple selection (comma separated):        
                <ul>                
                    <li>c94405b5-5f85-4397-ab11-002a481c4b92. Central Banks.</li>
                    <li>33303f5e-1e3c-4016-ab2d-ac87e98f57ca. Consump. &amp; Inflation</li>
                    <li>e229c890-80fc-40f3-b6f4-b658f3a02635. Confidence Indices</li>
                    <li>91da97bd-d94a-4ce8-a02b-b96ee2944e4c. Employment.</li>
                    <li>24127f3b-edce-4dc4-afdf-0b3bd8a964be. Economic Activity.</li>
                    <li>fa6570f6-e494-4563-a363-00d0f2abec37. Liquidity &amp; Balance.</li>
                    <li>e9e957ec-2927-4a77-ae0c-f5e4b5807c16. Government.</li>                    
                </ul>                   
            </p>    
            <h2>Useage</h2>
            <p>
                categories=c94405b5-5f85-4397-ab11-002a481c4b92,33303f5e-1e3c-4016-ab2d-ac87e98f57ca
            </p>                   
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?categories=c94405b5-5f85-4397-ab11-002a481c4b92,33303f5e-1e3c-4016-ab2d-ac87e98f57ca&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
            </p>                                       
        </div>        
    </div>
</asp:Content>