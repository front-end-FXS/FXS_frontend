<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="country.ascx" tagname="Enginy" tagprefix="country" %>
<%@ Register src="countryheader.ascx" tagname="Enginy" tagprefix="countryheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">    
    <countryheader:Enginy id="countryheader" runat="server" Culture="ko-kr"></countryheader:Enginy>
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
    <country:Enginy id="country" runat="server" Culture="ko-kr"></country:Enginy>
</asp:Content>