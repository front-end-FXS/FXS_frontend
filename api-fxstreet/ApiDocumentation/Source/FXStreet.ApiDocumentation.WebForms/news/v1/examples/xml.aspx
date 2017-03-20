<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <!-- Contingut extra per el header -->
        <link href="/styles/prettify.css" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="/scripts/prettify.js"></script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <!-- Contingut de la pagina en sí -->
    <h2>XML Specification</h2>
    <h3>Sample:</h3>
<pre class="prettyprint linenums">
&lt;xml>
    &lt;article pair="" id="c5b8bb87-7c7a-495a-8cff-1dedce253196" pubdate="2009-10-23 07:07 GMT" provider="FXstreet.com" market="Forex-News">
        &lt;title>
            USD at key support areas, allow for profit-taking - Commerzbank
        &lt;/title>
        &lt;content>&lt;![CDATA[
            FXstreet.com (Barcelona) - The Dollar has declined further, across trhe board on improved risk appetite seen during Asian session,
             reaching multi-month lows with its major rivals, Karen Jones, technical analyst at Commerzbank warns about profit-taking reactions.
              &lt;br />&lt;br />Jones observes the Dollar approaching important levels against Swiss Franc, Pound and Yen, which might trigger
               some near-term reversals: "We have USD/CHF approaching 1.00, GBP/USD approaching 1.6745 and USD/JPY very close to its initial
                target of 91.75 - we would allow for some near term profit taking in the US dollar."]]
        &lt;/content>
        &lt;summary>
            The Dollar has declined further, across trhe board on improved risk appetite seen during Asian session, reaching multi-month lows
             with its major rivals, Karen Jones, technical analyst at Commerzbank warns about profit-taking reactions.&lt;br />
        &lt;/summary>
    &lt;/article>
    &lt;article pair="USD/JPY" id="cc5b60fe-f33e-4083-9c3e-b0d9419f386a" pubdate="2009-10-23 06:57 GMT" provider="FXstreet.com" market="Forex-News">
        &lt;title>
            Forex: USD/JPY: The Dollar advances to 91.90 fresh 10-week high
        &lt;/title>
        &lt;content>&lt;![CDATA[
            FXstreet.com (Barcelona) - The Dollar continues crawling higher on early European trade, and, after bouncing at 91.50, the pair
             broke above 91.70 to hit a fresh 10-week high at 91.90.&lt;br />&lt;br />If the pair consolidates above 91.70, next resistance
              levels lie at 92.00/15, and above here, 92.55 (Sept 21 high) and 92.90 (50% of Aug-Oct fall).&lt;br />&lt;br />EUR/JPY
               continues its rally from early October, as the pair broke above 137.40 during Asian session to hit a month high at 137.85,
                right at Aug 13 high, which is being tested at the moment. Above here, next resistances are 138.10 and 138.70.
                 On the downside, support levels are 137.00/10 and 136.22.]]
        &lt;/content>
        &lt;summary>
            The Dollar continues crawling higher on early European trade, and, after bouncing at 91.50, the pair broke above 91.70 to hit
             a fresh 10-week high at 91.90.
        &lt;/summary>
        &lt;Charts>
            &lt;Chart url="null"/>
            &lt;Chart url="null"/>
            &lt;Chart url="null"/>
            &lt;Chart url="null"/>
        &lt;/Charts>
        &lt;TechAnalisis UpdatedAt="2009-10-23 06:35 GMT" open="0" close="0" high="0" low="0" bid="0" ask="0" pct="0">
            &lt;PivotPoints S1="91.2813" S2="91.5106" S3="91.7400" R1="91.9800" R2="92.2100" R3="92.4399"/>
            &lt;TrendIndex Recommendation="Bullish" Strength="3"/>
            &lt;OBOSIndex Recommendation="Neutral"/>
        &lt;/TechAnalisis>
    &lt;/article>
&lt;/xml>
</pre>
    <h3>Structure:</h3>
    <ul>
    <dl>
        <dt><span class="Node">Node</span> xml</dt>
        <dd>root element</dd>
        <ul>
        <dl>
            <dt><span class="Node">Node</span> article</dt>
            <dd>represents a story</dd>
            <ul>
            <dl>
                <dt><span class="Attribute">Attribute</span> pair</dt>
                <dd>when not null represents the pair related to the article</dd>
                <dt><span class="Attribute">Attribute</span> id</dt>
                <dd>FXstreet's internal id. It's a global unique identifier</dd>
                <dt><span class="Attribute">Attribute</span> pubDate</dt>
                <dd>timestamp yyyy-MM-dd HH:mm (GMT+0)</dd>
                <dt><span class="Attribute">Attribute</span> provider</dt>
                <dd>always “FXstreet.com”. You can safely ignore this <span class="Attribute">Attribute</span></dd>
                <dt><span class="Node">Node</span> title</dt>
                <dd>the article's title</dd>
                <dt><span class="Node">Node</span> content</dt>
                <dd>It's a CDATA. The content of the article</dd>
                <dt><span class="Node">Node</span> summary</dt>
                <dd>It's a summary of the content. Can be null</dd>
                <dt><span class="Node">Node</span> charts</dt>
                <dd>If it exists, contains 4 <span class="Node">Node</span>s chart</dd>
                <ul>
                    <dt><span class="Node">Node</span> chart</dt>
                    <dd>Each individual one</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> url</dt>
                        <dd>url of the .png graph at the moment pubdate. You can use this link into your site</dd>
                    </dl>
                    </ul>
                </ul>
                <dt><span class="Node">Node</span> techAnalysis</dt>
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
                    <dt><span class="Node">Node</span> pivotPoints</dt>
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
                    <dt><span class="Node">Node</span> trendIndex</dt>
                    <dd>Trend index</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> recommendation</dt>
                        <dd>could be “Neutral”, “Bullish” or “Bearish”</dd>
                        <dt><span class="Attribute">Attribute</span> strength</dt>
                        <dd>the strength of the recomendation. 0 in case of Neutral, 1 to 6 in case of Bullish (6 means more Bullish than one). -1 to -6 in case of Bearish (-6 means more Bearish than -1)</dd>
                    </dl>
                    </ul>
                    <dt><span class="Node">Node</span> OBOSindex</dt>
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
