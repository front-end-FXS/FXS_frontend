<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="countryheader.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.countryheader" %>
    <%
        var idcountry = "23e5c6a7-a4d1-4bfa-a76c-a8fc2b03bfd9";
        if ( !string.IsNullOrEmpty( Request.QueryString["id"] ) )
            idcountry = Request.QueryString["id"];
     %>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>     
    <script type="text/javascript">
        var fxcalendar_config = {
            host: "http://calendar.fxstreet.com/",
            gridselector: "#calendar",
            selector: "#fxec_grid",
            countryId: "<%=idcountry%>",
            css: "default",
            pastsvents: 10,
            events: 20,
            columns: "date,time,country,event,volatility,actual,consensus,previous",
            eventurl: "event_<%=Culture%>.aspx?id=", 
            culture: "<%=Culture%>"
        };
    </script>
   <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/country/?culture=<%=Culture%>&version=0.0.1"></script>  
