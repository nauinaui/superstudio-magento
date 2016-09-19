var Superestudio=function(){function t(t,e){var i=$("#"+t);if("show"===e){const o=i.height(),a=i.css({height:"auto"}).height();i.css({height:o}).transition({height:a+80},500,"in-out")}else"seoText"==t?i.transition({height:120},500,"in-out"):i.transition({height:270},500,"in-out")}function e(t){var e=$(window).scrollTop();$(window).width()>767&&(e>t?$(".topmenu").addClass("fixed"):$(".topmenu").removeClass("fixed"))}function i(){h.fadeIn("fast").spin("large","#fff")}function o(){h.fadeOut("fast").spin(!1)}function a(t,e){$("#filtroInfo").hide(),"price"==e&&$(".resultados").find(".active-filter#price").length>0?($(".resultados").find("#price span.text").remove(),$(".resultados").find("#price").append('<span class="text">'+t+"</span>")):($(".resultados").find(".active-filter:not([id])").first().attr("id",e),$(".resultados").find(".active-filter#"+e).addClass("active"),$(".resultados").find(".active-filter#"+e).append('<span class="text">'+t+"</span>"),$(".resultados").append($("#"+e))),"price"==e&&$(".resultados").find("#price span.text").append("€")}function n(t,e){$(".resultados").find("#"+e).removeClass("active"),$(".resultados #"+e+" span.text").remove(),$(".resultados").find("#"+e).removeAttr("id"),0==$(".resultados").find(".active-filter.active").length&&$("#filtroInfo").show(),$('input[value="'+e+'"]').is(":checked")&&$('input[value="'+e+'"]').attr("checked",!1),"price"==e&&$("#priceRange").data("slider").refresh()}function s(t){$(".carousel .item img").removeClass("active"),t.addClass("active");var e=t.attr("src");console.log(e),$(".product-to-add img").attr("src",e)}function r(){$("#addedProductAlert").show(),setTimeout(function(){$("#addedProductAlert").hide(),$("html, body").animate({scrollTop:$("#crossSellingSection").offset().top-50},1e3)},2e3)}function c(){$("#otherInfoContentTabs").is(":visible")&&$("#otherInfoContentTabs").collapse("hide"),$("#crossSellingSection").is(":hidden")&&$("#crossSellingSection").collapse("show")}function l(){var t=parseInt($("#cartItemsNumber").text(),10);t+=1,$("#cartItemsNumber").text(t),$("#cartItemsNumber").addClass("animated rubberBand"),setTimeout(function(){$("#cartItemsNumber").removeClass("animated rubberBand")},2e3)}function d(){$("#addedToCartFeedback").css("opacity","0"),setTimeout(function(){$("#addedToCartFeedback").appendTo("body"),$("#addedToCartFeedback").css("opacity","1")},500)}function u(){var t=$(".topmenu").offset().top;e(t),$(window).scroll(function(){e(t)}),$(".tooltip").powerTip({placement:"nw-alt"}),$("#priceRange").slider({}),$('[data-toggle="tooltip"]').tooltip(),$(".carousel").carousel({interval:!1}),console.log(m)}const p=($("#menu"),$("#showMenu"),$(".category.sub"),$(".submenu"),$("#showMenuMobile"),$(".showFranjaHoraria")),f=$(".toggleHeight"),h=$("#spin"),m=document.currentScript.getAttribute("data-page"),g=$(".menu-subcategorias li");return f.on("click",function(){t(this.getAttribute("data-element"),this.getAttribute("data-action")),$(this).parent().find(".hide").toggleClass("hide"),$(this).toggleClass("hide")}),g.hover(function(){var t=$(this).position(),e=$(window).width()-t.left,i=t.left,o=$(this).find(".submenu"),a=o.width();e>a?(o.css("left","0"),o.css("right","auto")):i>a?(o.css("left","auto"),o.css("right","0")):(o.css("left","-"+i+"px"),o.css("right","auto"))}),$("#menuSubcategorias > li a .text").on("click",function(t){$(window).width()<768&&(t.preventDefault(),t.stopPropagation(),$(this).parent().parent().find(".submenu").toggle())}),$(".submenu a.item").mouseenter(function(){var t=($(this).parent().parent().find(".promo-menu .promo-title").text(),$(this).parent().parent().find(".promo-menu .promo-description").text(),$(this).parent().parent().find(".promo-menu .promo-image img").attr("src"),$(this).parent().parent().find(".promo-menu").attr("href"),$(this).attr("data-feature-title")),e=$(this).attr("data-feature-desc"),i=$(this).attr("data-feature-img"),o=$(this).attr("data-feature-link");$(this).parent().parent().find(".promo-menu").attr("href",o),$(this).parent().parent().find(".promo-menu .promo-title").text(t),$(this).parent().parent().find(".promo-menu .promo-description").text(e),$(this).parent().parent().find(".promo-menu .promo-image img").attr("src",i),$(this).parent().parent().find(".promo-menu").css("opacity","1")}),p.on("click",function(){$(this).parent().find(".franjaHoraria").slideToggle("fast")}),$(".producto-box > .content").mouseover(function(){$(this).find(".item").addClass("show")}),$(".producto-box > .content").mouseout(function(){$(this).find(".item").removeClass("show")}),$(".add-product-form").submit(function(){return $("#addedToCartFeedback").prependTo($(this).parent().parent().parent().find(".item")),setTimeout(function(){d()},3e3),!1}),$("#addedToCartFeedback .close").on("click",function(t){t.stopPropagation(),t.preventDefault(),d()}),$(".acabado > div").mouseover(function(){var t=$(this).attr("value");$(this).tooltip("hide").attr("data-original-title",t).tooltip("fixTitle").tooltip("show")}),$("#sortList .btn").on("click",function(){1==$(this).hasClass("active")?$(this).toggleClass("change-sort"):$(this).removeClass("change-sort")}),$('#filtersBox input[type="checkbox"]').change(function(){this.checked?a($(this).parent().attr("title"),$(this).val()):n($(this).parent().attr("title"),$(this).val())}),$("#priceRange").on("slideStop",function(){var t="price";a($(this).attr("value"),t)}),$(".acabado .color, .acabado .material").on("click",function(){$(this).hasClass("selected")?n($(this).attr("data-title"),$(this).attr("value")):a($(this).attr("data-title"),$(this).attr("value")),$(this).toggleClass("selected")}),$(".active-filter .close").on("click",function(t){t.preventDefault(),t.stopPropagation(),n(null,$(this).parent().attr("id"))}),$('.more-images img[data-target="#largeImageModal"]').on("click",function(){var t=$(this).attr("src");console.log(t),$("#largeImageModal .modal-content img").attr("src",t)}),$(".more-images img").mouseover(function(){$("#mainImage").attr("src",$(this).attr("src"))}),$(".carousel .item img").on("click",function(t){s($(this))}),$("#calculateShipmentForm").submit(function(){return $("#calculateShipment").collapse("hide"),$("#showShipmentBtn").addClass("active"),!1}),$("#unitsSelect").on("change",function(){var t=$("#productPrice").text();console.log(t),t=Number(t.replace(/[^0-9\.]+/g,"")),t/=100,$("#unitsPrice").text($("#unitsSelect").val()*t+"€")}),$("#addMainProductForm").submit(function(){return r(),c(),l(),!1}),$("#showShipmentBtn").on("click",function(){$("#calculateShipment").insertAfter("#infoDiv")}),$(".other-info-title-tabs li.title").on("click",function(){$("#otherInfoContentTabs").is(":hidden")&&$("#otherInfoContentTabs").collapse("show")}),{init:u,showLoading:i,hideLoading:o}}();Superestudio.init();