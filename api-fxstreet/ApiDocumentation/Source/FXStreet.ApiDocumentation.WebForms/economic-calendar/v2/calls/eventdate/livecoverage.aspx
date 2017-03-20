<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>  
            <p>
                The purpose of this page is to return the related live coverage. <br />
                You can ask for the related reports by event date /eventdate/{IdEcoCalendarDate}/livecoverage/ and by event /event/{IdEcoCalendar}/livecoverage/.
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
            <h2>live coverage at glance</h2>
            <p>
                <pre>
<code class="dataexample0code">
<textarea rows="15" cols="80">
&lt;WebinarModel&gt; 
&lt;LiveCoverageModel&gt; 
    &lt;Id&gt;acdd5b9db4&lt;/Id&gt; 
&lt;/LiveCoverageModel&gt;
</textarea>
</code>
                </pre>
            </p>
            <h2>
                Nodes
            </h2>            
            <p>
                <b>Id</b>. Live coverage id.<br />                
            </p>
            <p>
            You can build a iframe with that code in order to display the live coverage.<br />
<code class="dataexample0code">
<textarea rows="50" cols="125">
&lt;iframe src="http://www.coveritlive.com/index2.php/option=com_altcaster/task=viewaltcast/altcast_code={Id}/height=450/width=630" scrolling="no" height="450px" width="630px" frameBorder ="0" allowTransparency="true"  &gt;
    &lt;a href="http://www.coveritlive.com/mobile.php/option=com_mobile/task=viewaltcast/altcast_code={Id}" &gt;&lt;/a&gt;
&lt;/iframe&gt;
</textarea>
</code>
            </p>
            <h2>
                Samples
            </h2>
            <p>
                <ul>
                    <li>Live Coverage by Event Date in xml format http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/livecoverage/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP} </li>                    
                </ul>
            </p>
        </div>              
    </div>
</asp:Content>