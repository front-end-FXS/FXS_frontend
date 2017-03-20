<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>

<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h2>
                Market Timeline Spanish CET timezone
            </h2>
            <p>
                
                <div id="your-id-here" ></div>
            </p>           
            <h2>
                Source code
            </h2>          
            <p>
               
                <pre>
                    <code class="dataexample0code">
<textarea rows="15" cols="100">
&lt;html&gt;
    &lt;head&gt;                 
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="http://calendar.fxstreet.com/scripts/market-timeline/" &gt;&lt;/script&gt;
		&lt;script type="text/javascript"&gt;
        fxstreet.marketTimeline({
            id: "your-id-here", //container ID
            markets: {
                sydney: { disabled: false },  // display sydney market
                london: { disabled: false },  // display London market in black
                tokyo: { disabled: false },   // display Tokyo market
                newyork: { disabled: false }, //display New York market
                abudhabi: { disabled: false }, //display Abu Dhabi market
                singapore: { disabled: false }, //display Singapore market
                hongkong: { disabled: false" } //display Hong Kong market
            },
            culture: "es-ES", // diplay culture
            timezone: "Central+European+Standard+Time"  // your timezone
        });
        &lt;/script&gt;	
    &lt;/body&gt;
&lt;/html&gt;
</textarea> 
                    </code>
                </pre>
            </p>  
    </div>
    
    <script type="text/javascript" src="http://calendar.fxstreet.com/scripts/market-timeline/"></script>
    <script type="text/javascript">
        fxstreet.marketTimeline({
            id: "your-id-here", //container ID
            markets: {
                sydney: { disabled: false
                },  // display sydney market
                london: { disabled: false
                },  // display London market in black
                tokyo: { disabled: false
                },   // display Tokyo market
                newyork: { disabled: false
                }, //display New York market
                abudhabi: { disabled: false
                }, //display Abu Dhabi market
                singapore: { disabled: false
                }, //display Singapore market
                hongkong: { disabled: false
                } //display Hong Kong market
            },
            culture: "es-ES", // diplay culture
            timezone: "Central+European+Standard+Time"  // your timezone
        });

    </script>
</asp:Content>