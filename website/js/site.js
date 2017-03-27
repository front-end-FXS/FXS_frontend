var selectedAssets = [];
$(document).ready(function () {

    var data = {
        topics: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
            "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
            "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
            "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
            "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
            "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
            "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
            "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
            "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
            "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
            "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
            "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
            "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
            "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
            "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
            "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
            "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
            "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
            "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
            "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
            "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
            "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
            "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
        contributors: ["Abu Dhabi", "Abuja", "Accra", "Adamstown", "Addis Ababa", "Algiers", "Alofi", "Amman", "Amsterdam",
            "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asunción", "Athens",
            "Avarua", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre",
            "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogotá", "Brasília",
            "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura",
            "Cairo", "Canberra", "Caracas", "Castries", "Cayenne", "Charlotte Amalie", "Chisinau", "Cockburn Town",
            "Conakry", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Douglas",
            "Dublin", "Dushanbe", "Edinburgh of the Seven Seas", "El Aaiún", "Episkopi Cantonment", "Flying Fish Cove",
            "Freetown", "Funafuti", "Gaborone", "George Town", "Georgetown", "Georgetown", "Gibraltar", "King Edward Point",
            "Guatemala City", "Gustavia", "Hagåtña", "Hamilton", "Hanga Roa", "Hanoi", "Harare", "Hargeisa", "Havana",
            "Helsinki", "Honiara", "Islamabad", "Jakarta", "Jamestown", "Jerusalem", "Juba", "Kabul", "Kampala",
            "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur",
            "Kuwait City", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London", "Luanda", "Lusaka",
            "Luxembourg", "Madrid", "Majuro", "Malabo", "Malé", "Managua", "Manama", "Manila", "Maputo", "Marigot",
            "Maseru", "Mata-Utu", "Mbabane Lobamba", "Melekeok Ngerulmud", "Mexico City", "Minsk", "Mogadishu", "Monaco",
            "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "Nairobi", "Nassau", "Naypyidaw", "N'Djamena",
            "New Delhi", "Niamey", "Nicosia", "Nicosia", "Nouakchott", "Nouméa", "Nukuʻalofa", "Nuuk", "Oranjestad",
            "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palikir", "Panama City", "Papeete", "Paramaribo", "Paris",
            "Philipsburg", "Phnom Penh", "Plymouth Brades Estate", "Podgorica Cetinje", "Port Louis", "Port Moresby",
            "Port Vila", "Port-au-Prince", "Port of Spain", "Porto-Novo Cotonou", "Prague", "Praia", "Cape Town",
            "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavík", "Riga", "Riyadh", "Road Town", "Rome", "Roseau",
            "Saipan", "San José", "San Juan", "San Marino", "San Salvador", "Sana'a", "Santiago", "Santo Domingo",
            "São Tomé", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Sri Jayawardenepura Kotte", "St. George's",
            "St. Helier", "St. John's", "St. Peter Port", "St. Pierre", "Stanley", "Stepanakert", "Stockholm", "Sucre",
            "Sukhumi", "Suva", "Taipei", "Tallinn", "Tarawa Atoll", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran",
            "Thimphu", "Tirana", "Tiraspol", "Tokyo", "Tórshavn", "Tripoli", "Tskhinvali", "Tunis", "Ulan Bator", "Vaduz",
            "Valletta", "The Valley", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw",
            "Washington, D.C.", "Wellington", "West Island", "Willemstad", "Windhoek", "Yamoussoukro", "Yaoundé", "Yaren",
            "Yerevan", "Zagreb"]
    };

    var rates = {
        currencies: ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CAD", "AUD/USD", "USD/CHF",
            "NZD/USD", "GBP/JPY"],
        commodities: ["COPPER FUTURES", "GOLD FUTURES", "WTI CRUDE OIL LIGHT FUTURES", "BRENT CRUDE OIL FUTURES"],
        indexes: ["DB FTSE MIB FUTURES", "DB DOW JONES FUTURES", "DB NASDAQ 100 FUTURES", "DB S&P 500 FUTURES", "DB SMI FUTURES", "DB EURO STOXX 50 FUTURES", "DB DAX FUTURES", "DB NIKKEI 225 FUTURES"]
    };

    $('#q').typeahead({
        minLength: 1,
        order: "asc",
        group: true,
        groupMaxItem: 6,
        hint: true,
        dropdownFilter: false,
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            Topics: {
                data: data.topics,
                template: '<span class="fxs_typeaheadTxt">{{display}}<span class="fxs_typeaheadTxt">'
            },
            Contributors: {
                data: data.contributors,
                template: '<div class="fxs_avatar_circleImage_s"><img class="" src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"></div> <span class="fxs_typeaheadTxt">{{display}}</span>'
            }
        },
        debug: true
    });
    $('#r').typeahead({
        minLength: 1,
        order: "asc",
        group: true,
        groupMaxItem: 6,
        hint: true,
        dropdownFilter: false,
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            Currencies: {
                data: rates.currencies,
                template: '<span class="fxs_typeaheadTxt">{{display}}<span class="fxs_typeaheadTxt">'
            },
            Commodities: {
                data: rates.commodities,
                template: '<span class="fxs_typeaheadTxt">{{display}}<span class="fxs_typeaheadTxt">'
            },
            Indexes: {
                data: rates.indexes,
                template: '<span class="fxs_typeaheadTxt">{{display}}<span class="fxs_typeaheadTxt">'
            }
        },
        debug: true
    });

    // typeahead filter rates nad charts prototype

    var ratesFilter = {
        pairs: [ 
            "EUR/USD", "GBP/USD", "USD/JPY", "USD/CAD", "AUD/USD", "USD/CHF",
            "NZD/USD", "GBP/JPY"
        ]
    }
    $('.jq_addAssets').click(function () {
        //$('.jq_append').html("");
        $(selectedAssets).each(function (index, item) {
            var html = $('<div class="col-md-12"><a href="#" class="fxs_remove_item ">' + item + '</a></div>');
            $('.jq_append').append(html);
            AttachEvents(item, html);
            $('.js-typeahead-country_v1').val("");
        });
    });
     function AttachEvents(item, context) {
        $(".fxs_remove_item", context).click(function () {
            $(this).removeClass("clickedAsset");
            $(this).remove();
            selectedAssets.splice(selectedAssets.indexOf(item), 1);
        });
    }

    $('#f').typeahead({
        minLength: 1,
        order: "asc",
        group: false,
        groupMaxItem: 6,
        hint: true,
        dropdownFilter: false,
        emptyTemplate: 'No result for "{{query}}"',
        selector:{
            container: "fxs_typeaheadContainer",
            group: "fxs_typeaheadGroup",
            result: "typeahead-result",
            list: "fxs_typeaheadList fxs_fieldset fxs_scrollable_list",
            display: "typeahead-display",
            query: "fxs_typeaheadQuery"
        },
        /*callback: {
                    onLayoutBuiltBefore: function (node, query, result, resultHtmlList) {
                        if (resultHtmlList != null && resultHtmlList.children().length >= 1) {
                            resultHtmlList.children().each(function (index, item) {
                                if (selectedAssets.length > 0) {
                                    if ($.inArray(item.innerText, selectedAssets) !== -1) {
                                        $(this).addClass("clickedAsset");
                                    }
                                }
                            });
                        }
                    },
                    onClickBefore: function (node, a, item, event) {
                        event.preventDefault();
                        if ($.inArray(item.display, selectedAssets) !== -1) {
                            a.children().children().children('i').removeClass("fa-minus-circle");
                            a.children().children().children('i').addClass("fa-check");
                            selectedAssets.splice(selectedAssets.indexOf(item.display), 1);
                            var selectedRecords = $(".jq_append").find('.fxs_remove_item');
                            $(selectedRecords).each(function () {
                                if ($(this).innerText === item.display) {
                                    $(this).remove();
                                }
                            });
                        } else {
                            a.children().children().children('i').addClass("fa-check");
                            selectedAssets.push(item.display);
                        }
                    }
                },*/
        source:{
            pairs: {
                data: ratesFilter.pairs,
                template:'<li><div>{{display}}</div> <i class="fa fa-minus-circle" aria-hidden="true" title="delete item from list"></i></li>'
            }
        },
        debug: true
    });


    
    // Layout - Menu 

    var menuLeft = document.getElementById('cbp-spmenu-s1'),
        menuRight = document.getElementById('cbp-spmenu-s2'),
        itemsTimezone = document.getElementById('cbp-spmenu-s4'), // add
        listView = document.getElementById('cbp-spmenu-s3'),
        showLeftPush = document.getElementById('showLeftPush'),
        showRightPush = document.getElementById('showRightPush'),
        showTimezoneClock = document.getElementById('showTimezoneClock'), // add
        close_timezone_sidebar = document.getElementById('close_timezone_sidebar'), // add
        showLeft = document.getElementById('showLeft'),
        body = document.body;

    showLeftPush.onclick = function () {
        $(this).toggleClass('active');
        $(body).toggleClass('cbp-spmenu-push-toright');
        $(menuLeft).toggleClass('cbp-spmenu-open');
        $(body).removeClass('fxs_push_timezone'); //add 
        $('.fxs_listView').removeClass('cbp-spmenu-open');
        $('.fxs_toggleList').removeClass('active');
        disableOther('showLeftPush');
    };

    showRightPush.onclick = function () {
        $(this).toggleClass('active');
        $(body).toggleClass('cbp-spmenu-push-toleft');
        $(menuRight).toggleClass('cbp-spmenu-open');
        $(body).removeClass('fxs_push_timezone'); // add
        $('.fxs_listView').removeClass('cbp-spmenu-open');
        $('.fxs_timezone_items').removeClass('fxs_show_timezoneHours');
        $('.fxs_toggleList').removeClass('active');
        disableOther('showRightPush');
    };

    // display timezone sidebar
    showTimezoneClock.onclick = function () {
        $(this).toggleClass('active');
        $(body).toggleClass('fxs_push_timezone');
        $(itemsTimezone).toggleClass('fxs_show_timezoneHours');
    };

    // close all, timezone and sidebar
    close_timezone_sidebar.onclick = function(){
        $(showTimezoneClock).removeClass('active');
        $(body).removeClass('fxs_push_timezone');
        $(itemsTimezone).removeClass('fxs_show_timezoneHours');
        //$(body).removeClass('fxs_push_timezone');
        //disableOther('close_timezone_sidebar');
    }

    showLeft.onclick = function () {
        $(this).toggleClass('active');
        $(listView).toggleClass('cbp-spmenu-open');
        disableOther('showLeft');
    };
    function disableOther(button) {
        if (button !== 'showLeftPush') {
            $(showLeftPush).toggleClass('disabled');
        }
        if (button !== 'showRightPush') {
            $(showRightPush).toggleClass('disabled');
        }
        if (button !== 'showLeft') {
            $(showLeft).toggleClass('disabled');
        }
    }

    ///////////////////////////////////////////
    ////////// Buttons active state //////////
    /////////////////////////////////////////

    ////////// Estados del list filter //////////
    // METIDO A SACO para que funcione el trigger del filtro
    //$('.fxs_btn_filter').click(function(evt) {
        //$(this).closest('.fxs_filter').toggleClass("active");
    //}); 

    // ESTO ESTÁ METIDO MÁS A SACO AÚN: DESACTIVAR EL TRIGGER AL CLICKAR FUERA
    $('.fxs_dismissQuery').click(function() {
        $('.fxs_filter').removeClass("active");
        $('.fxs_typeaheadContainer').removeClass("result");
        $('.fxs_typeaheadContainer').removeClass("hint");
        $('.fxs_typeaheadContainer').removeClass("backdrop");
        $('.fxs_queryResults').removeClass("fxs_selectedQuery");
    });

    // ESTO YA ES DE PENA PERO EJEMPLIFICA BIEN: ACTIVAR LA CLASE DEL FILTRO CON QUERY SELECCIONADA
    $('.fxs_content_subnav').click(function() {
        $('.fxs_queryResults').addClass("fxs_selectedQuery");
    });

    //////////////// Toggle timezone class to show menu (metido a saco) //////////////////
    $('.fxs_timezone_btn').click(function () {
        $('.fxs_timezone_items').addClass('fxs_show_timezoneHours');
    });

    $('[data-toggle="fxs_timezone_items"]').click(function () {         
        $('.fxs_timezone_items').removeClass('fxs_show_timezoneHours');
    });

    //////////////// toggle timezone nabvar button //////////////////

    $('.fxs_timezone_btn_navbar').on('click', function(){
        $(body).addClass('cbp-spmenu-push-toleft');
        //$('.fxs_timezone_items').toggleClass('fxs_show_timezoneHours');
    });


    // USER ZONE

    // user logout
    $('.fxs_logout_user').click(function () {         
        $('.fxs_user_logged').removeClass('fxs_show_user_logged'); // hide right column
        $('.fxs_show_usermenu').removeClass('fxs_show_user_icon_logged') // change icon color
    });

    // user preload button

    $(".fxs_login_btn").on("click", startLoading); // call startLoading function

    var timer;
    // display preload and after certain time display right column with user settings 
    function startLoading(){
      $(".fxs_custom_site_elements_preload").css('visibility', 'visible');
      timer = setTimeout(function(){
          $('.fxs_user_logged').addClass('fxs_show_user_logged');  
          $('.fxs_show_usermenu').addClass('fxs_show_user_icon_logged');
          $(".fxs_custom_site_elements_preload").css('visibility', 'hidden');
      }, 2000);
    }

    // prototype show and hide preload

     //hide
     $('.fxs_simulate_preload').hide();
     // hide preload and show widget
     $('.fxs_preload_modules').delay(10000).hide(0); 
     $('.fxs_simulate_preload').delay(10100).show(0); 


    // hide and show listview left column in responive mode //

    /*

    this piece of code is only necesary in the next files:

    rates and charts
    news
    analysis
    live video
    education
    find a broker

    */
    if ( $('#idTestBtnFollow').hasClass('active') ){
        $('#idTestMsgOk').removeClass('fxs_hideElements');
    }

    $('.fxs_listView_item').click(function(){
        var bodyHasParentSection = $('body').hasClass('fxs_isParent_section');

        // on the first list element click we destroy the fucking class 'fxs_isParent_section' 
        if(bodyHasParentSection){
            $('body').removeClass('fxs_isParent_section');
        } 

        // copy the same properties of event function "showLeftPush.onclick = function ()" line:129   
        $(this).toggleClass('active');
        $(menuLeft).toggleClass('cbp-spmenu-open');
        $('.fxs_listView').removeClass('cbp-spmenu-open');
        $('.fxs_toggleList').removeClass('active');
        disableOther('showLeftPush');
    });

    /////////////////////// CHAPUZON /////////////////////////////////

    // SEARCH CLOSE BUTON simulate focus in and out
    /*$('.fxs_typeheadContainer_custom').focusin(function(){
        $('.fxs_dismissQuery').removeClass('fxs_dismissQuery_disabled');
    })

    $('.fxs_queryResults').on('click', function(){
        $('.fxs_dismissQuery').addClass('fxs_dismissQuery_disabled');
    })*/

    // FILTER CLOSE BUTTON simulate focus in and focus out
    $('.fxs_typeheadContainer_custom').focusin(function(){
        $('.fxs_rates_addPair').removeClass('fxs_dismissQuery_disabled');
    })

    $('.fxs_queryResults').on('click', function(){
        $('.fxs_rates_addPair').addClass('fxs_dismissQuery_disabled');
    })

      // optimization images load time


    $('.sticky').fixTo('.sticky-holder',{
        top: 130
    });

    //$('.sticky').fixTo('.sticky-holder');
    // sticky
    // disable when sidebar is active
    // $('#showRightPush').on('click',function(){
    //     $(".pinned" ).toggle();
    // })
    // $(".pinned").pin({
    //     containerSelector: ".container", minWidth: 940, padding: {top: 0, bottom: 10}
    // })

});

