<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>New changes to NewsModel</li>
                    <li>IdNoticia changes to Id</li>            
                    <li>Title</li>
                    <li>Provider</li>
                    <li>Date changes to DateTime</li>
                    <li>Content must use calendar.fxstreet.com/news/Id (see samples below)</li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}/news</li>
                    <li>timezoneoffset no longer available</li>
                    <li>timezone works as <a href="/economic-calendar/v2/parameters/timezone.aspx">timezone</a></li>
                    <li>culture works as <a href="/economic-calendar/v2/parameters/culture.aspx">culture</a></li>
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>                                                                                              
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>         
                        news related to a eventdate<br />
                        http://xml.fxstreet.com/ecopro/data/details/news.aspx?id={ID}&format={FORMAT}&timezone={TIMEZONE}&culture={CULTURE}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f                                       
                        changes to <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/news/?f={FORMAT}&timezone={TIMEZONE}&culture={CULTURE}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>  
                    <li>     
                        news content<br />                            
                        http://calendar.fxstreet.com/news/IDNEW/?f=FORMAT&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>                   
                </ul>
            </p>   
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>                        
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/news.aspx?id=fcf3e53e-c06f-4fe9-aead-c1ed441df8b1&format=xml&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/fcf3e53e-c06f-4fe9-aead-c1ed441df8b1/?f=xml&k=YOUR_CLIENT_KEY&s=HASH&t=TIMESTAMP <br />                    
                        http://calendar.fxstreet.com/news/52793437-e627-49dd-a285-7d633e18783f/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}
                    </li>                    
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>