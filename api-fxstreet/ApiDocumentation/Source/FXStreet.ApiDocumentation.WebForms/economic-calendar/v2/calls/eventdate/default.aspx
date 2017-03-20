<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the main grid view of the events selected by the filter options. Inside each event, you can find "IdEcoCalendarDate". It represents the unique identifier for it event and is used for the detail request.
            </p>
            <p>
                This call allows a configurable set of parameters than you can use: 
            </p>         
            <p>
                In order to call a single eventdate you need to add the GUID of the eventdate as the final endpoint 
                <br />http://calendar.fxstreet.com/eventdate/{EVENT_DATE_ID}? 
            </p>         
            <h2>Parameters</h2>            
            <p>     
                All parameters are optional.                   
                <ul>  
                    <li>
                        <a href="../../parameters/f.aspx">format</a>.
                    </li>                  
                    <li>
                        <a href="../../parameters/view.aspx">view</a>.
                    </li>
                   <li>
                        <a href="../../parameters/rows.aspx">rows</a>. Only applicable on view=current.
                    </li>
                    <li>
                        <a href="../../parameters/hoursbefore.aspx">hours before</a>. Only applicable on view=current.
                    </li>
                    <li>
                        <a href="../../parameters/pastevents.aspx">past events</a>. Only applicable on view=current.
                    </li>
                    <li>
                        <a href="../../parameters/keyword.aspx">keyword</a>.
                    </li>
                    <li>
                        <a href="../../parameters/columns.aspx">columns</a>. Only applicable on f=html.
                    </li>
                    <li>
                        <a href="../../parameters/countrycode.aspx">countrycode</a>.
                    </li>
                    <li>
                        <a href="../../parameters/categories.aspx">categories</a>.
                    </li>                    
                    <li>
                        <a href="../../parameters/culture.aspx">culture</a>.
                    </li>
                    <li>
                        <a href="../../parameters/timezone.aspx">timezone</a>.
                    </li>                    
                </ul>              
            </p>            
            <h2>event dates at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="50" cols="125">
&lt;EventDateModel&gt; 
    &lt;IdEcoCalendarType&gt;e229c890-80fc-40f3-b6f4-b658f3a02635&lt;/IdEcoCalendarType&gt; 
    &lt;EcoCalendarType&gt;Confidence Indices&lt;/EcoCalendarType&gt; 
    &lt;IdEcoCalendar&gt;5c290d7e-aac7-406f-b40a-40913fd19118&lt;/IdEcoCalendar&gt; 
    &lt;IdEcoCalendarDate&gt;ebcc4514-b920-4ff3-9a64-bfb944930a2d&lt;/IdEcoCalendarDate&gt; 
        &lt;DateTime&gt; 
            &lt;Date&gt;2012-06-27T06:00:00Z&lt;/Date&gt; 
        &lt;/DateTime&gt; 
    &lt;InternationalCode&gt;FI &lt;/InternationalCode&gt; 
    &lt;Country&gt;Finland&lt;/Country&gt; 
    &lt;IdCountry&gt;76fb5056-2704-4aad-b81e-c21b367cc5f7&lt;/IdCountry&gt; 
    &lt;Name&gt;Consumer Confidence&lt;/Name&gt; 
    &lt;HTMLDescription&gt;The Consumer Confidence released by the &lt;a href="http://www.stat.fi/index_en.html"&gt;Statistics Finland &lt;/a&gt; is a leading index that measures the level of consumer confidence in economic activity. A high level of consumer confidence stimulates economic expansion while a low level drives to economic downturn. A high reading is seen as positive (or bullish) for the EUR, while a low reading is seen as negative (or bearish).&lt;/HTMLDescription&gt; 
    &lt;Preliminar&gt;false&lt;/Preliminar&gt; 
    &lt;ForType&gt;8b033ce1-b224-41ac-8d2d-7e69516b34c5&lt;/ForType&gt; 
    &lt;For&gt; 
        &lt;Date&gt;2012-06-01T00:00:00&lt;/Date&gt; 
    &lt;/For&gt; 
    &lt;Volatility&gt;1&lt;/Volatility&gt; 
    &lt;Actual&gt;5.8&lt;/Actual&gt; 
    &lt;Consensus xsi:nil="true"/&gt; 
    &lt;Relation&gt;true&lt;/Relation&gt; 
    &lt;Previous&gt;12&lt;/Previous&gt; 
    &lt;Revised xsi:nil="true"/&gt; 
    &lt;Better&gt;false&lt;/Better&gt; 
    &lt;Worst&gt;false&lt;/Worst&gt; 
    &lt;Tentative&gt;false&lt;/Tentative&gt; 
    &lt;AllDay&gt;false&lt;/AllDay&gt; 
    &lt;HasMetadata&gt;false&lt;/HasMetadata&gt; 
    &lt;HasOlsenScale&gt;true&lt;/HasOlsenScale&gt; 
    &lt;HasCountries&gt;false&lt;/HasCountries&gt; 
    &lt;HasReports&gt;false&lt;/HasReports&gt; 
    &lt;HasNews&gt;false&lt;/HasNews&gt; 
    &lt;HasAdvancedNews&gt;false&lt;/HasAdvancedNews&gt; 
    &lt;HasRelateds&gt;false&lt;/HasRelateds&gt; 
    &lt;HasWebinars&gt;false&lt;/HasWebinars&gt; 
    &lt;HasLiveCoverage&gt;false&lt;/HasLiveCoverage&gt; 
    &lt;HasBlogs&gt;false&lt;/HasBlogs&gt; 
    &lt;HasHistory&gt;true&lt;/HasHistory&gt; 
    &lt;HasAutochartist&gt;false&lt;/HasAutochartist&gt; 
    &lt;HasPairs&gt;false&lt;/HasPairs&gt; 
    &lt;DisplayActual&gt;5.8&lt;/DisplayActual&gt; 
    &lt;DisplayPrevious&gt;12.0&lt;/DisplayPrevious&gt; 
    &lt;DisplayConsensus/&gt; 
    &lt;DisplayRevised/&gt; 
    &lt;Precision&gt;1&lt;/Precision&gt; 
