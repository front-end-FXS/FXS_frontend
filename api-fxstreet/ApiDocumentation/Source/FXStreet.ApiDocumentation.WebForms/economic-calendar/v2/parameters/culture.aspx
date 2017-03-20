<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Culture
            </h2>
            <p>
                Possible values:
                <ul>
                    <li>en-us. English.</li>
                    <li>ru-ru. Russian.</li>
                    <li>ar-ae. Arabic.</li>
                    <li>zh-cn. Simplified Chinesse.</li>
                    <li>zh-cht. Traditional Chinesse</li>
                    <li>id-id. Indonesian.</li>
                    <li>tr-tr. turkish.</li>
                    <li>hu-hu. Hungarian.</li>
                    <li>fr-fr. French.</li>
                    <li>de-de. German.</li>
                    <li>pt-pt. Portuguese.</li>
                    <li>it-it. Italian.</li>
                    <li>ja-jp. Japanese</li>
                    <li>es-es. Spanish.</li>
                    <li>ca-es. Catalan.</li>
                    <li>pl-pl. Polish.</li>
                    <li>vi-vn. Vientamese.</li>                   
                </ul>                 
            </p> 
            <h2>Useage</h2>
            <p>
                culture=ja-jp
            </p>
            <h2>Sample</h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?culture=ja-jp&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>           
        </div>        
    </div>
</asp:Content>