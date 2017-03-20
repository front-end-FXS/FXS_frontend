<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="mainheader.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.mainheader" %>    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>     
    <script type="text/javascript">
        var fxcalendar_config = {
            host: "http://calendar.fxstreet.com",
            gridselector: "#fxst_grid",
            filterselector: "#fxst_filter",
            columns: "None",
            showeventlink: "1",
            showcountrylink: "1",
            culture: "<%=Culture%>",
            countryurl: "country_<%=Culture%>.aspx?id=",
            eventurl: "event_<%=Culture%>.aspx?id=",
            view: "week"
        };
    </script>    
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/main/?culture=<%=Culture%>&version=0.0.1"></script>
