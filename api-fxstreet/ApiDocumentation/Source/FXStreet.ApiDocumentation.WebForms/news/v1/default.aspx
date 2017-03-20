<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">    
    <div>
        <!-- Introduccio de la API -->
        <div class="newsintroduction">

             <span style=" background-color: #d25746;  color: #1b1c23; font-weight: 500; margin: 15px 5px 0 0; padding: 5px 5px; display: inline-block; letter-spacing: normal; line-height: 1.35em;">
                 This version is only allowed for consumption from MetaTrader
             </span>  
              
           <h1> Deprecated fields</h1> From 17/12/2016:            
             
            <p>
                <ul>
                    <li>Charts</li>
                    <li>TechAnalysis atributes [open, close, high, low, bid, ask, pct] </li>
                </ul>
               Will not be available any more.
            </p>

            <h1>
                Introduction
            </h1> 
                      
            <p>
                Welcome to the News feed API. In order to use this API you should be sure about a couple of things.
            </p>
            <ul>
                <li>
                    Get in touch with an FXstreet.com agent
                </li>
                <li>
                    Get a client Key that allows you to use the contracted services
                </li>
            </ul>
            <p>
                If you do not meet these requirements, please, do not hesitate to contact us at <strong><em>support@fxstreet.com</em></strong> and we will be pleased to get in touch with you.
            </p>
            <p>
                Once you meet all those requirements you can now use our API to get our News feed data. You can get this data in 3 different ways, a valid RSS formated XML, a custom XML and a JSON object.  The 3 formats shares the same information, just the format is different between them. You choose the one that fits to your requirements or both. Feel free to try both and decide wich one is better for you
            </p>
        </div>
        <div class="attributes">
            <!-- Introduction -->
            <h1>Parameters Description</h1>
            <p>
                Here is a brief description of the URL and the parameters you have to use to get access to the News feed.
            </p>
            <!-- URL -->
            <div class="attributedescription">
                <h2>
                    URL
                </h2>
                <ul>
                    <li><span><strong>http://subscriptions.fxstreet.com/rss/</strong></span> : This URL is the API endpoint to access the News Feed in a valid RSS format</li>
                    <li><span><strong>http://subscriptions.fxstreet.com/xml/</strong></span> : This URL is the API endpoint to access the News Feed in XML format</li>
                     <li><span><strong>http://subscriptions.fxstreet.com/json/</strong></span> : This URL is the API endpoint to access the News Feed in JSON format</li>
                
                </ul>
            </div>
            <!-- Client Key -->
            <div class="attributedescription">
                <h2>
                    Client Key
                </h2>
                <p>
                    The User Key paramater is a unique key that identifies you as a client of our services. This key is a 20 digits key with [0-9] and [A-F] characters. 
                    <br />
                    Ex: <strong>A0000AA0000A0000A000</strong>
                    <br />
                    Do not share this Key under any circumstance.
                </p>
                Error messages:
                <ul>
                    <li><span><strong>must specify client key</strong></span> : this message means you have forgotten to attach the client key in the request.</li>
                    <li><span><strong>not authorized</strong></span> : this message means you don't have contracted this item, please contact us if did have acquired this item but it's denying access.</li>
                </ul>
            </div>
            <!--Item -->
            <div class="attributedescription">
                <h2>
                    Item
                </h2>
                <p>
                    This attribute describes what kind of news feed you want to get. If you do not provide this paramter, you will get a "<strong>must specify item</strong>" error message.
                </p>
                <p>
                    Here you have the current items you can have access to. Take in mind that you should have acquired this items in your contract in order to get access to the news feed, if you have not acquired this item you will get a "<strong>not authorized</strong>" error message every time you make a request to the API.
                </p>
                <ul>
                    <li><strong>arabicnewscharts</strong> : Arabic News Feed</li>
                    <li><strong>arabicnewschartswl</strong> : Arabic News Feed  (White Label)</li>
                    <li><strong>chinesenewscharts</strong> : Chinese News Feed </li>
                    <li><strong>chinesenewschartswl</strong> : Chinese News Feed  (White Label)</li>
                    <li><strong>englishnewscharts</strong> : English News Feed</li>
                    <li><strong>englishnewschartswl</strong> : English News Feed  (White Label)</li>
                    <li><strong>frenchnewscharts</strong> : French News Feed</li>
                    <li><strong>frenchnewschartswl</strong> : French News Feed  (White Label)</li>
                    <li><strong>germannewscharts</strong> : German News Feed</li>
                    <li><strong>germannewschartswl</strong> : German News Feed (White Label)</li>
                    <li><strong>indonesiannewscharts</strong> : Indonesian News Feed</li>
                    <li><strong>indonesiannewschartswl</strong> : Indonesian News Feed (White Label)</li>
                    <li><strong>russiannewscharts</strong> : Russian News Feed</li>
                    <li><strong>russiannewschartswl</strong> : Russian News Feed (White Label)</li>
                    <li><strong>spanishnewscharts</strong> :  Spanish News Feed</li>
                    <li><strong>spanishnewschartswl</strong> : Spanish News Feed (White Label)</li>
                    <li><strong>tradchinesenewscharts</strong> : Traditional Chinese News Feed</li>
                    <li><strong>tradchinesenewschartswl</strong> : Traditional Chinese News Feed (White Label)</li>
                    <li><strong>turkishnewscharts</strong> : Turkish News Feed</li>
                    <li><strong>turkishnewschartswl</strong> : Turkish News Feed (White Label)</li>
                </ul>
            </div>
        </div>
        <div class="newsusage">
            <h2>
                Usage
            </h2>
            <p>
                In order to get the news feed you have to do a Get Request to Endpoint you have choosen attaching the parameters like this: 
                <br />
                {ENDPOINT}/?c={CLIENT_KEY}&i={ITEM}
                <br />
            </p>
            <h3>Usage Example</h3>
            <ul> 
                <li><strong>http://subscriptions.fxstreet.com/xml/news.aspx?c=A0000AA0000A0000A000&i=turkishnewscharts</strong> to get the turkish news feed in XML format. </li>
                <li><strong>http://subscriptions.fxstreet.com/rss/news.aspx?c=A0000AA0000A0000A000&i=turkishnewscharts</strong> to get the turkish news feed in RSS format. </li>
                <li><strong>http://subscriptions.fxstreet.com/json/news.aspx?c=A0000AA0000A0000A000&i=turkishnewscharts</strong> to get the turkish news feed in JSON format. </li>
            </ul>
            
        </div>        
        <div class="newsexample">
            <h2>Examples</h2>
            <p><a href="/news/v1/examples/xml.aspx">Here</a> you can see a XML example</p>
            <p><a href="/news/v1/examples/rss.aspx">Here</a> you can see a RSS example</p>
            <p><a href="/news/v1/examples/json.aspx">Here</a> you can see a JSON example</p>
        </div>
        <div class="attributedescription">
            <h2>
                Metatrader server
            </h2>
            <p>
                Please check the documentation <a href="./MT/fxstreet_data_feeder.pdf" >here</a>.
            </p>
        </div>
        <div class="xmlrpcping">
            <h2>
                Notifications
            </h2>
            <p>
                If you want to receive a notification each time the feed is updated, you can setup a <a href="http://en.wikipedia.org/wiki/XML-RPC">XMLRPC Server</a>.
                <br />
                You will receive a POST text/xml request to "Article.update" method with the url of the updated feed as a parameter: "http://subscriptions.fxstreet.com/xml/news.aspx?c={CLIENT_KEY}&i={ITEM}", where CLIENT_KEY will be your client key and ITEM will be the updated item.
                <br />
                Details:
                <ul>
                    <li>
                        <strong>Request</strong>: your xmlrpc server url.
                    </li>
                    <li>
                        <strong>Method</strong>: POST
                    </li>
                    <li>
                        <strong>Request Headers</strong>: Content-Type: text/xml
                   </li>
                    <li>
                        <strong>Request Body</strong>:          
                        <pre>
&lt;?xml version="1.0"?&gt;
&lt;methodCall&gt;
    &lt;methodName&gt;Article.update&lt;/methodName&gt;
    &lt;params&gt;
        &lt;param&gt;
            &lt;value&gt;http://subscriptions.fxstreet.com/xml/news.aspx?c={CLIENT_KEY}&i={ITEM}&lt;/value&gt;
        &lt;/param&gt;
    &lt;/params&gt;
&lt;/methodCall&gt;
                        </pre>
                   </li>
                </ul>
                If you want to activate the notification server, please contact support at fxstreet.com
            </p>                        
        </div>
    </div>
</asp:Content>