&lt;/EventDateModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>IdEcoCalendarType</b> Indicates the type of the event.<br />
                <b>EcoCalendarType</b> The description of the IdEcoCalendarType. <br />
                <b>IdEcoCalendar</b> The Id of the event. There are multiples dates for this Id. <br />
                <b>IdEcoCalendarDate</b> The Id of the event for this date. You need this Id to make detail calls. <br />
                <b>DateTime</b> Date time.<br />
                <b>InternationalCode</b> International code of the country. <br />
                <b>Country</b> Country name. <br />
                <b>IdCountry</b> The Id of the country.<br />
                <b>Name</b> Name of the event. <br />
                <b>HTMLDescription</b> HTML description of the event.<br />
                <b>Preliminar</b> The event is preliminar. <br />
                <b>ForType</b> It can be one of the following values:<br />
                    <ul>
                        <li>Null: no effect</li>
                        <li>E18CF035-44CE-4D43-A15E-1EF81091E130: Day</li>
                        <li>8B033CE1-B224-41AC-8D2D-7E69516B34C5: Month</li>
                        <li>4E9C6743-49EA-4205-A89D-E31F28B9F0DF: Quarter</li>
                    </ul>
                <b>For</b> A particular day or period of time the event relates to (eg. PPI for March, Trade Balance for the Q3).       <br />
                <b>Volatility</b> It can be 0, 1, 2 or 3 (0 = no volatility, 3 = max volatility. Represents the impact of the event on the marketplace). <br />
                <b>Actual</b> The actual value of the event. <br />
                <b>Conscensus</b> The consensus for the actual of the event. <br />
                <b>Relation</b> It compares the actual value with the consensus. True: if the actual is greater than the consensus means that the result is better than expected. False: if the actual is greater than the concensus means that the result is worse than expected. Can be null: no relation. <br />
                <b>Previous</b> The previous value for this event. <br />
                <b>Revised</b> The actual was revised from this value. <br />
                <b>Better</b> The actual is better than the consensus (see relation). <br />
                <b>Worst</b> The actual is worst than the consensus (see relation). <br />
                <b>Tentative</b> The date for this event is approximate. <br />
                <b>AllDay</b> The event is for all the day. <br />
                <b>HasMetadata</b> Can be true/false: True: there is more data for this event.<br />
                <b>HasOlsenScale</b> Can be true/false: True: there is an <a href="olsen.aspx">Olsen Scale</a> for that event.<br />
                <b>HasCountries</b> Can be true/false: True: there is <a href="country.aspx">country info</a> for that event.<br />
                <b>HasReports</b> Can be true/false: True: there are <a href="reports.aspx">reports</a> for that event.<br />
                <b>HasNews</b> Can be true/false: True: there are <a href="news.aspx">news</a> for that event.<br />
                <b>HasAdvancedNews</b> Can be true/false: True: there are <a href="news.aspx">advanced news</a> for that event.<br />
                <b>HasRelateds</b> Can be true/false: True: there are <a href="relateds.aspx">relateds</a> for that event.<br />
                <b>HasWebinars</b> Can be true/false: True: there is a <a href="webinar.aspx">webinar</a> for that event.<br />
                <b>HasLiveCoverage</b> Can be true/false: True: there is a <a href="livecoverage.aspx">live coverage</a> for that event.<br />
                <b>HasBlogs</b> Can be true/false: True: there are <a href="blogs.aspx">blogs</a> for that event.<br />
                <b>HasHistory</b> Can be true/false: True: there is a <a href="history.aspx">history</a> for that event.<br />
                <b>HasAutochartist</b> Can be true/false: True: there is an <a href="autochartist.aspx">Autochartist</a> for that event.<br />
                <b>HasPairs</b> Can be true/false: True: there is an <a href="autochartist.aspx">Autochartist</a> for that event.<br />
                <b>DisplayActual</b> Actual in string format.<br />
                <b>DisplayPrevious</b> Previous in string format.<br />
                <b>DisplayConsensus</b> Consensus in string format.<br />
                <b>DisplayRevised</b> Revised in string format.<br />
                <b>Precision</b> Number of decimals.<br />
            </p>
            <h2>
                Samples
            </h2>
            <p>
                <ul>
                    <li>default grid, html format: http://calendar.fxstreet.com/eventdate/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>day view, xml format: http://calendar.fxstreet.com/eventdate/?view=day&f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>week view, json format: http://calendar.fxstreet.com/eventdate/?view=week&f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                    <li>detail json format: http://calendar.fxstreet.com/eventdate/{EVENT_DATE_ID}?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}  </li>
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>