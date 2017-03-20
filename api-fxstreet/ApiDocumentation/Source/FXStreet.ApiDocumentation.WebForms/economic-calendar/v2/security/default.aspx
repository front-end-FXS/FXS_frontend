<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="/_masterpages/Site.master" Inherits="System.Web.UI.Page" %>
<asp:Content runat="server" ContentPlaceHolderID="MainContent">
    <div>        
        <div>
            <h1>
                Security
            </h1>
            <p>
                Api calls expects 3 parameters:
                <ul>
                    <li>k as your client key</li>
                    <li>t as the timestamp</li>
                    <li>s as the generated hash</li>                    
                </ul>
                All the calls must end with that keys:<br />
                &k={YOUR_CLIENT_KEY}&s={HASH}&t={TIMESTAMP}<br />
                k, s, t will be valid for 15 minutes.
            </p>            
            <h2>
                k
            </h2>
            <p>
                FXstreet will provide client's public key.
            </p>
            <h2>
                t
            </h2>
            <p>
                The current datetime in utc as "yyyyMMddHHmm". For example, 2012-02-15 17:14:33 should be formated ad 201202151714<br />                
            </p>
            <h2>
                s
            </h2>
            <p>
                FXstreet will provide client's private key (YOUR_CLIENT_PRIVATE_KEY). s will is a SHA1 hash string generated using that private key concatenated with t.<br />                                     
            </p>
            <p>
                <b>C# Sample:</b><br />
                <pre>                
    public string GenerateHash(System.DateTime dt, string input)
    {
        var hasher = System.Security.Cryptography.SHA1.Create();
        string res = string.Empty;

        byte[] data = hasher.ComputeHash(System.Text.Encoding.ASCII.GetBytes(string.Concat(input, dt.ToString("yyyyMMddHHmm"))));

        foreach (byte b in data)
        {
            res += string.Format("{0:x2}", b);
        }
        return res;
    }
            </pre>
            </p>
            <p>
                <b>Bash Sample:</b><br />
                <pre>                
    #!/bin/bash
    t=`date --utc +%Y%m%d%H%M`
    puk=YOUR_CLIENT_KEY
    prk=YOUR_CLIENT_PRIVATE_KEY
    s=`echo -n ${prk}${t} | openssl dgst -sha1 | awk '{print $2}'`
    
    echo "XML day request:"
    echo "  public key: "${puk}
    echo "  private key: "${prk}
    echo "  timestamp: "${t}
    echo "  sha1(private key + timestamp): "${s}
    echo ""
    echo
    "http://calendar.fxstreet.com/eventdate/?view=day&f=xml&k=${puk}&s=${s}&t=${t}"
            </pre>            
            </p>
            <p>
                <b>Doing TDD?</b>
                <ul>
                    <li>
                        YOUR_CLIENT_PRIVATE_KEY = "4504D22E7FEC4B0EA3549117C8EDEB"<br />
                        DateTime = (1975, 1, 1, 0, 0, 0) // yyyy, MM, dd, HH, mm, ss<br />
                        expectedhash = "fad07c53ec84a894d1f4ca0390edc4c2c3100e17" // HASH -> (clientkey concat DateTime.ToString(yyyyMMddHHmm))                      
                    </li>
                    <li>                     
                        YOUR_CLIENT_PRIVATE_KEY = "06DA43DD91584F82BF2EB9D7F5BAD7"<br />
                        DateTime = (2002, 2, 2, 4, 5, 10) // yyyy, MM, dd, HH, mm, ss<br />            
                        expectedhash = "0b6bbf5f16f0d4e4520625d418ac46c44f42f278" // HASH -> (clientkey concat DateTime.ToString(yyyyMMddHHmm)) 
                    </li>
                    <li>
                        YOUR_CLIENT_PRIVATE_KEY = "3E4E462F117A4C1D90D4386D6004B6"<br />
                        DateTime = (2015, 12, 5, 20, 17, 30) // yyyy, MM, dd, HH, mm, ss<br />                              
                        expectedhash = "ac896095c275e85e223a2b9df5d3324e354f05fe" // HASH -> (clientkey concat DateTime.ToString(yyyyMMddHHmm)) 
                    </li>
                    <li>
                        YOUR_CLIENT_PRIVATE_KEY = "06DA43DD91584F82BF2EB9D7F5BAD7"<br />  
                        DateTime = (2002, 2, 2, 4, 5, 10) // yyyy, MM, dd, HH, mm, ss<br />         
                        expectedhash = "0b6bbf5f16f0d4e4520625d418ac46c44f42f278" // HASH -> (clientkey concat dt.ToString(yyyyMMddHHmm)) 
                    </li>                    
                </ul>
            </p>
        </div>        
    </div>
</asp:Content>