<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="main.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.main" %>
    <div>        
        <div>
            <h2>
                Lite economic calendar <%=Culture%>
            </h2>            
            <div id="fxst-calendar" style="width:810px;margin:auto;">
                <div id="fxst_filter"></div>
                <hr />
                <div id="fxst_grid"></div>
            </div>                     
            <h2>
                Source code
            </h2>          
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
            culture: "<%=Culture%>",
            countryurl: "country_<%=Culture%>.aspx?id=", // your own page,
            eventurl: "event_<%=Culture%>.aspx?id=", // your own page
            view: "week"
            };
        &lt;/script&gt;        
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/main/?culture=<%=Culture%>&version=0.0.1"&gt;&lt;/script&gt;
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
        </div>        
    </div>