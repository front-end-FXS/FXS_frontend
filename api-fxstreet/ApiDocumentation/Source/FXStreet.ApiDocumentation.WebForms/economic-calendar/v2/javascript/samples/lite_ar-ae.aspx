<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="lite.ascx" tagname="Enginy" tagprefix="lite" %>
<%@ Register src="liteheader.ascx" tagname="Enginy" tagprefix="liteheader" %>
<asp:Content runat="server" ContentPlaceHolderID="HeadContent">
    <liteheader:Enginy id="liteheader" runat="server" Culture="ar-ae"></liteheader:Enginy>  
</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <lite:Enginy id="lite" runat="server" Culture="ar-ae"></lite:Enginy>    
</asp:Content>