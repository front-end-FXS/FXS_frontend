<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="eventheader.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.eventheader" %>
    <%
        var idcountry = "23e5c6a7-a4d1-4bfa-a76c-a8fc2b03bfd9";
        if ( !string.IsNullOrEmpty( Request.QueryString["id"] ) )
            idcountry = Request.QueryString["id"];
     %>
    <script type="text/javascript">
        var fxcalendar_config = {
            gridselector: "#calendar",
            filterselector: "#filter",
            host: "http://calendar.fxstreet.com",
            eventId: "<%=idcountry %>",
            culture: "<%=Culture%>"
        };
    </script>
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/event/?culture=<%=Culture%>&version=0.0.1"></script>
