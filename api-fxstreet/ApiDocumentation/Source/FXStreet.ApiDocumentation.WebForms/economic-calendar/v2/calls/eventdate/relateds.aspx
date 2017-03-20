<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the related links. <br />
                You can ask for the related reports by event date /eventdate/{IdEcoCalendarDate}/relateds/.
            </p>
            <p>
                To use this call, you can use this parameters:
            </p>                  
            <h2>Parameters</h2>            
            <p>     
                All parameters are optional.                   
                <ul>  
                    <li>
                        <a href="../../parameters/f.aspx">format</a>.
                    </li>                                      
                   <li>
                        <a href="../../parameters/rows.aspx">rows</a>.
                    </li>                    
                    <li>
                        <a href="../../parameters/culture.aspx">culture</a>.
                    </li>
                    <li>
                        <a href="../../parameters/timezone.aspx">timezone</a>.
                    </li>                                                                                                                       
                </ul>              
            </p>            
            <h2>relateds  at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;RelatedModel&gt; 
    &lt;URL&gt;http://www.abs.gov.au/ausstats/abs%40.nsf/mf/8731.0&lt;/URL&gt; 
    &lt;Text&gt;Read the [url]Building data[/url] at Australian Bureau of Statistics&lt;/Text&gt; 
    &lt;Link&gt;Read the &lt;a class="fxit-ecocalinnerlinks" href="http://www.abs.gov.au/ausstats/abs%40.nsf/mf/8731.0" target="_blank"&gt;Building data&lt;/a&gt; at Australian Bureau of Statistics&lt;/Link&gt; 
&lt;/RelatedModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>URL</b>.<br />
                <b>Text</b>. Note you can replace [url], [/url] in order to build your custom link.<br />
                <b>Link</b>. Text formated with the URL.<br />                                      
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Relateds by Event Date http://calendar.fxstreet.com/eventdate/C62F4532-8F1B-4FA1-8B5B-F89EC5EA56BA/relateds/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Relateds by Event Date in json format http://calendar.fxstreet.com/eventdate/C62F4532-8F1B-4FA1-8B5B-F89EC5EA56BA/relateds/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>