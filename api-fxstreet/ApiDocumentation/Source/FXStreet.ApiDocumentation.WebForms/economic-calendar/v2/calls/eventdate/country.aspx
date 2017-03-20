<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
     <div>        
        <div>  
            <p>
                The purpose of this page is to return the Country data. <br />
                You can ask for a country with, /contry/{IdContry}/
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
                        <a href="../../parameters/culture.aspx">culture</a>.
                    </li>
                    <li>
                        <a href="../../parameters/timezone.aspx">timezone</a>.
                    </li>                                                                                                                     
                </ul>              
            </p>            
            <h2>contry at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;CountryMetaInfo&gt;
    &lt;CountryCode&gt;UK&lt;/CountryCode&gt; 
    &lt;CountryName&gt;United Kingdom&lt;/CountryName&gt; 
    &lt;Id&gt;652a1f9f-5ffe-42de-a53f-e30900fef5e5&lt;/Id&gt; 
&lt;/CountryMetaInfo&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>CountryCode</b>. International country code.<br />
                <b>CountryName</b>. Country code.<br />
                <b>Id</b>. IdContry.<br />                
            </p>
            <h2>
                Samples
            </h2>
            <p>
                 <ul>
                    <li>Country in html format http://calendar.fxstreet.com/country/f0b72088-34bb-4752-9337-c41f329c7798/?k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>
                    <li>Country in json format http://calendar.fxstreet.com/country/f0b72088-34bb-4752-9337-c41f329c7798/?f=json&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>