<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the related blogs. <br />
                You can ask for the related reports by eventdate /eventdate/{IdEcoCalendarDate}/blogs/ and by country /country/{IdCountry}/blogs/.
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
            <h2>Blogs at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;BlogModel&gt; 
    &lt;URL&gt;http://blogs.fxstreet.com/fxbootcamp/2010/02/06/us-job-losses-in-recent-recessions-5/&lt;/URL&gt; 
    &lt;Text&gt;[url]FxBootcamp » U.S. Job Losses in Recent Recessions[/url]&lt;/Text&gt; 
    &lt;Link&gt;&lt;a class="fxit-ecocalinnerlinks" href="http://blogs.fxstreet.com/fxbootcamp/2010/02/06/us-job-losses-in-recent-recessions-5/" target="_blank"&gt;FxBootcamp » U.S. Job Losses in Recent Recessions&lt;/a&gt;&lt;/Link&gt; 
    &lt;DateTime&gt; 
        &lt;Date&gt;2010-02-08T03:46:00.32Z&lt;/Date&gt; 
    &lt;/DateTime&gt; 
&lt;/BlogModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>URL</b>.<br />
                <b>Text</b>. You can replace [url] and [/url] in order to create your custom link.<br />
                <b>Link</b>.<br />
                <b>DateTime</b>.<br />                                        
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Blogs by Event Date in xml format http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/blogs/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Blogs by Event Date http://calendar.fxstreet.com/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/blogs/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                                        
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>