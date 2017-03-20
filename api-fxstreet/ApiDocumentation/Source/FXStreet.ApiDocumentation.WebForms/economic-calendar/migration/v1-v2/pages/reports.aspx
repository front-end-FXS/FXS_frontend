<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>Report changes to EventDateModel</li>
                    <li>URL changes to URLEntry</li>
                    <li>TitleEntry</li>
                    <li>Title use TitleEntry</li>
                    <li>Date changes to DateEntry</li>
                    <li>Provider</li>
                    <li>Id changes to IdReport</li>
                    <li>Show no longer available</li>
                    <li>Anchor no loner available</li>
                    
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}/reports</li>
                    <li>verbose no longer available</li>
                    <li>timezone works as <a href="/economic-calendar/v2/parameters/timezone.aspx">timezone</a></li>
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>                                                                            
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/reports.aspx?id={ID}&format={FORMAT}&timezone={TIMEZONE}&culture={CULTURE}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f                        
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/reports/?f={FORMAT}&timezone={TIMEZONE}&culture={CULTURE}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}     
                    </li>
                </ul>
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>                        
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/reports.aspx?id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&format=xml&key=ff969c0f-709e-4086-afb3-d2afe1e9665f                        
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/reports/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                     
                    </li>                                      
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>