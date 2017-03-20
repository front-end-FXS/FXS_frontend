<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>Related changes to RelatedModel</li>
                    <li>Text</li>
                    <li>Text</li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}/relateds/</li>                                        
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>callback works as <a href="/economic-calendar/v2/parameters/callback.aspx">callback</a></li>                                                                               
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/relateds.aspx?id={ID}&format={FORMAT}&culture={CULTURE}&callback={CALLBACK}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f                        
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/ID/relateds/?f={FORMAT}&culture={CULTURE}&callback={CALLBACK}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>
                </ul>
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>                        
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/relateds.aspx?id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&format=XML&key=ff969c0f-709e-4086-afb3-d2afe1e9665f                        
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/C62F4532-8F1B-4FA1-8B5B-F89EC5EA56BA/relateds/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                                    
                    </li>                                       
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>