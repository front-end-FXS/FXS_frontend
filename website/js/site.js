$(document).ready(function () {

    ///////////////////////////////////////////
    /////////////// TYPE AHEAD ///////////////
    /////////////////////////////////////////

    // DATOS METIDOS A SACO!!!!

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

    var ratesFilter = {
        pairs: ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CAD", "AUD/USD", "USD/CHF",
            "NZD/USD", "GBP/JPY"]
    }

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

    $('#f').typeahead({
        minLength: 1,
        order: "asc",
        group: true,
        groupMaxItem: 6,
        hint: true,
        dropdownFilter: false,
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            pairs: {
                data: ratesFilter.pairs,
                template: '<span class="fxs_typeaheadTxt">{{display}}<span class="fxs_typeaheadTxt">'
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
        body = document.body

    showLeftPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toright');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
        $(body).removeClass('fxs_push_timezone'); //add 
        $('.fxs_listView').removeClass('cbp-spmenu-open');
        $('.fxs_toggleList').removeClass('active');
        disableOther('showLeftPush');
    };

    showRightPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toleft');
        classie.toggle(menuRight, 'cbp-spmenu-open');
        $(body).removeClass('fxs_push_timezone'); // add
        $('.fxs_listView').removeClass('cbp-spmenu-open');
        $('.fxs_timezone_items').removeClass('fxs_show_timezoneHours');
        $('.fxs_toggleList').removeClass('active');
        disableOther('showRightPush');
    };

    // display timezone sidebar
    showTimezoneClock.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'fxs_push_timezone');
        classie.toggle(itemsTimezone, 'fxs_show_timezoneHours');
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
        classie.toggle(this, 'active');
        classie.toggle(listView, 'cbp-spmenu-open');
        disableOther('showLeft');
    };
    function disableOther(button) {
        if (button !== 'showLeftPush') {
            classie.toggle(showLeftPush, 'disabled');
        }
        if (button !== 'showRightPush') {
            classie.toggle(showRightPush, 'disabled');
        }
        if (button !== 'showLeft') {
            classie.toggle(showLeft, 'disabled');
        }
    }

    ///////////////////////////////////////////
    ////////// Buttons active state //////////
    /////////////////////////////////////////

    ////////// Estados del list filter //////////
    // METIDO A SACO para que funcione el trigger del filtro
    $('.fxs_btn_filter').click(function(evt) {
        $(this).closest('.fxs_filter').toggleClass("active");
    }); 

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

    /*$('.fxs_timezone_btn_navbar').on('click', function(){
        $(body).addClass('cbp-spmenu-push-toleft');
        //$('.fxs_timezone_items').toggleClass('fxs_show_timezoneHours');
    });*/


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

    $('.fxs_listView_item').click(function(){
        var bodyHasParentSection = $('body').hasClass('fxs_isParent_section');

        // on the first list element click we destroy the fucking class 'fxs_isParent_section' 
        if(bodyHasParentSection){
            $('body').removeClass('fxs_isParent_section');
        } 

        // copy the same properties of event function "showLeftPush.onclick = function ()" line:129   
        classie.toggle(this, 'active');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
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

    $('.sticky').fixTo('.sticky-holder',{
        top: 130
    });

    //$('.sticky').fixTo('.sticky-holder');
    // sticky
    // disable when sidebar is active
    /*$('#showRightPush').on('click',function(){
        $(".pinned" ).toggle();
    })
    $(".pinned").pin({
        containerSelector: ".container", minWidth: 940, padding: {top: 0, bottom: 10}
    })*/

});