// algolia advanced search

'use strict';
/* global instantsearch */

var search = instantsearch({
    appId: '50DEV6P9K0',
    apiKey: '3805ad29c0e7ea0077d1acab07993f62',
    indexName: 'FxsIndexQa',
    urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
      container: '#q',
      placeholder: 'Search a product'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
      container: '#stats'
  })
);

search.on('render', function () {
    $('.product-picture img').addClass('transparent');
    $('.product-picture img').one('load', function () {
        $(this).removeClass('transparent');
    }).each(function () {
        if (this.complete) $(this).load();
    });
});

var hitTemplate =
'<div class="fxs_entryFeatured">' +
    '<article class="fxs_clearfix">' +
        '<div class="fxs_squareImage">' +
            '<a href="/">' +
                '<img src="{{ImageUrl}}" />' +
            '</a>' +
        '</div>' +
        '<div class="fxs_floatingMedia_textBody">' +
            '<h4 class="fxs_headline_tiny">' +
                '<a href="{{FullUrl}}">{{{_highlightResult.Title.value}}}</a>' +
            '</h4>' +
            '<address class="fxs_entry_metaInfo">' +
                '<span class="fxs_article_author">' +
                '<a href="{{AuthorUrl}}">{{_highlightResult.AuthorName.value}}</a>'+
                '</span>{{#PublicationTime}} | <time pubdate="" datetime="{{PublicationTime}}">{{PublicationTime}}</time>{{/PublicationTime}}' +
            '</address>' +
            '<span class="fxs_label fxs_label_muted">{{Category}}</span>' +
        '</div>' +
    '</article>' +
