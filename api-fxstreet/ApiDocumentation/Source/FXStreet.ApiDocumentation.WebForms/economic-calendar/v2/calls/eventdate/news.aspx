<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
   <div>        
        <div>  
            <p>
                The purpose of this page is to return the related news. <br />
                You can ask for the related reports by event /event/{IdEcoCalendar}/news/, by eventdate /eventdate/{IdEcoCalendarDate}/news/ and by country /country/{IdCountry}/news/.
            </p>
            <p>
                Once you retreive a new, you can ask for the content of the new with the call /news/{Id}/
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
            <h2>news at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;NewsModel&gt; 
    &lt;Id&gt;4f3502a5-720d-401c-903c-bafb99ac4b39&lt;/Id&gt; 
    &lt;Title&gt;EUR/AUD breaks below 1.2200 on positive Aussie data&lt;/Title&gt; 
    &lt;DateTime&gt; 
        &lt;Date&gt;2012-07-04T03:02:11Z&lt;/Date&gt; 
    &lt;/DateTime&gt; 
    &lt;Provider&gt;FXstreet.com&lt;/Provider&gt; 
&lt;/NewsModel&gt;
</textarea>
</code>
                </pre>
            </p>       
            <h2>
                Nodes
            </h2>            
            <p>
                <b>Id</b>. The Id of the new.<br />
                <b>Title</b>. title.<br />
                <b>DateTime</b> Date time.<br />                
                <b>Provider</b>. provider name.<br />                                           
            </p>
            <h2>news content at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;NewsContentModel&gt; 
    &lt;Content&gt;&lt;!--TITOL: &lt;h1 id="titol"&gt;Forex: GBP/USD dips below 1.6000 after US jobs report&lt;/h1&gt;FITITOL--&gt; FXstreet.com (Córdoba) - After the initial hesitation following the US jobs report, the Greenback is edging higher against most competitors as the Non-farm payrolls report showed that even though the unemployment rate fell slightly the economy added fewer jobs than expected in October. &lt;br /&gt;&lt;br /&gt;GBP/USD initially moved up toward daily highs at the 1.6040 area, but then turned south and dropped to a low of 1.5985. At time of writing, the pair is quoting at the 1.5990/1.6000 zone, recording a 0.2% loss on the day.&lt;br /&gt;&lt;br /&gt;From a technical perspective, Valeria Bednarik, chief analyst at FXstreet.com, sees immediate resistance for GBP/USD at 1.6040 if above, the 1.6080/1.6100 area is next, while next support is seen at the 1.5950 area.&lt;br /&gt;&lt;br /&gt;The US economy added 80,000 jobs in October, below the 95,000 expected by analysts although the unemployment rate dropped to 9.0% from 9.1% the previous month. The September figure was upwardly revised to 158,000 from 103,000 previously estimated while August was revised up to 104,000 from 57,000.&lt;br /&gt;
    &lt;/Content&gt; 
&lt;/NewsContentModel&gt;
</textarea>
</code>
                </pre>
            </p>            
            <h2>
                Nodes
            </h2>            
            <p>
                <b>Content</b>. The article.<br />                                                    
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>News by Event in xml format http://calendar.fxstreet.com/event/9CDF56FD-99E4-4026-AA99-2B6C0CA92811/news/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>News by Event Date in json format http://calendar.fxstreet.com/eventdate/b0618388-dd0e-4cfc-af1f-dc21be94f02f/news/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                    <li>News by Country in html format http://calendar.fxstreet.com/country/f0b72088-34bb-4752-9337-c41f329c7798/news/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                    <li>News content html format http://calendar.fxstreet.com/news/4f3502a5-720d-401c-903c-bafb99ac4b39/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                                        
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>