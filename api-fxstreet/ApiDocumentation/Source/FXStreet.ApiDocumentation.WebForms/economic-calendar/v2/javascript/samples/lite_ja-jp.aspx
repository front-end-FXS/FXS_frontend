<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="lite.ascx" tagname="Enginy" tagprefix="lite" %>
<%@ Register src="liteheader.ascx" tagname="Enginy" tagprefix="liteheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">
    <liteheader:Enginy id="liteheader" runat="server" Culture="ja-jp"></liteheader:Enginy>  
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
    <lite:Enginy id="lite" runat="server" Culture="ja-jp"></lite:Enginy>    
</asp:Content>