'</div>';

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

var menuTemplate =
  '<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><i class="fa fa-angle-right"></i> {{name}}</span class="facet-name"></a>';

var facetTemplateCheckbox =
  '<a href="javascript:void(0);" class="facet-item">' +
    '<input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}' +
    '<span class="facet-count">({{count}})</span>' +
  '</a>';

var facetTemplateColors =
  '<a href="javascript:void(0);" data-facet-value="{{name}}" class="facet-color {{#isRefined}}checked{{/isRefined}}"></a>';

//search.addWidget(
//  instantsearch.widgets.infiniteHits({
//      container: '#hits',
//      templates: {
//          empty: noResultsTemplate,
//          item: hitTemplate
//      },
//      hitsPerPage: 3
//  })
//);


search.addWidget(
  instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 20,
      templates: {
          empty: noResultsTemplate,
          item: hitTemplate
      },
      transformData: function (hit) {
          hit.stars = [];
          hit.Publication = getPublicationDate(hit.Publication);
          for (var i = 1; i <= 5; ++i) {
              hit.stars.push(i <= hit.rating);
          }
          return hit;
      }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
      container: '#pagination',
      cssClasses: {
          active: 'active'
      },
      labels: {
          previous: '<span><i class="fa fa-angle-left fa-2x"></i> Previous page</span>',
          next: '<span>Next page  <i class="fa fa-angle-right fa-2x"></i></span>'
      },
      showFirstLast: false
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#filter-categories',
      attributeName: 'Category',
      operator: 'or',
      limit: 10,
      templates: {
          item: facetTemplateCheckbox,
          header: '<h3 class="fxs_subtitle">Categories</h3>'
      },
      collapsible: true
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#filter-tags',
      attributeName: 'Tags',
      operator: 'or',
      limit: 10,
      searchForFacetValues: {
          placeholder: 'Search for tags',
          templates: {
              noResults: '<div class="sffv_no-results">No matching tags.</div>',
          },
      },
      templates: {
          item: facetTemplateCheckbox,
          header: '<h3 class="fxs_subtitle">Tags</h3>'
      },
      collapsible: true
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#filter-authors',
      attributeName: 'AuthorName',
      operator: 'or',
      limit: 10,
      searchForFacetValues: {
          placeholder: 'Search for authors',
          templates: {
              noResults: '<div class="sffv_no-results">No matching authors.</div>',
          },
      },
      templates: {
          item: facetTemplateCheckbox,
          header: '<h3 class="fxs_subtitle">Authors</h3>'
      },
      collapsible: true
  })
);

