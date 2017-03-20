<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Columns
            </h2>
            <p>
                you can choose what columns do you wish to show.<br />
                Possible values. Multiple selection (comma separated):<br />
                <ul>
                    <li>
                        CountryCode
                    </li>
                    <li>
                        CountryName
                    </li>
                    <li>
                        CountryCurrency 
                    </li>
                    <li>
                        Countdown 
                    </li>
                </ul> 
            </p>
            <h2>Useage</h2>
            <p>
                columns=CountryCode,CountryName,CountryCurrency
            </p>
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?f=html&columns=CountryCode,CountryName,Countdown&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
            </p>                                              
        </div>        
    </div>
</asp:Content>