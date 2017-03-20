<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Format
            </h2>
            <p>
                Possible values:<br />
                <ul>
                    <li>html: <a href="http://en.wikipedia.org/wiki/HTML">html format</a>.</li>
                    <li>xml: <a href="http://en.wikipedia.org/wiki/Xml">xml format</a>.</li>
                    <li>json: <a href="http://en.wikipedia.org/wiki/Json">json format</a>.</li>
                    <li>jsonp: <a href="http://en.wikipedia.org/wiki/JSONP">jsonp format</a>.</li>
                    <li>jsonhtml: html format executable from another domain (like JSONP, but instead of returning a JSON object it returns an HTML code).</li>
                    <li>csv: csv format (only available on <a href="../calls/eventdate/history.aspx">historic</a>).</li>
                </ul>
            </p>   
            <h2>
                Useage
            </h2>
            <p>
                f=json
            </p>
            <h2>
                Sample
            </h2>
            <p>
                http://calendar.fxstreet.com/eventdate/?&f=json&view=day&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}   
            </p>      
        </div>        
    </div>
</asp:Content>