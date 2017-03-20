<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the Olsen Scale data. <br />
                You can ask for the olsen scale for a event, /event/{IdEcoCalendar}/olsen/ or for a specific eventdate /eventates/{IdEcoCalendarDate}/olsen/. The first one will return the latest events and the second one the specific for that date.
            </p>
            <p>
                To use this call, you can use this parameters:
            </p>                  
            <h2>Parameters</h2>            
            <p>     
                All parameters are optional.                   
                <ul>  
                    <li>
                        <a href="../../parameters/rows.aspx">rows</a>.
                    </li>   
                    <li>
                        <a href="../../parameters/f.aspx">format</a>.
                    </li>                                                                                                                   
                </ul>              
            </p>            
            <h2>olsen at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;OlsenModel&gt;
    &lt;DateTime&gt; 
        &lt;Date&gt;2012-06-01T12:30:00&lt;/Date&gt; 
    &lt;/DateTime&gt; 
    &lt;IdEventDate&gt;137b9979-20a0-4358-b08f-fd7c7f91b5fe&lt;/IdEventDate&gt; 
    &lt;URLChart&gt;http://www.olsenscale.com/sc/smq/latest?data=smqimage&amp;date=2012-06-01-00-06&amp;instrument=AUD_USD,EUR_USD,GBP_USD,NZD_USD,USD_CAD,USD_CHF,USD_JPY&amp;width=400&amp;height=175&amp;caption=USD&amp;days=3&amp;showLabels=0&amp;tz=GMT%2B0&lt;/URLChart&gt;
    &lt;URLRadar&gt;http://www.olsenscale.com/sc/smq/latest?data=smqspider&amp;date=2012-06-01-00-06&amp;legs=AUD_USD,EUR_USD,GBP_USD,NZD_USD,USD_CAD,USD_CHF,USD_JPY&amp;center=USD&amp;width=300&amp;height=175&amp;caption=USD&amp;printValue=1&amp;showGradient=0&amp;strongLabels=1&lt;/URLRadar&gt; 
&lt;/OlsenModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>DateTime</b> Date time.<br />
                <b>IdEcoCalendarDate</b> The Id of the event for this date.<br />
                <b>URLChart</b>. the url of the chart image.<br />
                <b>URLRadar</b>. the url of the radar image.<br />
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Olsen by Event in html format http://calendar.fxstreet.com/event/9cdf56fd-99e4-4026-aa99-2b6C0ca92811/olsen/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Olsen by Event Date in json format http://calendar.fxstreet.com/eventdate/3c8a8ab6-7bb5-475d-93ef-550e6402e396/olsen/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>
