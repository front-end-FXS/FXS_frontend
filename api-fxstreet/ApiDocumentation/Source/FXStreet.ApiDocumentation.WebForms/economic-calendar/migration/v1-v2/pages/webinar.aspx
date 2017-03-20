<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>Webinar changes to WebinarModel</li>
                    <li>Id changes to IdSession</li>
                    <li>Title</li>
                    <li>IdType no longer available</li>
                    <li>StartDate inner Date changes</li>
                    <li>EndDate inner Date changes</li>
                    <li>InProgress changes to IsLive</li>
                    <li>IsPremium</li>
                    <li>Theme no longer available</li>
                    <li>Author changes to AuthorName</li>
                    <li>AuthorPosition no longer available</li>
                    <li>AuthorPhoto</li>
                    <li>IdProvider no longer available</li>
                    <li>Provider no longer available</li>
                    <li>IdSponsor no longer available</li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}</li>                    
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>                                                                               
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/webinar.aspx?id={ID}&format={FORMAT}&culture={CULTURE}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/webinar?f={FORMAT}&culture={CULTURE}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} <br />                    
                    </li>
                </ul>
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>                       
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/webinar.aspx?id=FA863664-F003-4134-8DA8-08A38B4F6670&format=xml&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/FA863664-F003-4134-8DA8-08A38B4F6670/webinar?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} <br />                    
                    </li>                                     
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>