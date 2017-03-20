<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>           
            <h2>
                Introduction
            </h2>
            <p>
                FXstreet owns macroeconomic data of the most revelant events and provides it to third parties with http requests. You can find some of this data on our economic calendar: 
            </p>           
            <p>
                <a href="http://www.fxstreet.com/fundamental/economic-calendar/" >Economic Calendar</a>
            </p>             
            <h2>
                Api Calls
            </h2>
            <p>
                Api calls works with <a href="./security/">security</a> based on private & public keys.                                
            </p>
            <ul>
                <li><a href="./calls/eventdate/">event dates</a>: main view of the calendar</li>
            </ul>
            <h2>Javascript solution</h2>
            <p>
                You can use our <a href="./javascript/">own javascript implementation</a> or use it for inspiration to build a custom one.
            </p>
            <h2>
                Actual / Revised notification
            </h2>
            <p>
                <ul>
                    <li>
                        <h3>Requests /evendate/{IdEcoCalendarDate}</h3>
                        <p>
                            Having a event date with IdEcoCalendarDate = {IdEcoCalendarDate} you can make calls to <a href="./calls/eventdate/id.aspx">/evendate/{IdEcoCalendarDate}</a> until you get a result.<br />
                            Is not the optimal solution but will work.
                        </p>
                    </li>
                    <li>
                        <h3>Http Push</h3>
                        <p>
                            This update is done with Bayeux protocol. The process is based on maintaining a http connection opened, allowing Server-to-Client communication. It is possible to subscribe to more than one channel using Javascript or .NET plattform. A key is required and a domain. If you are planning to go for that solution, contact us and we will provide support. <br />
                            This is the fastest solution.
                        </p>
                    </li>
                    <li>
                        <h3>A service running on your system</h3>
                        <p>
                            Similar than Http Push, we can provide <a href="./subscription-client">JAVA program</a> that can implement the Http Push solution creating text files with actual/revised values or executing the specified sql.<br />
                            This application has been developed to run on Windows, Linux and Mac.<br />                             
                        </p>
                    </li>
                </ul>                
            </p>
            <h2>
                Demo
            </h2>
            <p>
            <iframe width="420" height="315" src="http://www.youtube.com/embed/nYyzCdl56Vo" frameborder="0" allowfullscreen></iframe>
            </p>
        </div>        
    </div>
</asp:Content>