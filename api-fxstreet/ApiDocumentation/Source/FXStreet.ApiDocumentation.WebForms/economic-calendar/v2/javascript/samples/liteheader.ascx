<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="liteheader.ascx.cs" Inherits="FXStreet.ApiDocumentation.WebForms.economic_calendar.v2.javascript.samples.liteheader" %>    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>     
    <script type="text/javascript">
        var fxcalendar_config = {
            host: "http://calendar.fxstreet.com",
            eventurl: "./main_<%=Culture%>.aspx?id=",
            culture: "<%=Culture%>"
        };
    </script>
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/mini"></script>
