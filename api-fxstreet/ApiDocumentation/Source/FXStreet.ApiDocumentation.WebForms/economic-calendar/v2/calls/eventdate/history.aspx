<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the historical data. <br />
                You can ask for the related reports by event date /eventdate/{IdEcoCalendarDate}/history/ and by event /event/{IdEcoCalendar}/history/.
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
                </ul>              
            </p>            
            <h2>history at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;HistoryModel&gt; 
    &lt;DateTime&gt; 
        &lt;Date&gt;2012-06-01T12:30:00&lt;/Date&gt; 
    &lt;/DateTime&gt; 
    &lt;Actual&gt;8.200&lt;/Actual&gt; 
    &lt;Consensus&gt;8.100&lt;/Consensus&gt; 
    &lt;Previous&gt;8.100&lt;/Previous&gt; 
    &lt;Unit&gt;%&lt;/Unit&gt; 
    &lt;Preliminar&gt;false&lt;/Preliminar&gt; 
    &lt;ForType&gt;8b033ce1-b224-41ac-8d2d-7e69516b34c5&lt;/ForType&gt; 
    &lt;For&gt; 
        &lt;Date&gt;2012-05-01T00:00:00&lt;/Date&gt; 
    &lt;/For&gt; 
    &lt;DisplayActual&gt;%8.2&lt;/DisplayActual&gt; 
    &lt;DisplayPrevious&gt;%8.1&lt;/DisplayPrevious&gt; 
    &lt;DisplayConsensus&gt;%8.1&lt;/DisplayConsensus&gt; 
    &lt;PotActual/&gt; 
    &lt;PotConsensus/&gt; 
    &lt;PotPrevious/&gt; 
&lt;/HistoryModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>DateTime</b>.<br />
                <b>Actual</b>. <br />
                <b>Consensus</b>. <br />                
                <b>Previous</b>. <br />
                <b>Unit</b>. <br />
                <b>Preliminar</b>. The event is preliminar. <br />
                <b>ForType</b>. It can be one of the following values:<br />
                    <ul>
                        <li>Null: no effect</li>
                        <li>E18CF035-44CE-4D43-A15E-1EF81091E130: Day</li>
                        <li>8B033CE1-B224-41AC-8D2D-7E69516B34C5: Month</li>
                        <li>4E9C6743-49EA-4205-A89D-E31F28B9F0DF: Quarter</li>
                    </ul>
                <b>For</b>. A particular day or period of time the event relates to (eg. PPI for March, Trade Balance for the Q3).       <br />
                <b>DisplayActual</b>. Actual in string format.<br />
                <b>DisplayPrevious</b.> Previous in string format.<br />
                <b>DisplayConsensus</b>. Consensus in string format.<br />
                <b>PotActual</b>. Actual Potency (M = million, K = 1000, ... ).<br />
                <b>PotConsensus</b>. Consensus Potency (M = million, K = 1000, ... ).<br />
                <b>PotPrevious</b>. Previous Potency (M = million, K = 1000, ... ).<br />     
            </p>
            <p>
            You can build a iframe with that code in order to display the live coverage.<br />
<code class="dataexample0code">
<textarea rows="50" cols="125">
&lt;iframe src="http://www.coveritlive.com/index2.php/option=com_altcaster/task=viewaltcast/altcast_code={Id}/height=450/width=630" scrolling="no" height="450px" width="630px" frameBorder ="0" allowTransparency="true"  &gt;
    &lt;a href="http://www.coveritlive.com/mobile.php/option=com_mobile/task=viewaltcast/altcast_code={Id}" &gt;&lt;/a&gt;
&lt;/iframe&gt;
</textarea>
</code>
            </p>
            <h2>
                Samples
            </h2>
            <p>
                <ul>
                    <li>History by Event Date in json format http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/history/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>