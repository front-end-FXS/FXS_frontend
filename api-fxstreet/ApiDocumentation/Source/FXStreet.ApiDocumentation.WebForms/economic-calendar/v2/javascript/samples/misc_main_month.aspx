<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="main.ascx" tagname="Enginy" tagprefix="main" %>
<%@ Register src="mainheader.ascx" tagname="Enginy" tagprefix="mainheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>     
    <script type="text/javascript">
        var fxcalendar_config = {
            host: "http://calendar.fxstreet.com",            
            gridselector: "#fxst_grid",
            filterselector: "#fxst_filter",
            columns: "None",
            showeventlink: "1",
            showcountrylink: "1",
            culture: "en-us",
            countryurl: "country_en-us.aspx?id=",
            eventurl: "event_en-us.aspx?id=",
            view: "month"
        };
    </script>    
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/main/?culture=<%=Culture%>&version=0.0.1"></script>
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
       <div>        
        <div>
            <h2>
                Lite economic calendar en-us monthly view
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
            showeventlink: "1",
            showcountrylink: "1",
            culture: "en-us",
            countryurl: "country_en-us.aspx?id=",
            eventurl: "event_en-us.aspx?id=",
            view: "month" // monthly view
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
</asp:Content>