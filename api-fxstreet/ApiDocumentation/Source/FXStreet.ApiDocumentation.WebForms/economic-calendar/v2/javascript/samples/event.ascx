<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="event.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.eventpage" %>
    <div>        
        <div>
            <h2>
                Event Page <%=Culture%>
            </h2>
            <p>                
                <div style="width:645px;margin:auto">
		            <div id="fxec_eventlayout" class="fxst-eventpage fxst-gnral"></div>
	            </div>
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
		gridselector: "#calendar",
		filterselector: "#filter",
		host: "http://calendar.fxstreet.com",
		eventId: "23e5c6a7-a4d1-4bfa-a76c-a8fc2b03bfd9",  // capture the id from the Url    
		culture: "<%=Culture%>" // culture
	};
    &lt;/script&gt;
    &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/event/?culture=<%=Culture%>&version=0.0.1"&gt;&lt;/script&gt;
	&lt;div style="width:645px;margin:auto"&gt;
		&lt;div id="fxec_eventlayout" class="fxst-eventpage fxst-gnral"&gt;&lt;/div&gt;
	&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>  
    </div>