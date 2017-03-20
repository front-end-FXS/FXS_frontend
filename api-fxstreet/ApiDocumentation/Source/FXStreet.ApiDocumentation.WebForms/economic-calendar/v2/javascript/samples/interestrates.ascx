<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="interestrates.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.lite" %>
<%
  
    string zone = "all";
    if (Request["z"] != null)
        zone = Request["z"];  
%>
    <div>        
        <div>
            <h2>
                Interest Rates <%=Culture%>
            </h2>
            <p>
                
                <div id="your-id-here" ></div>
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
    &lt;/head&gt;

    &lt;body&gt;

        &lt;div id="your-id-here"&gt;
        &lt;/div&gt;
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/interest-rates/"&gt;&lt;/script&gt;
		&lt;script type="text/javascript"&gt;
            fxstreet.interestRates({
                id: "your-id-here",
                culture: "<%=Culture%>", // diplay culture
                timezone: "UTC", // your timezone
                zone: "<%=zone%>", // zone
                chart: 1 // charts on
            });
        &lt;/script&gt;	
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>  
    </div>
    
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/interest-rates/"></script> 
    <script type="text/javascript">
        fxstreet.interestRates({
            id: "your-id-here",
            culture: "<%=Culture%>",
            timezone: "UTC", // your timezone
            zone: "<%=zone%>",
            chart: 1,
            timezone: "UTC"
        });
    </script>