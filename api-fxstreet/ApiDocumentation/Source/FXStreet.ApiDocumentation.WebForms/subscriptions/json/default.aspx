<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <!-- Contingut extra per el header -->
        <link href="/styles/prettify.css" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="/scripts/prettify.js"></script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <!-- Contingut de la pagina en sí -->
    <h2>JSON Specification</h2>
    <h3>Sample:</h3>
<pre class="prettyprint linenums">
{"Id":"397eab9f-8579-4d01-bb33-ad5dcbd86640",
"PubDate":"\/Date(1394439925000)\/",
"Title":"EUR/GBP broke above 0.83 on pound weakness",
"Market":"Foreign Exchange","Provider":"FXStreet",
"Summary":"EUR/GBP broke above 0.83 resistance area and reached 0.8325 by the moment.",
"Content":"FXStreet (Moscow) - \u003cstrong\u003eEUR/GBP\u003c/strong\u003e broke above 0.83 resistance area and reached 0.8325 by the moment.\u003cbr /\u003e\t\u003cbr /\u003e\u003cstrong\u003e\u003cbr /\u003eConsolidation mode is OFF\u003c/strong\u003e\u003cbr /\u003e\u003cbr /\u003eAfter a several days of rising, EUR/GBP looked like already reached the upper limit around 0.83 resistance area, and given the absence of key reports from the EMU and UK for today, we could expect mild consolidation around the mentioned area. Nevertheless, the pair broke above 0.83 on barren calendar in the European open, and reached monthly high at 0.8325 by the moment. The move is rooted from the sudden pound weakness not explained by any fundamental reasons. Most probably, it’s the case of profit-taking by some institutional investor. The upside is limited by 0.8338, and the downside – by 0.8278 support level.\u003cbr /\u003e\u003cbr /\u003e\u003cstrong\u003eWhat are today’s key EUR/GBP levels?\u003c/strong\u003e\u003cbr /\u003e\u003cbr /\u003eToday\u0027s central pivot point can be found at 0.8290 with support below at 0.8278, 0.8260 and 0.8248, with resistance above at 0.8308, 0.8320, and 0.8338. Hourly Moving Averages are bullish, with the 200SMA at 0.8239 and the daily 20EMA bullish at 0.8249. Hourly RSI is neutral at 59.",
"Pair":"EUR/GBP",
"HasCharts":true,
"HasTechnicals":true,
"IsHeadline":false,
"Charts":["http://cdn.fxstreet.com/rssnews/2014/03/EURGBP-100825-1day.png","http://cdn.fxstreet.com/rssnews/2014/03/EURGBP-100825-1month.png","http://cdn.fxstreet.com/rssnews/2014/03/EURGBP-100825-3months.png","http://cdn.fxstreet.com/rssnews/2014/03/EURGBP-100825-1year.png"],
"TechAnalysis":{"UpdatedAt":"\/Date(1394442000000)\/","Open":0.8318,"Close":0.8322,"High":0.8323,"Low":0.8317,"Bid":0.83385,"Ask":0.834,"Pct":-0.0480653689017063,
				"PivotPoints":{"S1":0.83360000451405836,"S2":0.83320001761118567,"S3":0.83270003398259473,"R1":0.834499975045522,"R2":0.83499995867411292,"R3":0.8353999455769856},
				"TrendIndex":{"Recommandation":"Bullish","Strength":3},
				"OBOSIndex":{"Recommandation":"Extremely Overbought"}}}
