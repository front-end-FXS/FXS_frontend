<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
   <div>        
        <div>  
            <p>
                The purpose of this page is to return the related webinar. <br />
                You can ask for the related reports by event date /eventdate/{IdEcoCalendarDate}/webinar/ and by event /event/{IdEcoCalendar}/webinar/.
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
            <h2>webinar at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;WebinarModel&gt; 
    &lt;IdSession&gt;c8aba602-85cc-40f3-9bd6-1a8508cb8e9b&lt;/IdSession&gt; 
    &lt;IdAuthor&gt;7987ec55-72d0-482e-89d3-de7c6cabf770&lt;/IdAuthor&gt; 
    &lt;Title&gt;ECB Meeting and Interest Rate Announcement Live&lt;/Title&gt; 
    &lt;StartDate&gt; 
        &lt;Date&gt;2011-07-07T11:15:00Z&lt;/Date&gt; 
    &lt;/StartDate&gt; 
    &lt;EndDate&gt; 
        &lt;Date&gt;2011-07-07T12:00:00Z&lt;/Date&gt; 
    &lt;/EndDate&gt; 
    &lt;Description&gt;When the global financial crisis hit, central banks the world over decided to cut interest rates quickly to flood the financial system with money and prevent a meltdown. Four years onwards the G7 CB’s are facing different challenges and different mandates. Join Mark de la Paz as he discusses the effects of interest rate decisions to financial markets in a live coverage of the ECB’s Interest Rate Decision.&lt;/Description&gt; 
    &lt;IsLive&gt;false&lt;/IsLive&gt; 
    &lt;IsPremium&gt;false&lt;/IsPremium&gt; 
    &lt;AuthorName&gt;Mark De La Paz&lt;/AuthorName&gt; 
    &lt;AuthorPhoto&gt;http://mediaserver.fxstreet.com/images/mark-de-la-paz-author-photoMedium.jpeg&lt;/AuthorPhoto&gt; 
&lt;/WebinarModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>IdSession</b>.<br />
                <b>IdAuthor</b>.<br />
                <b>StartDate</b>.<br />
                <b>EndDate</b>.<br />
                <b>Description</b>.<br />
                <b>IsLive</b>. If the webinar is inprogress.<br />
                <b>IsPremium</b>. If the webinar is premium.<br />
                <b>AuthorName</b>.<br />
                <b>AuthorPhoto</b>.<br />
            </p>
            <h2>
                Samples
            </h2>
            <p>
                <ul>
                    <li>Webinar by Event Date in xml format http://calendar.fxstreet.com/eventdate/FA863664-F003-4134-8DA8-08A38B4F6670/webinar/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>