'use strict';
/* global instantsearch */

var search = instantsearch({
    appId: 'J5FJN741DX',
    apiKey: '467d0ca4af64e6bb2b20d0e604bac5aa',
    indexName: 'test_post',
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

search.on('render', function() {
  $('.product-picture img').addClass('transparent');
  $('.product-picture img').one('load', function() {
      $(this).removeClass('transparent');
  }).each(function() {
      if(this.complete) $(this).load();
  });
});

var hitTemplate =
  '<article class="hit">' +
      '<div class="product-picture-wrapper">' +
        '<div class="product-picture"><img src="{{ImageUrl}}" /></div>' +
      '</div>' +
      '<div class="product-desc-wrapper">' +
        '<div class="product-name"><a href="{{Url}}">{{{_highlightResult.Title.value}}}</a></div>' +
        '<div class="product-type">{{{_highlightResult.FeedName.value}}}</div>' +
        '<div class="product-price">{{Publication}}</div>' +
        '<div class="product-rating"><a href="{{AuthorUrl}}">{{_highlightResult.AuthorName.value}}</a></div>' +
      '</div>' +
  '</article>';

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
    transformData: function(hit) {
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
      previous: '<i class="fa fa-angle-left fa-2x"></i> Previous page',
      next: 'Next page <i class="fa fa-angle-right fa-2x"></i>'
    },
    showFirstLast: false
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#filter-categories',
    attributeName: 'FeedName',
    operator: 'or',
    limit: 10,
    templates: {
      item: facetTemplateCheckbox,
      header: '<div class="facet-title">Categories</div class="facet-title">'
    },
      collapsible: true
})
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#filter-tags',
    attributeName: 'TagNames',
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
      header: '<div class="facet-title">Tags</div class="facet-title">'
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
          header: '<div class="facet-title">Authors</div class="facet-title">'
      },
      collapsible: true
})
);

search.addWidget(
  instantsearch.widgets.rangeSlider({
      container: '#dates',
      attributeName: 'Publication',
      templates: {
          header: '<div class="facet-title">Publication</div class="facet-title">'
      },
      tooltips: {
          format: getPublicationDate
      },
      pips: false,
      collapsible: true
  })
);

function getPublicationDate(rawValue) {
    var offset = (((rawValue / 60) / 60) / 24);
    var date = new Date("1970-01-01");
    var utcoffset = parseInt(date.getUTCOffset())/100;
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