//search.addWidget(
//  instantsearch.widgets.rangeSlider({
//      container: '#dates',
//      attributeName: 'Publication',
//      templates: {
//          header: '<div class="facet-title">Publication</div class="facet-title">'
//      },
//      tooltips: {
//          format: getPublicationDate
//      },
//      pips: false,
//      collapsible: true
//  })
//);

function getPublicationDate(rawValue) {
    var offset = (((rawValue / 60) / 60) / 24);
    var date = new Date("1970-01-01");
    var utcoffset = parseInt(date.getUTCOffset()) / 100;
    date = date.addDays(offset).addHours(-utcoffset);
    return date.toString("MMM dd hh:mm") + " GMT";
};
//search.addWidget(
//  instantsearch.widgets.priceRanges({
//    container: '#dates',
//    attributeName: 'Publication',
//    cssClasses: {
//      list: 'nav nav-list',
//      count: 'badge pull-right',
//      active: 'active'
//    },
//    templates: {
//      header: '<div class="facet-title">Prices</div class="facet-title">'
//    }
//  })
//);

//search.addWidget(
//  instantsearch.widgets.sortBySelector({
//    container: '#sort-by-selector',
//    indices: [
//      { name: 'test_post', label: 'Publication' }
//    ],
//    label:'sort by'
//  })
//);

search.addWidget(
  instantsearch.widgets.clearAll({
      container: '#clear-all',
      templates: {
          link: '<i class="fa fa-eraser"></i> Clear all filters'
      },
      cssClasses: {
          root: 'btn btn-block btn-default'
      },
      autoHideContainer: true
  })
);

search.start();