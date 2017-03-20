<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h1>
                Introduction
            </h1>
            <p>
                Calendar's Vervison 2 (V2) have more features than Vevrison 1 (V1). If you are on V1, you should move to V2 as soon as possible. Below you will find how to switch from old calls to new ones
            </p>            
            <h1>
                Prerequisites
            </h1>
            <p>
                First of all, you are no longer working with IP authorization. Now you must have a private key and a publi key. In the following document we will refer it as PRIVATEKEY and PUBLICKEY for the client's private key and public key.                
            </p>
            <p>
                Please check <a href="/economic-calendar/v2/">the version 2 documentation</a> in order to learn more about security options.
            </p>
            <h1>
                How to migrate
            </h1>
            <p>
                <ul>
                    <li><a href="./pages/data.aspx">Data.aspx</a></li>
                    <li><a href="./pages/detail.aspx">Detail.aspx</a></li>
                    <li><a href="./pages/updates.aspx">Updates.aspx</a></li>
                    <li><a href="./pages/webinar.aspx">Webinar.aspx</a></li>
                    <li>Video.aspx no longer available</li>
                    <li><a href="./pages/relateds.aspx">Relateds.aspx</a></li>
                    <li><a href="./pages/news.aspx">News.aspx</a></li>
                    <li><a href="./pages/reports.aspx">Reports.aspx</a></li>
                    <li><a href="./pages/blogs.aspx">Blogs.aspx</a></li>
                    <li><a href="./pages/history.aspx">History.aspx</a></li>
                    <li>LongHistory.aspx is merged into <a href="./pages/history.aspx">History.aspx</a></li>
                    <li><a href="./pages/livecoverage.aspx">LiveCoverage.aspx</a></li>
                    <li><a href="./pages/olsenscale.aspx">OlsenScale.aspx</a></li>
                </ul>                
            </p> 
             <h1>
                Subscription client
            </h1>                  
            <p>
                Subscription client has a new version. Please check the <a href="/economic-calendar/v2/subscription-client/">version 2 documentation</a>.
            </p>     
        </div>        
    </div>
</asp:Content>