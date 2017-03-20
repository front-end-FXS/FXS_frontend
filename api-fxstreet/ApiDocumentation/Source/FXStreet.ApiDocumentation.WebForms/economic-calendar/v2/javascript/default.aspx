<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>   
            <h2>Introduction</h2>
            <p>                
                Javascript solution comes in 4 types: Full calendar, calendar lite, event page and country page. Each type is configurable and it's not mandatory to use all 4 types.
            </p>

            
            <h2>Main calendar (Responsive version)</h2>
            <p>
                In order to place the main calendar in your site, you need to put a javascript code in a calendar. In the config section of that calendar you can configure if you want to show links to your event page or links to your country page:
            </p>
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100">  
&lt;html&gt;
    &lt;head&gt;
        &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"&gt;&lt;/script&gt;         
    &lt;/head&gt;
    &lt;body&gt;
		&lt;script type="text/javascript"&gt;
            var fxcalendar_config = {
                host: "http://calendar.fxstreet.com",
            gridselector: "#fxst_grid",
            filterselector: "#fxst_filter",
            columns: "None",
            showeventlink: "1", // if you want to disable event link, put a "0"
            showcountrylink: "1",  // if you want to disable country link, put a "0"
            culture: "en-us", // diplay culture
            countryurl: "country_en-us.aspx?id=", // your own page
            eventurl: "event_en-us.aspx?id=" // your own page
            };
        &lt;/script&gt;        
        &lt;script type="text/javascript" src="https://calendar.fxstreet.com/scripts/main/?culture=en-us&version=0.0.2"&gt;&lt;/script&gt;
        &lt;div id="Div1" style="width:810px;margin:auto;"&gt;
            &lt;div id="fxst_filter"&gt;&lt;/div&gt;
            &lt;hr /&gt;
            &lt;div id="fxst_grid"&gt;&lt;/div&gt;
        &lt;/div&gt;                     
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>

            <h2>Main calendar (No responsive version)</h2>
            
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100">  
&lt;html&gt;
    &lt;head&gt;
        &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"&gt;&lt;/script&gt;         
    &lt;/head&gt;
    &lt;body&gt;
		&lt;script type="text/javascript"&gt;
            var fxcalendar_config = {
                host: "http://calendar.fxstreet.com",
            gridselector: "#fxst_grid",
            filterselector: "#fxst_filter",
            columns: "None",
            showeventlink: "1", // if you want to disable event link, put a "0"
            showcountrylink: "1",  // if you want to disable country link, put a "0"
            culture: "en-us", // diplay culture
            countryurl: "country_en-us.aspx?id=", // your own page
            eventurl: "event_en-us.aspx?id=" // your own page
            };
        &lt;/script&gt;        
        &lt;script type="text/javascript" src="https://calendar.fxstreet.com/scripts/main/?culture=en-us&version=0.0.1"&gt;&lt;/script&gt;
        &lt;div id="Div1" style="width:810px;margin:auto;"&gt;
            &lt;div id="fxst_filter"&gt;&lt;/div&gt;
            &lt;hr /&gt;
            &lt;div id="fxst_grid"&gt;&lt;/div&gt;
        &lt;/div&gt;                     
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>

            
            <h3>Samples</h3>
            <ul>
                <li><a href="./samples/main_ar-ae.aspx">Main arabic calendar (ar-ae)</a></li>
                <li><a href="./samples/main_ca-es.aspx">Main catalan calendar (ca-es)</a></li>
                <li><a href="./samples/main_de-de.aspx">Main german calendar (de-de)</a></li>
                <li><a href="./samples/main_en-us.aspx">Main english calendar (en-us)</a></li>
                <li><a href="./samples/main_es-es.aspx">Main spanish calendar (es-es)</a></li>
                <li><a href="./samples/main_fr-fr.aspx">Main french calendar (fr-fr)</a></li>
                <li><a href="./samples/main_hu-hu.aspx">Main hungarian calendar (hu-hu)</a></li>
                <li><a href="./samples/main_id-id.aspx">Main indonesian calendar (id-id)</a></li>
                <li><a href="./samples/main_it-it.aspx">Main italian calendar (it-it)</a></li>
                <li><a href="./samples/main_ja-jp.aspx">Main japanese calendar (ja-jp)</a></li>
                <li><a href="./samples/main_ko-kr.aspx">Main korean calendar (ko-kr)</a></li>
                <li><a href="./samples/main_pl-pl.aspx">Main polish calendar (pl-pl)</a></li>
                <li><a href="./samples/main_pt-pt.aspx">Main portuguese calendar (pt-pt)</a></li>
                <li><a href="./samples/main_ru-ru.aspx">Main russian calendar (ru-ru)</a></li>
                <li><a href="./samples/main_tr-tr.aspx">Main turkish calendar (tr-tr)</a></li>
                <li><a href="./samples/main_vi-vn.aspx">Main vietnamese calendar (vi-vn)</a></li>
                <li><a href="./samples/main_zh-cht.aspx">Main traditional chinese calendar (zh-cht)</a></li>
                <li><a href="./samples/main_zh-cn.aspx">Main simplified chinese calendar (zh-cn)</a></li>                
            </ul>
            <h3>
                Calendar Lite
            </h3>            
            <p>
                Calendar Lite is the light version of the the main calendar. In the config section you can configure your main calendar page link.
            </p>
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100"> 
&lt;html&gt;
    &lt;head&gt;
        &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"&gt;&lt;/script&gt;         
    &lt;/head&gt;

    &lt;body&gt;
		&lt;script type="text/javascript"&gt;
            var fxcalendar_config = {
                host: "http://calendar.fxstreet.com",
                eventurl: "./main_es-es.aspx", // your main calendar page
                culture: "es-es" // diplay culture
            };
        &lt;/script&gt;
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/mini"&gt;&lt;/script&gt;
        &lt;div id="fxst_calendar" style="width: 824px"&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>
            <h3>Samples</h3>
            <ul>                                    
                <li><a href="./samples/lite_ar-ae.aspx">Lite arabic calendar (ar-ae)</a></li>
                <li><a href="./samples/lite_ca-es.aspx">Lite catalan calendar (ca-es)</a></li>
                <li><a href="./samples/lite_de-de.aspx">Lite german calendar (de-de)</a></li>
                <li><a href="./samples/lite_en-us.aspx">Lite english calendar (en-us)</a></li>
                <li><a href="./samples/lite_es-es.aspx">Lite spanish calendar (es-es)</a></li>
                <li><a href="./samples/lite_fr-fr.aspx">Lite french calendar (fr-fr)</a></li>
                <li><a href="./samples/lite_hu-hu.aspx">Lite hungarian calendar (hu-hu)</a></li>
                <li><a href="./samples/lite_id-id.aspx">Lite indonesian calendar (id-id)</a></li>
                <li><a href="./samples/lite_it-it.aspx">Lite italian calendar (it-it)</a></li>
                <li><a href="./samples/lite_ja-jp.aspx">Lite japanese calendar (ja-jp)</a></li>
                <li><a href="./samples/lite_ko-kr.aspx">Lite korean calendar (ko-kr)</a></li>
                <li><a href="./samples/lite_pl-pl.aspx">Lite polish calendar (pl-pl)</a></li>
                <li><a href="./samples/lite_pt-pt.aspx">Lite portuguese calendar (pt-pt)</a></li>
                <li><a href="./samples/lite_ru-ru.aspx">Lite russian calendar (ru-ru)</a></li>
                <li><a href="./samples/lite_tr-tr.aspx">Lite turkish calendar (tr-tr)</a></li>
                <li><a href="./samples/lite_vi-vn.aspx">Lite vietnamese calendar (vi-vn)</a></li>
                <li><a href="./samples/lite_zh-cht.aspx">Lite traditional chinese calendar (zh-cht)</a></li>
                <li><a href="./samples/lite_zh-cn.aspx">Lite simplified chinese calendar (zh-cn)</a></li>  
            </ul>  
            <h2>Event Page</h2>          
            <p>
                This page shows all the information related to an event. Is it necessary to capture the event id from the url and then put into the calendar configuration.
            </p>
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100"> 
&lt;html&gt;
    &lt;head&gt;
    &lt;/head&gt;
    &lt;body&gt;
	&lt;script type="text/javascript"&gt;
        var fxcalendar_config = {
            gridselector: "#calendar",
            filterselector: "#filter",
            host: "http://calendar.fxstreet.com",
            eventId: "23e5c6a7-a4d1-4bfa-a76c-a8fc2b03bfd9",  // capture the id from the Url    
            culture: "en-us" // diplay culture
        };
    &lt;/script&gt;
    &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/event/?culture=en-US&version=0.0.1"&gt;&lt;/script&gt;
	&lt;div style="width:645px;margin:auto"&gt;
		&lt;div id="fxec_eventlayout" class="fxst-eventpage fxst-gnral"&gt;&lt;/div&gt;
	&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>
            <h3>Samples</h3>
            <ul>            
                <li><a href="./samples/event_en-us.aspx?id=7f91101b-f9d2-4924-8d58-5a5dabcf2922">Trade Balance (en-us)</a></li>                
            </ul>            
            <h2>Country Page</h2>          
            <p>
                This page shows all the information related to a country. Is it necessary to capture the contry id from the url and then put into the calendar configuration.
            </p>

            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100"> 
