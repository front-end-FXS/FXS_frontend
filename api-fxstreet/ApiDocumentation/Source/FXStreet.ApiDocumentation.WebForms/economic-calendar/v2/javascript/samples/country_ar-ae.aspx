<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="country.ascx" tagname="Enginy" tagprefix="country" %>
<%@ Register src="countryheader.ascx" tagname="Enginy" tagprefix="countryheader" %>
<asp:Content runat="server" ContentPlaceHolderID="HeadContent">    
    <countryheader:Enginy id="countryheader" runat="server" Culture="ar-ae"></countryheader:Enginy>
</asp:Content>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <country:Enginy id="country" runat="server" Culture="ar-ae"></country:Enginy>
</asp:Content>