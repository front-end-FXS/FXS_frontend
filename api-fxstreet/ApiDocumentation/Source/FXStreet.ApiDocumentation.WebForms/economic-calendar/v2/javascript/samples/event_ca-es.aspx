<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="event.ascx" tagname="Enginy" tagprefix="event" %>
<%@ Register src="eventheader.ascx" tagname="Enginy" tagprefix="eventheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">
    <eventheader:Enginy id="eventheader" runat="server" Culture="ca-es"></eventheader:Enginy>    
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
    <event:Enginy id="event" runat="server" Culture="ca-es"></event:Enginy>    
</asp:Content>