&lt;html&gt;
    &lt;head&gt;
        &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"&gt;&lt;/script&gt;         
        
    &lt;/head&gt;

    &lt;body&gt;
		&lt;script type="text/javascript"&gt;
            var fxcalendar_config = {
                host: "http://calendar.fxstreet.com/",
                gridselector: "#calendar",
                selector: "#fxec_grid",
                countryId: "696c9d05-d321-49d6-9909-cf46d8aabf51",  // capture the id from the Url    
                css: "default",
                pastsvents: 10,
                events: 20,
                columns: "date,time,country,event,volatility,actual,consensus,previous",
                eventurl: "event_en-us.aspx?id=", // your own event page
                culture: "en-us" // diplay culture
            };
        &lt;/script&gt;
		&lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/country/?culture=en-us&version=0.0.1"&gt;&lt;/script&gt;
        &lt;div id="fxec_calendar"  class="fxst-countrypage fxst-gnral" &gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;

</textarea> 
                    </code>
                </pre>
            </p>

            <h3>Samples</h3>
            <ul>            
                <li><a href="./samples/country_en-us.aspx?id=f96594da-d923-4a09-8679-4f4fa7bdf82e">France (en-us)</a></li>                
            </ul>
            
            <h2>Interest Rates</h2>          
            <p>
                This page shows all the information related the interest rates for an <a href="../../parameters/zone.aspx">specified zone</a>.
            </p>            
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100"> 
&lt;html&gt;
    &lt;head&gt;                 
    &lt;/head&gt;

    &lt;body&gt;

        &lt;div id="your-id-here"&gt;
        &lt;/div&gt;
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/interest-rates/"&gt;&lt;/script&gt;
		&lt;script type="text/javascript"&gt;
            fxstreet.interestRates({
                id: "your-id-here",
                culture: "en-us", // diplay culture
                timezone: "UTC", // your timezone
                zone: "all", // all countries
                chart: 1 // charts on
            };
        &lt;/script&gt;	
    &lt;/body&gt;
&lt;/html&gt;

</textarea> 
                    </code>
                </pre>
            </p>

            <h3>Samples</h3>
            <ul>            
                <li><a href="./samples/interestrates_ar-ae.aspx">All countries (ar-ae)</a></li>
                <li><a href="./samples/interestrates_ca-es.aspx">All countries (ca-es)</a></li>
                <li><a href="./samples/interestrates_de-de.aspx">All countries (de-de)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx">All countries (en-us)</a></li>
                <li><a href="./samples/interestrates_es-es.aspx">All countries (es-es)</a></li>
                <li><a href="./samples/interestrates_fr-fr.aspx">All countries (fr-fr)</a></li>
                <li><a href="./samples/interestrates_hu-hu.aspx">All countries (hu-hu)</a></li>
                <li><a href="./samples/interestrates_id-id.aspx">All countries (id-id)</a></li>
                <li><a href="./samples/interestrates_it-it.aspx">All countries (it-it)</a></li>
                <li><a href="./samples/interestrates_ja-jp.aspx">All countries (ja-jp)</a></li>
                <li><a href="./samples/interestrates_ko-kr.aspx">All countries (ko-kr)</a></li>
                <li><a href="./samples/interestrates_pl-pl.aspx">All countries (pl-pl)</a></li>
                <li><a href="./samples/interestrates_ru-ru.aspx">All countries (ru-ru)</a></li>
                <li><a href="./samples/interestrates_tr-tr.aspx">All countries (tr-tr)</a></li>
                <li><a href="./samples/interestrates_vi-vn.aspx">All countries (vi-vn)</a></li>
                <li><a href="./samples/interestrates_zh-cht.aspx">All countries (zh-cht)</a></li>
                <li><a href="./samples/interestrates_zh-cn.aspx">All countries (zh-cn)</a></li> 
                <li><a href="./samples/interestrates_en-us.aspx?z=majors">Central Banks (en-us)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx?z=africa">Africa (en-us)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx?z=asia">Asia (en-us)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx?z=middleeast">Middle East (en-us)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx?z=northamerica">North America (en-us)</a></li>
                <li><a href="./samples/interestrates_en-us.aspx?z=southamerica">South America (en-us)</a></li>
            </ul>
             <%-- <h2>Market timeline</h2>          
            <p>
                This page shows all the information related the market timeline for an specified day</a>.
            </p>
                         
            <p>
            <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100"> 
&lt;html&gt;
    &lt;head&gt;                 
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/market-timeline/" &gt;&lt;/script&gt;
		&lt;script type="text/javascript"&gt;
        fxstreet.marketTimeline({
            id: "your-id-here", //container ID
            markets: {
                sydney: { disabled: false },  // display sydney market
                london: { disabled: false,
                          color: "#000000" },  // display London market in black
                tokyo: { disabled: false },   // display Tokyo market
                newyork: { disabled: false }, //display New York market
                abudhabi: { disabled: false }, //display Abu Dhabi market
                singapore: { disabled: false }, //display Singapore market
                hongkong: { disabled: false } //display Hong Kong market
            },
            background: "true", // map background
            holidayColor: "#808080",    // color for holiday
            culture: "en-us", // diplay culture
            timezone: "UTC"  // your timezone
        });
        &lt;/script&gt;	
    &lt;/body&gt;
&lt;/html&gt;

</textarea> 
                    </code>
                </pre>
            </p>

            <h3>Samples</h3>
            <ul>            
                <li><a href="./samples/market-timeline_default.aspx">Default parameters</a></li>
                <li><a href="./samples/market-timeline_en_main-markets.aspx">Only main markets</a></li>
                <li><a href="./samples/market-timeline_en_custom-colors.aspx">Coloring</a></li>
                <li><a href="./samples/market-timeline_ar_all.aspx">Arabic culture all custom</a></li>
                <li><a href="./samples/market-timeline_es_CET.aspx">CET timezone spanish culture</a></li>
                <li><a href="./samples/market-timeline_en_background.aspx">Background deactivated</a></li>
                <li><a href="./samples/market-timeline_en_full-custom.aspx">All parameters customized</a></li>
            </ul>
                         
            <h2>Misc</h2>          
            <ul>
                <li><a href="./samples/misc_main_timezone.aspx">Main calendar with custom timezone</a></li>
                <li><a href="./samples/misc_main_day.aspx">Main calendar with daily view</a></li>
                <li><a href="./samples/misc_main_week.aspx">Main calendar with weekly view</a></li>
                <li><a href="./samples/misc_main_month.aspx">Main calendar with monthly view</a></li>    
                <li><a href="./samples/misc_main_countdown.aspx">Main calendar with countdown column</a></li>    
            </ul>            
            <p>--%>

            <h3>How to set up countries</h3>
            <p>
                In order to select the countries you want to show in the first load (before the filter is being used) you should use the config 'countrycode' within the  var 'fxcalendar_config'.
                You can add as many countries as you want, separated by coma. You can see all the available countries after this code example 
                <code class="dataexample0code">
<textarea rows="13" cols="100">  
    &lt;script type="text/javascript"&gt;
        var fxcalendar_config = {
            .
            .
            .
            countrycode: 'US,UK,JP,EMU',
            .
            .
            .
        };
    &lt;/script&gt;    
</textarea>
                </code>
            </p>
            <h4>Available countries</h4>
            <ul>
	<li>AR: Argentina</li>
	<li>AU: Australia</li>
	<li>AT: Austria</li>
	<li>BE: Belgium</li>
	<li>BR: Brazil</li>
	<li>CA: Canada</li>
	<li>CL: Chile</li>
	<li>CN: China</li>
	<li>CZ: Czech Republic</li>
	<li>DK: Denmark</li>
	<li>EMU: European Monetary Union</li>
	<li>DE: Deutchland</li>
	<li>FI: Finland</li>
	<li>FR: France</li>
	<li>GR: Greece</li>
	<li>HU: Hungary</li>
	<li>IS: Isceland</li>
	<li>IN: India</li>
	<li>ID: Indonesia</li>
	<li>IE: Ireland</li>
	<li>IT: Italy</li>
	<li>JP: Japan</li>
	<li>MX: Mexico</li>
	<li>NL: Netherlands</li>
	<li>NZ: New Zealand</li>
	<li>NO: Norway</li>
	<li>PL: Poland</li>
	<li>PT: Portugal</li>
	<li>RO: romania</li>
	<li>RU: Russian Federation</li>
	<li>SK: Slovakia</li>
	<li>ZA: South Africa</li>
	<li>KR: South Korea</li>
	<li>ES: Spain</li>
	<li>SE: Sweden</li>
	<li>CH: Switzerland</li>
	<li>TR: Turkey</li>
	<li>UK: United Kingdom</li>
	<li>US: United States</li>
</ul>

        </div>        
    </div>
</asp:Content>