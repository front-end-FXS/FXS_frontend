<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="main.ascx" tagname="Enginy" tagprefix="main" %>
<%@ Register src="mainheader.ascx" tagname="Enginy" tagprefix="mainheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">
    <mainheader:Enginy id="mainheader" runat="server" Culture="pl-pl"></mainheader:Enginy>      
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
    <main:Enginy id="main" runat="server" Culture="pl-pl"></main:Enginy>    
</asp:Content>