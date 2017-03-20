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
                    <li>Country</li>    
                    <li>Name</li>    
                    <li>Preliminar</li>    
                    <li>ForType</li>                        
                    <li>For changes the inner node Date to DateTime</li>                         
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
                    <li>EcoCalendarType</li>    
                    <li>Tentative</li>    
                    <li>AllDay</li>    
                    <li>HasTxitxa changes to HasMetadata</li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>
                    <li>timezone works as <a href="/economic-calendar/v2/parameters/timezone.aspx">timezone</a></li>
                    <li>timezoneoffset no longer available</li>
                    <li>view works as <a href="/economic-calendar/v2/parameters/view.aspx">view</a></li>
                    <li>start works as <a href="/economic-calendar/v2/parameters/start.aspx">start</a></li>
                    <li>end works as <a href="/economic-calendar/v2/parameters/end.aspx">end</a></li>
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>callback works as <a href="/economic-calendar/v2/parameters/callback.aspx">callback</a></li>                    
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                http://xml.fxstreet.com/ecopro/data/data.aspx?format={FORMAT}&view={VIEW}&start={START}&end={END}&timezone={TIMEZONE}&culture={CULTURE}&callback={CALLBACK}&key=KEY <br />
                Changes to<br />
                http://calendar.fxstreet.com/eventdate/?f={FORMAT}&view={VIEW}&start={START}&end={END}&timezone={TIMEZONE}&culture={CULTURE}&k={YOUR_CLIENT_KEY}&_{CALLBACK}=&s={HASH}&t={TIMESTAMP}                        
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>
                        sample of initial grid from 2010-02-11 to 2010-02-15, xml format, timezone:Tokyo Standard Time<br />
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/data.aspx?format=xml&view=range&start=20100211&end=20100215&timezone=Tokyo%20Standard%20Time&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/?f=xml&view=range&start=20100211&end=20100215&timezone=Tokyo%20Standard%20Time&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>
                    <li>
                       sample of initial grid, for current day, json format<br />
                       old method: <br />
                       http://xml.fxstreet.com/ecopro/data/data.aspx?view=day&key=ff969c0f-709e-4086-afb3-d2afe1e9665f
                       new method: <br />
                       http://calendar.fxstreet.com/eventdate/?f=json&view=da&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}        
                    </li>
                    <li>
                       sample of initial grid, for current week, json format<br />
                       old method: <br />
                       http://xml.fxstreet.com/ecopro/data/data.aspx?view=week&key=ff969c0f-709e-4086-afb3-d2afe1e9665f
                       new method: <br />
                       http://calendar.fxstreet.com/eventdate/?f=json&view=week&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}        
                    </li>
                    <li>
                       sample of initial grid, for current month, xml format<br />
                       old method: <br />
                       http://xml.fxstreet.com/ecopro/data/data.aspx?format=xml&view=week&key=ff969c0f-709e-4086-afb3-d2afe1e9665f
                       new method: <br />
                       http://calendar.fxstreet.com/eventdate/?f=xml&view=week&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}        
                    </li>
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>