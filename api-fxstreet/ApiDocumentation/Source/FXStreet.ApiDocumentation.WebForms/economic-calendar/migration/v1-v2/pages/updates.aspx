<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>Event changes to EventDateModel</li>
                    <li>Id changes to IdEcoCalendarDate</li>
                    <li>Actual</li>
                    <li>Better</li>
                    <li>Worst</li>
                    <li>Format no longer available</li>
                    <li>Milliseconds no longer available</li>                    
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
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/updates.aspx?id={ID}&format={FORMAT} <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/?f={FORMAT}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} <br />   
                    </li>
                </ul>
            </p>
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>
                        detail json format<br />
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/updates.aspx?id=83369d55-3973-4f92-a022-31778c1f55e7 <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/83369d55-3973-4f92-a022-31778c1f55e7/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                  
                    </li>
                    <li>
                        detail xml format<br />
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/updates.aspx?id=83369d55-3973-4f92-a022-31778c1f55e7&format=xml <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/83369d55-3973-4f92-a022-31778c1f55e7/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                   
                    </li>                   
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>