</pre>
    <h3>Structure:</h3>
    <ul>
    <dl>
        <dt><span class="Node">Object</span> JSON</dt>
        <ul>
        <dl>
            <dl>
                <dt><span class="Attribute">Attribute</span> pair</dt>
                <dd>when not null represents the pair related to the article</dd>
                <dt><span class="Attribute">Attribute</span> id</dt>
                <dd>FXstreet's internal id. It's a global unique identifier</dd>
                <dt><span class="Attribute">Attribute</span> pubDate</dt>
                <dd>timestamp yyyy-MM-dd HH:mm (GMT+0)</dd>
                <dt><span class="Attribute">Attribute</span> provider</dt>
                <dd>always “FXstreet.com”. You can safely ignore this <span class="Attribute">Attribute</span></dd>
                <dt><span class="Node">Object</span> title</dt>
                <dd>the article's title</dd>
                <dt><span class="Node">Object</span> content</dt>
                <dd>It's a CDATA. The content of the article</dd>
                <dt><span class="Node">Object</span> summary</dt>
                <dd>It's a summary of the content. Can be null</dd>
                <dt><span class="Node">Object</span> charts</dt>
                <dd>If it exists, contains 4 <span class="Node">Object</span>s chart</dd>
                <ul>
                    <dt><span class="Node">Object</span> chart</dt>
                    <dd>Each individual one</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> url</dt>
                        <dd>url of the .png graph at the moment pubdate. You can use this link into your site</dd>
                    </dl>
                    </ul>
                </ul>
                <dt><span class="Node">Object</span> techAnalysis</dt>
                <dd>If it exists, contains the technical studies at the moment pubdate.</dd>
                <ul>
                <dl>
                    <dt><span class="Attribute">Attribute</span> updatedAt</dt>
                    <dd>the timestamp of the technical studies. yyyy-MM-dd HH:mm (GMT+0)</dd>
                    <dt><span class="Attribute">Attribute</span> open</dt>
                    <dd>open price</dd>
                    <dt><span class="Attribute">Attribute</span> close</dt>
                    <dd>close price</dd>
                    <dt><span class="Attribute">Attribute</span> high</dt>
                    <dd>high price</dd>
                    <dt><span class="Attribute">Attribute</span> low</dt>
                    <dd>low price</dd>
                    <dt><span class="Attribute">Attribute</span> bid</dt>
                    <dd>bid price</dd>
                    <dt><span class="Attribute">Attribute</span> ask</dt>
                    <dd>open ask</dd>
                    <dt><span class="Attribute">Attribute</span> percent</dt>
                    <dd>% change</dd>
                    <dt><span class="Node">Object</span> pivotPoints</dt>
                    <dd>pivot points support and resistances</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> S1</dt>
                        <dd>S1</dd>
                        <dt><span class="Attribute">Attribute</span> S2</dt>
                        <dd>S2</dd>
                        <dt><span class="Attribute">Attribute</span> S3</dt>
                        <dd>S3</dd>
                        <dt><span class="Attribute">Attribute</span> R1</dt>
                        <dd>R1</dd>
                        <dt><span class="Attribute">Attribute</span> R2</dt>
                        <dd>R2</dd>
                        <dt><span class="Attribute">Attribute</span> R3</dt>
                        <dd>R3</dd>
                    </dl>
                    </ul>
                    <dt><span class="Node">Object</span> trendIndex</dt>
                    <dd>Trend index</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> recommendation</dt>
                        <dd>could be “Neutral”, “Bullish” or “Bearish”</dd>
                        <dt><span class="Attribute">Attribute</span> strength</dt>
                        <dd>the strength of the recomendation. 0 in case of Neutral, 1 to 6 in case of Bullish (6 means more Bullish than one). -1 to -6 in case of Bearish (-6 means more Bearish than -1)</dd>
                    </dl>
                    </ul>
                    <dt><span class="Node">Object</span> OBOSindex</dt>
                    <dd>Oberbought/Obersold index</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> recommendation</dt>
                        <dd>could be “Neutral”, “Bullish” or “Bearish”</dd>
                    </dl>
                    </ul>
                </dl>
                </ul>
            </dl>
            </ul>
        </dl>
        </ul>  
    </dl>
    </ul>
    <h3>Attribute market</h3>
    <table border="1">
        <tr>
            <th>Language</th>
            <th>Market</th>
        </tr>
        <tr>
            <td rowspan="6">English</td>
            <td>Central Banks</td>
        </tr>
        <tr>
            <td>Foreign Exchange</td>
        </tr>
        <tr>
            <td>Forex Flash</td>
        </tr>
        <tr>
            <td>General</td>
        </tr>
        <tr>
            <td>Indicators</td>
        </tr>
        <tr>
            <td>Stocks, Oil & Metals</td>
        </tr>
        <tr>
            <td rowspan="3">Espa&ntilde;ol</td>
            <td>Bancos Centrales</td>
        </tr>
        <tr>
            <td>Indicadores</td>
        </tr>
        <tr>
            <td>Mercado Divisas</td>
        </tr>
        <tr>
            <td rowspan="6">Русский</td>
            <td>Forex Flash</td>
        </tr>
        <tr>
            <td>Акции, Нефть и металлы</td>
        </tr>
        <tr>
            <td>Иностранные Exchange</td>
        </tr>
        <tr>
            <td>Общие</td>
        </tr>
        <tr>
            <td>Показатели</td>
        </tr>
        <tr>
            <td>Центральные банки</td>
        </tr>
        <tr>
            <td rowspan="6">عربي</td>
            <td>Forex Flash</td>
        </tr>
        <tr>
            <td>الأسهم والنفط والمعادن</td>
        </tr>
        <tr>
            <td>البنوك المركزية</td>
        </tr>
        <tr>
            <td>الصرف الأجنبي</td>
        </tr>
        <tr>
            <td>العام</td>
        </tr>
        <tr>
            <td>المؤشرات</td>
        </tr>
        <tr>
            <td rowspan="6">中文</td>
            <td>Forex Flash</td>
        </tr>
        <tr>
            <td>国际市场新闻</td>
        </tr>
        <tr>
            <td>外汇</td>
        </tr>
        <tr>
            <td>央行动态</td>
        </tr>
        <tr>
            <td>经济指标</td>
        </tr>
        <tr>
            <td>综合</td>
        </tr>
    </table>
</asp:Content>
