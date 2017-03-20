<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="lite.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.lite" %>
    <div>        
        <div>
            <h2>
                Lite economic calendar <%=Culture%>
            </h2>
            <p>
                
                <div id="fxst_calendar" style="width: 824px"></div>
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
                      host: "http://calendar.fxstreet.com",
                      eventurl: "./main_<%=Culture%>.aspx", // your main calendar page
					  culture: "<%=Culture%>" // culture
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
    </div>