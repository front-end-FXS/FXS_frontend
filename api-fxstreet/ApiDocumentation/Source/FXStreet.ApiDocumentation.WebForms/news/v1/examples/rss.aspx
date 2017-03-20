<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <!-- Contingut extra per el header -->
    <link href="/styles/prettify.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="/scripts/prettify.js"></script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <!-- Contingut de la pagina en sí -->
    

    <h2>RSS Specification</h2>
    <h3>Sample:</h3>
    <pre class="prettyprint linenums">
&lt;rss xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:fxstnewsns="http://www.fxstreet.com/syndicate/rss/namespaces/" version="2.0">
    &lt;channel>
        &lt;title>Forex News&lt;/title>
        &lt;description>
            FXstreet.com: Latest News. We deliver the lastest news in the forex market.
        &lt;/description>
        &lt;link>http://subscriptions.fxstreet.com/RSS/News.aspx&lt;/link>
        &lt;lastBuildDate>Fri, 30 Mar 2012 14:22:59 Z&lt;/lastBuildDate>
        &lt;pubDate>Fri, 30 Mar 2012 14:22:59 Z&lt;/pubDate>
        &lt;ttl>1800&lt;/ttl>
        &lt;atom:link href="http://subscriptions.fxstreet.com/RSS/News.aspx" rel="self"/>
        &lt;item>
        &lt;title>Forex: GBP/USD off highs, contained by 1.5980&lt;/title>
            &lt;description>
                &lt;![CDATA[
                FXstreet.com (Córdoba) - The Pound lost momentum after hitting a fresh yearly high
                of 1.0635 during the European session, trimming gains and sliding back below the
                1.0600 level after the New York opening. &lt;br />&lt;br />However, the pullback
                was contained by the 21-hour SMA at 1.5980, allowing the Cable to bounce back above 
                1.0600. At time of writing, GBP/USD is trading at the 1.6005 zone, up 0.3% on the 
                day.&lt;br />&lt;br />From a technical perspective, Valeria Bednarik, chief analyst 
                at FXstreet.com, says that the bias remains bullish and recent retracement seems just
                corrective, with 1.5970 as immediate support. "The 4 hours chart points for further 
                gains, supporting the short term perspective".&lt;br />&lt;br /> Bednarik locates 
                immediate supports at 1.5970, 1.5920 and 1.5875, while she sees resistances at 1.6035,
                1.6060 and 1.6100.
                ]]>
            &lt;/description>
            &lt;link>
                http://www.fxstreet.com/news/forex-news/article.aspx?storyid=96a9a4e6-6ac9-4f7f-9087-dfcc202b511a
            &lt;/link>
            &lt;guid isPermaLink="false">96a9a4e6-6ac9-4f7f-9087-dfcc202b511a&lt;/guid>
            &lt;pubDate>Fri, 30 Mar 2012 14:19:00 Z&lt;/pubDate>
            &lt;fxstnewsns:pair>GBP/USD&lt;/fxstnewsns:pair>
            &lt;fxstnewsns:provider>FXstreet.com&lt;/fxstnewsns:provider>
            &lt;fxstnewsns:market>Foreign Exchange&lt;/fxstnewsns:market>
            &lt;fxstnewsns:headline>0&lt;/fxstnewsns:headline>
            &lt;fxstnewsns:summary>
                &lt;![CDATA[
                The Pound lost momentum after hitting a fresh yearly high of 1.0635 during the 
                European session, trimming gains and sliding back below the 1.0600 level 
                after the New York opening. &lt;br />
                ]]>
            &lt;/fxstnewsns:summary>
            &lt;fxstnewsns:Charts>
                &lt;fxstnewsns:Chart url="null"/>
                &lt;fxstnewsns:Chart url="null"/>
                &lt;fxstnewsns:Chart url="null"/>
                &lt;fxstnewsns:Chart url="null"/>
            &lt;/fxstnewsns:Charts>
            &lt;fxstnewsns:TechAnalysis UpdatedAt="2012-03-30 14:15 GMT" open="0" close="0" high="0" low="0" bid="0" ask="0" pct="0">
                &lt;fxstnewsns:PivotPoints S1="1.5989" S2="1.5983" S3="1.5972" R1="1.6006" 
                R2="1.6017" R3="1.6023"/>
                &lt;fxstnewsns:TrendIndex Recommendation="Bullish" Strength="3"/>
                &lt;fxstnewsns:OBOSIndex Recommendation="Extremely Oversold"/>
            &lt;/fxstnewsns:TechAnalysis>
        &lt;/item>
    &lt;/channel>
