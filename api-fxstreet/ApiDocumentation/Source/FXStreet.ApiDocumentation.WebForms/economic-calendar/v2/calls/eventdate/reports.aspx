<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the related reports. <br />
                You can ask for the related reports by event /event/{IdEcoCalendar}/reports/, by eventdate /eventdate/{IdEcoCalendarDate}/reports/ and by country /country/{IdCountry}/reports/.
            </p>
            <p>
                To use this call, you can use this parameters:
            </p>                  
            <h2>Parameters</h2>            
            <p>     
                All parameters are optional.                   
                <ul>  
                    <li>
                        <a href="../../parameters/f.aspx">format</a>.
                    </li>                                      
                   <li>
                        <a href="../../parameters/rows.aspx">rows</a>.
                    </li>                    
                    <li>
                        <a href="../../parameters/culture.aspx">culture</a>.
                    </li>
                    <li>
                        <a href="../../parameters/timezone.aspx">timezone</a>.
                    </li>                                                                                                                       
                </ul>              
            </p>            
            <h2>Reports at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;ReportModel&gt; 
    &lt;IdReport&gt;c9c6414b-2317-4ebc-8734-4b6d7f422fef&lt;/IdReport&gt; 
    &lt;TitleEntry&gt;Stop the Presses – Discouraged Workers NOT THE REASON for decline in March Unemployment Rate&lt;/TitleEntry&gt; 
    &lt;UrlEntry&gt;http://www.fxstreet.com/fundamental/analysis-reports/daily-global-commentary/2012/04/08/&lt;/UrlEntry&gt; 
    &lt;Provider&gt;Northern Trust&lt;/Provider&gt;
    &lt;DateEntry&gt; 
        &lt;Date&gt;2012-04-08T22:11:01Z&lt;/Date&gt; 
    &lt;/DateEntry&gt; 
&lt;/ReportModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>IdReport</b>. The Id of the report.<br />
                <b>TitleEntry</b>. title.<br />
                <b>UrlEntry</b>. url.<br />
                <b>Provider</b>. provider name.<br />
                <b>DateEntry</b> Date time.<br />                           
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Reports by Event in xml format http://calendar.fxstreet.com/event/9CDF56FD-99E4-4026-AA99-2B6C0CA92811/reports/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Reports by Event Date in json format http://calendar.fxstreet.com/eventdate/b0618388-dd0e-4cfc-af1f-dc21be94f02f/reports/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                    <li>Reports by Country in html format http://calendar.fxstreet.com/country/f0b72088-34bb-4752-9337-c41f329c7798/reports/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>