<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
   <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>LiveCoverage changes to </li>                    
                    <li>Id</li>
                    <li>Iframe no longuer exists, but can be build as http://www.coveritlive.com/index2.php?option=com_altcaster&task=viewaltcast&altcast_code=Id&height=375&width=700 </li>                    
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}</li>                    
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>                                                                               
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>                        
                        http://xml.fxstreet.com/ecopro/data/details/livecoverage.aspx?id={ID}&format={FORMAT}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        changes to <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/livecoverage/?f={FORMAT}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>                    
                </ul>
            </p>        
            <h2>Samples</h2>    
            <p>
                <ul>
                    <li>
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/livecoverage.aspx?id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&format=xml&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/livecoverage/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>
                </ul>
            </p>
        </div>        
    </div>
</asp:Content>