<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>Event changes to EventDateModel</li>
                    <li>IdEcoCalendar</li>            
                    <li>IdEcoCalendarDate</li>
                    <li>Date changes to DateTime</li>
                    <li>InternationalCode</li>    
                    <li>Name</li> 
                    <li>For changes the inner node Date to DateTime</li>  
                    <li>ForType</li>
                    <li>Volatility</li>
                    <li>Unit</li> 
                    <li>Actual</li>
                    <li>Concensus changes to Consensus</li>
                    <li>Relation</li>
                    <li>Previous</li>
                    <li>Revised</li>
                    <li>Better</li>
                    <li>Worst</li>
                    <li>IdEcoCalendarType</li>
                    <li>Tentative</li>
                    <li>AllDay</li> 
                    <li>HasTxitxa changes to HasMetadata</li>                                                                                                                  
                    <li>HTMLDescription</li>
                    <li>Comments</li>
                    <li>HasWebinar</li>
                    <li>HasVideo</li>
                    <li>HasRelateds</li>
                    <li>Related</li>
                    <li>HasNews</li>
                    <li>HasReports</li>
                    <li>HasBlogs</li>
                    <li>HasHistory</li>
                    <li>HasLongHistory no longer available. Long history is now added to History</li>
                    <li>HasLiveCoverage</li>
                    <li>HasOlsenScale</li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}</li>
                    <li>verbose no longer available</li>
                    <li>timezone works as <a href="/economic-calendar/v2/parameters/timezone.aspx">timezone</a></li>
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>
                    <li>callback works as <a href="/economic-calendar/v2/parameters/callback.aspx">callback</a></li>                                                                               
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                http://xml.fxstreet.com/ecopro/data/detail.aspx?format={FORMAT}&id={ID}&culture={CULTURE}&callback={CALLBACK}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />               
                Changes to<br />
                http://calendar.fxstreet.com/eventdate/{ID}/?f={FORMAT}&culture={CULTURE}&k={YOUR_CLIENT_KEY}&callback={CALLBACK}&s={HASH}&t={TIMESTAMP}
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>
                        detail non-farm-payrolls, xml format<br />
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/detail.aspx?format=xml&id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>
                    <li>
                        detail non-farm-payrolls, json format, timezone:Tokyo Standard Time, with callback<br />
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/detail.aspx?timezone=Tokyo%20Standard%20Time&callback=mycallbackfunction&id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/?f=json&timezone=Tokyo%20Standard%20Time&callback=mycallbackfunction&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                   
                    </li>                    
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>