<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="country.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.country" %>
    <div>        
        <div>
            <h2>
                Country <%=Culture%>
            </h2>
            <p>
                <div id="fxec_calendar" class="fxst-countrypage fxst-gnral"></div>
            </p>           
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
						host: "http://calendar.fxstreet.com/",
						gridselector: "#calendar",
						selector: "#fxec_grid",
						countryId: "696c9d05-d321-49d6-9909-cf46d8aabf51",  // capture the id country from the Url    
						css: "default", // choose css
						pastsvents: 10, // number of past events
						events: 20, // number of events
						columns: "date,time,country,event,volatility,actual,consensus,previous", // columns
						eventurl: "event_<%=Culture%>.aspx?id=", // your own event page
						culture: "<%=Culture%>" // culture
                                  };
        &lt;/script&gt;
		&lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/country/?culture=<%=Culture%>&version=0.0.1"&gt;&lt;/script&gt;
        &lt;div id="fxec_calendar"  class="fxst-countrypage fxst-gnral" &gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>  
    </div>