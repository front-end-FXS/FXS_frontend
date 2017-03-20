<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>                    
            <h2>Nodes</h2>            
            <p>                        
                <ul>
                    <li>OlsenScale changes to OlsenModel</li>
                    <li>Date changes to DateTime</li>
                    <li>In order to build Chart Url http://www.olsenscale.com/sc/smq/latest?data=smqimage&date=DATETIME&instrument=AUD_USD,EUR_USD,GBP_USD,NZD_USD,USD_CAD,USD_CHF,USD_JPY&width=400&height=175&caption=USD&days=3&showLabels=0&tz=GMT%2B0 </li>
                    <li>In order to build Radar Url http://www.olsenscale.com/sc/smq/latest?data=smqspider&date=DATETIME&legs=AUD_USD,EUR_USD,GBP_USD,NZD_USD,USD_CAD,USD_CHF,USD_JPY&center=USD&width=300&height=175&caption=USD&printValue=1&showGradient=0&strongLabels=1 </li>
                </ul>              
            </p>
            <h2>Parameters</h2>
            <p>
                <ul>
                    <li>id works as /eventdate/{id}/olsen</li>                    
                    <li>format works as <a href="/economic-calendar/v2/parameters/f.aspx">f</a></li>
                </ul>
            </p>
            <h2>How it works</h2>
            <p>
                <ul>
                    <li>                        
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/olsenscale.aspx?id={ID}&format={FORMAT}&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com/eventdate/{ID}/olsen/?f={FORMAT}&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                      
                    </li>                                        
                </ul>
            </p>  
            <h2>Samples</h2>
            <p>
                <ul>
                    <li>                        
                        old method: <br />
                        http://xml.fxstreet.com/ecopro/data/details/olsenscale.aspx?id=DE8076D3-21DE-46AB-A359-5110645B01B2&format=xml&key=ff969c0f-709e-4086-afb3-d2afe1e9665f <br />
                        new method: <br />
                        http://calendar.fxstreet.com//eventdate/DE8076D3-21DE-46AB-A359-5110645B01B2/olsen/?f=xml&k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}                        
                    </li>                                        
                </ul>
            </p>            
        </div>        
    </div>
</asp:Content>