&lt;/rss>
    </pre>
    <h3>Structure:</h3>
    <ul>
    <dl>
        <dt><span class="Node">Node</span> rss</dt>
        <dd>root element</dd>
        <ul>
        <dl>
            <dt><span class="Attribute">Attribute</span> xmlns:atom</dt>
            <dd>http://www.w3.org/2005/Atom</dd>
            <dt><span class="Attribute">Attribute</span> xmlns:fxstnewsns</dt>
            <dd>http://www.fxstreet.com/syndicate/rss/namespaces/</dd>
            <dt><span class="Attribute">Attribute</span> version</dt>
            <dd>2.0</dd>
            <dt><span class="Node">Node</span> channel</dt>
            <dd>The container for the feed itself</dd>
            <ul>
            <dl>
                <dt><span class="Node">Node</span> title</dt>
                <dd>This is the name for the feed.</dd>
                <dt><span class="Node">Node</span> description</dt>
                <dd>This is a sentence which describes the feed</dd>
                <dt><span class="Node">Node</span> link</dt>
                <dd>The URL for the webpage that contains information that directly relates to the feed</dd>
                <dt><span class="Node">Node</span> lastBuildDate</dt>
                <dd>The most recent date and time the content of the feed was modified</dd>
                <dt><span class="Node">Node</span> pubDate</dt>
                <dd>The date and time when the feed's content is meant to be published</dd>
                <dt><span class="Node">Node</span> ttl</dt>
                <dd>It stands for 'Time To Live'. It is the number of minutes that the feed is allowed to be cached by a server (other than the actual server the feed is posted on), before the feed needs to be refreshed.</dd>
                <dt><span class="Node">Node</span> atom:link</dt>
                <dd>The URL for the webpage that contains information that directly relates to the feed</dd>
                <ul>
                <dl>
                    <dt><span class="Attribute">Attribute</span> href</dt>
                    <dd>http://subscriptions.fxstreet.com/RSS/News.aspx</dd>
                    <dt><span class="Attribute">Attribute</span> rel</dt>
                    <dd>self</dd>
                </dl>
                </ul>
                <dt><span class="Node">Node</span> item</dt>
                <dd>Each feed contains at least one valid item entry</dd>
                <ul>
                <dl>
                    <dt><span class="Node">Node</span> title</dt>
                    <dd>The headline for the item's content</dd>
                    <dt><span class="Node">Node</span> description</dt>
                    <dd>A brief summary of the content that the item was created to represent</dd>
                    <dt><span class="Node">Node</span> link</dt>
                    <dd>This is the URL for the webpage (or a section) that contains the item's full content</dd>
                    <dt><span class="Node">Node</span> guid</dt>
                    <dd>It stands for 'Globally Unique Identifier'. It is an string that uniquely identifies the item</dd>
                    <ul>
                    <dl>
                        <dt><span class="Attribute">Attribute</span> isPermaLink</dt>
                        <dd>false</dd>
                    </dl>
                    </ul>
                    <dt><span class="Node">Node</span> pubDate</dt>
                    <dd>The date and time when the item is to be made available</dd>
                    <dt><span class="Node">Node</span> fxstnewsns:pair</dt>
                    <dd>when not null represents the pair related to the article</dd>
                    <dt><span class="Node">Node</span> fxstnewsns:provider</dt>
                    <dd>always “FXstreet.com”. You can safely ignore this <span class="Attribute">Attribute</span></dd>
                    <dt><span class="Node">Node</span> fxstnewsns:market</dt>
                    <dd>See the <a href="#marketTable">table below</a></dd>
                    <dt><span class="Node">Node</span> fxstnewsns:headline</dt>
                    <dd>0</dd>
                    <dt><span class="Node">Node</span> fxstnewsns:summary</dt>
                    <dd>It's a summary of the content. Can be null</dd>
                    <dt><span class="Node">Node</span> fxstnewsns:Charts</dt>
                    <dd>If it exists, contains 4 <span class="Node">Node</span>s chart</dd>
                    <ul>
                    <dl>
                        <dt><span class="Node">Node</span> fxstnewsns:Chart</dt>
                        <dd>Each individual one</dd>
                        <ul>
                        <dl>
                            <dt><span class="Attribute">Attribute</span> url</dt>
                            <dd>url of the .png graph at the moment pubdate. You can use this link into your site</dd>
                        </dl>
                        </ul>
                    </dl>
                    </ul>
                    <ul>
                    <dl>
                        <dt><span class="Node">Node</span> fxstnewsns:TechAnalysis</dt>
                        <dd>If it exists, contains the technical studies at the moment pubdate.</dd>
                        <ul>
                        <dl>
                            <dt><span class="Attribute">Attribute</span> UpdatedAt</dt>
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
                            <dd>ask price</dd>
                            <dt><span class="Attribute">Attribute</span> pct</dt>
                            <dd>% change</dd>
                            <dt><span class="Node">Node</span> fxstnewsns:PivotPoints</dt>
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
                            <dt><span class="Node">Node</span> fxstnewsns:TrendIndex</dt>
                            <dd>Trend index</dd>
                            <ul>
                            <dl>
                                <dt><span class="Attribute">Attribute</span> Recommendation</dt>
                                <dd>could be “Neutral”, “Bullish” or “Bearish”</dd>
                                <dt><span class="Attribute">Attribute</span> Strength</dt>
                                <dd>the strength of the recomendation. 0 in case of Neutral, 1 to 6 in case of Bullish (6 means more Bullish than one). -1 to -6 in case of Bearish (-6 means more Bearish than -1)</dd>
                            </dl>
                            </ul>
                            <dt><span class="Node">Node</span> fxstnewsns:OBOSIndex</dt>
                            <dd>Oberbought/Obersold index</dd>
                            <ul>
                            <dl>
                                <dt><span class="Attribute">Attribute</span> Recommendation</dt>
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
        </dl>
        </ul>  
    </dl>
    </ul>

    <h3>Attribute market</h3>
    <table border="1" id="marketTable">
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
