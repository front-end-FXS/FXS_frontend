<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
   <div>        
        <div>  
            <p>
                The purpose of this page is to return all the data related with one particular event. You must pass the correct "IdEcoCalendarDate" to see the details of this event. It can contains historical data, related news, related reports, live sessions... 
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
                        <a href="../../parameters/culture.aspx">culture</a>.
                    </li>
                    <li>
                        <a href="../../parameters/timezone.aspx">timezone</a>.
                    </li> 
                    <li>
                        <a href="../../parameters/showeventlink.aspx">showeventlink</a>.
                    </li>
                    <li>
                        <a href="../../parameters/showcountrylink.aspx">showcountrylink</a>.
                    </li>                   
                </ul>              
            </p>            
            <h2>/eventdates/{IdEcoCalendarDate} at glance</h2>
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
<IdEcoCalendarType xsi:nil="true"/> <IdEcoCalendar>c28721ec-1bde-4fa5-bba7-86a3755288ca</IdEcoCalendar> <IdEcoCalendarDate>8d8f189f-3514-433d-af4b-18f0571eecba</IdEcoCalendarDate> -<DateTime> <Date>2012-01-19T13:30:00Z</Date> </DateTime> <InternationalCode>US </InternationalCode> <Country>United States</Country> <IdCountry>0345d08a-7068-42e0-a65f-e2c6243c4de1</IdCountry> <Name>Consumer Price Index (MoM)</Name> <HTMLDescription>The Consumer Price Index released by the <a href="http://www.bls.gov/" target="_blank">US Bureau of Labor Statistcs</a> is a measure of price movements by the comparison between the retail prices of a representative shopping basket of goods and services. The purchase power of USD is dragged down by inflation. The CPI is a key indicator to measure inflation and changes in purchasing trends. Generally speaking, a high reading is seen as positive (or bullish) for the USD, while a low reading is seen as negative (or Bearish). </HTMLDescription> <Comments/> <Preliminar>false</Preliminar> <ForType xsi:nil="true"/> -<For> <Date>0001-01-01T00:00:00</Date> </For> <Volatility>2</Volatility> <Unit>%</Unit> <Actual>0.000</Actual> <Consensus>0.100</Consensus> <Relation>true</Relation> <Previous>0.000</Previous> <Revised xsi:nil="true"/> <Better>false</Better> <Worst>true</Worst> <Tentative>false</Tentative> <AllDay>false</AllDay> <HasMetadata>true</HasMetadata> <HasOlsenScale>true</HasOlsenScale> <HasCountries>false</HasCountries> <HasReports>false</HasReports> <HasNews>true</HasNews> <HasAdvancedNews>true</HasAdvancedNews> <HasRelateds>true</HasRelateds> <HasWebinars>false</HasWebinars> <HasLiveCoverage>false</HasLiveCoverage> <HasBlogs>false</HasBlogs> <HasHistory>true</HasHistory> <HasAutochartist>false</HasAutochartist> <HasPairs>false</HasPairs> <DisplayActual>0.0%</DisplayActual> <DisplayPrevious>0.0%</DisplayPrevious> <DisplayConcensus>0.1%</DisplayConcensus> <DisplayRevised/> <Precision>1</Precision> </EventDateModel>
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
                <b>Consensus</b> The consensus for the actual of the event. <br />
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
                <b>HasPairs</b> Can be true/false.<br />
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
                    <li>Event date in html format http://calendar.fxstreet.com/eventdate/3c8a8ab6-7bb5-475d-93ef-550e6402e396/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Event date in xml format http://calendar.fxstreet.com/eventdate/3c8a8ab6-7bb5-475d-93ef-550e6402e396/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>