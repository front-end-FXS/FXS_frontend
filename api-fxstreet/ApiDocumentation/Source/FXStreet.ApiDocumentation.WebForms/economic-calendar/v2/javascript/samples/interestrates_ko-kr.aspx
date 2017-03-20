<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<%@ Register src="interestrates.ascx" tagname="Enginy" tagprefix="interestrates" %>
<%@ Register src="interestratesheader.ascx" tagname="Enginy" tagprefix="interestratesheader" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="HeadContent">
    <interestratesheader:Enginy id="interestratesheader" runat="server" Culture="en-us"></interestratesheader:Enginy>  
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">   
    <interestrates:Enginy id="interestrates" runat="server" Culture="ko-kr"></interestrates:Enginy>        
</asp:Content>