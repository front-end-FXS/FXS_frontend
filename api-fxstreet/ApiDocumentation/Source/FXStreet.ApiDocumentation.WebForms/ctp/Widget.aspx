<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>

<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>
        <!-- Introduccio de la API -->
        <div class="ctpintroduction">
            <h2>Introduction
            </h2>
            <p>
                You can place a small code in your web page in order to get our white label widget in your page.
            </p>
            <h2>Installation Steps
            </h2>

            <textarea rows="20" cols="120">  
&lt;html&gt;
&lt;head&gt;    
        &lt;script type="text/javascript"&gt;
        var fxs_widget_config = {
        Culture: 'en-US'
    };
    &lt;/script&gt;                  
&lt;/head&gt;
&lt;body&gt;		
    <div style="width:80%;margin:auto;">
        <div fxs_widget fxs_name="ctp" fxs_pair="fxs-3212164" fxs_class_size="fxs_widget_big"></div>
    </div>        
    &lt;script type="text/javascript" src="https://markettools.fxstreet.com/v1/WidgetBaseJs/GetWidgetBaseJs"&gt;&lt;/script&gt;                 
&lt;/body&gt;
&lt;/html&gt;
            </textarea>
                <h3>
                    Steps:
                </h3>
            <ul>
                <li>Place the configuration in the head </li>
                <li>Place a div with the attribute fxs_widget in it, the name of the widget current trading positions in this case, and the pair you want to show. 
                    You can get the list of assets available through our API,<a href="https://markettools.fxstreet.com/v1/en-US/ctp/assets"> market tools available assets </a> (<a href="../../economic-calendar/v2/security/">security </a> key needed)
                </li>
                <li>You need to place the script that calls to our JS on the bottom of the body. </li>
            </ul>
        </div>
        <h2>
            Configuration options
        </h2>
        <p>
            Culture (Culture): The culture of the widget
               <ul>
                   <li> ar-AE </li>
                   <li> zh-CN </li>
                   <li> id-ID </li>
                   <li> tr-TR </li>
                   <li> fr-FR </li>
                   <li> de-DE </li>
                   <li> zh-CHT</li>
                   <li> en-US </li>
                   <li> ru-RU </li>
                   <li> es-ES </li>
                   <li> en-US </li>
               </ul>
        </p>
        <p>
            Class size (fxs_class_size): We have 3 sizes of every widget
            <ul>
                <li>fxs_widget_default</li>   
                <li>fxs_widget_mini</li>           
                <li>fxs_widget_big</li>
            </ul>
        </p>       
        <h2>
            Security
        </h2>
        <p> Widget security is done via white-list your domain, so please contact sales@fxstreet.com with your domain list to be whitelisted</p>
        
        <div class="newsexample">
            <h2>Examples of implementation (Press Ctrl + U) to see the Javascript Code</h2>
            <p><a href="./examplesingle.html">Current Trading Positions Single Asset sample</a></p>
            <p><a href="./examplemulti.html">Current Trading Positions Multi Asset sample</a></p>
            <p><a href="./examplecontributors.html">Current Trading Positions Contributors sample</a></p>
        </div>

    </div>
</asp:Content>
