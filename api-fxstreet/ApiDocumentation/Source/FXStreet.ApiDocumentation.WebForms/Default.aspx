<%@ Page Language="C#" Title="" MasterPageFile="/_masterpages/Site.master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FXStreet.ApiDocumentation.WebForms._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <!-- Contingut extra per el header -->
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <div>
        <div class="apisectionintroduction">
            <h2>
                Getting started!
            </h2>
            <p>
                FXstreet.com, the leading independent portal dedicated to the Foreign Exchange (Forex) market, was brought to life in January 2000 by its founder, Francesc Riverola, an economist from Barcelona (Catalunya), who moulded his original "home business" into a solid international company. Together with his partners, Míriam Pinatell and Sergi Fernández, their project has grown to become the trusted source of Forex for millions of users throughout the world.
            </p>
        </div>
        <div class="apisectiondescription">
            <h3>News</h3>
            <p>
                The 100% Forex News of FXstreet.com, the leading Forex website, can now be integrated in any information website or broker's currencies platform. It's a 24hr exclusive service that covers in real-time the most relevant movements of the most traded pairs, including majors, small dollars and major crosses.
            </p> 
            <p> 
                This news service gives a general technical radiography of the most traded pairs that FX traders can check for an update or summary of the market's last movements. Experts' analysis and bank's forecasts are also added to give another insight to the information. 
                The feed also includes stocks and commodities news (gold and oil) when important movements occur and have noteworthy  impacts on the currencies. Finally, some of the most important economic indicators are covered too, as PIB numbers, Central Banks interest rate decisions or Non-Farm Payrolls for example.
                This is a totally exclusive and original news feed . The news provided by other existing newswires are mainly macro-economic, very few of them are currencies-related. The journalists and traders team of FXstreet.com now offers up to 100 Forex news items per day, covering all the trading sessions 24 hours. 
            </p>
            <p>
                You will find this Forex news feed in our News section at <a href="http://www.fxstreet.com/news/">http://www.fxstreet.com/news/</a>
            </p>
            <p>
                Please visit our <a href="/news/">API</a > in order to use this feed.
            </p>
        </div>
        <div class="apisectiondescription">
            <h3>Economic Calendar</h3>
            <p>
                FXstreet owns macroeconomic data of the most revelant events and provides it to third parties with http requests. You can find some of this data on our economic calendar:
                <a href="http://www.fxstreet.com/fundamental/economic-calendar/">FXstreet Economic Calendar</a>
            </p>
            <p>
                In this <a href="http://xml.fxstreet.com/ecopro/data/documentation/index.aspx">document</a>, you can find how this access works and all the options the IT department can use.
            </p>
        </div>
        <div class="apisectiondescription">
            <h3>Contact</h3>
            <p>
                And remember! Do not hesitate to contact us if you have any question about our services at <strong><em>support@fxstreet.com</em></strong>
            </p>
        </div>
            
    </div>
</asp:Content>
<asp:Content ID="footercontent" ContentPlaceHolderID="FooterContent" runat="server">
    <!-- Contingut extra per el header -->
</asp:Content>