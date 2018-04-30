"use strict";

var photberry_window = jQuery(window),
    photberry_nav = jQuery('.photberry_menu_cont');
jQuery(document).ready(function(){

    /* Menu */

    jQuery('.photberry_mobile_header ').on('click', '.menu-item-has-children a', function(){
    jQuery(this).toggleClass('opened').next().slideToggle(400);
    });
    jQuery('.photberry_header' ).on('click', '.menu-item-has-children a', function(){
        jQuery(this).parent('li').addClass('active_li'); 
        jQuery(this).parent('li').parent('ul').addClass('opened'); 
        photberry_nav.find('ul').css('top', '0px');
        jQuery(this).parent('li').children('.photberry_sub_menu').addClass('now_opened');
        if (photberry_nav.find('.now_opened').length > 0) {
            var current_menu = jQuery('.now_opened:not(.opened)');
        } else {
             var current_menu = jQuery('.photberry_sub_menu');
        }
        if (current_menu.height() > photberry_nav.height()) {
            photberry_nav.addClass('overflowed');
            photberry_nav.removeClass('overflowed_top');
            photberry_nav.addClass('overflowed_bottom');
        } else {
            photberry_nav.removeClass('overflowed');
            photberry_nav.removeClass('overflowed_top');
            photberry_nav.removeClass('overflowed_bottom');
        }

    });

    var set_nav_height = jQuery('.photberry_header').innerHeight() - jQuery('.photberry_logo_cont').innerHeight() - jQuery('.photberry_header_footer').innerHeight();
    jQuery('.photberry_header .photberry_menu_cont').css('height', set_nav_height + 'px');

    jQuery('.photberry_header').on('click', '.photberry_li_back a', function(){
        jQuery(this).parent('li').parent('ul').removeClass('now_opened').removeClass('opened');
        jQuery(this).parent('li').removeClass('active_li'); 
        jQuery(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('opened');
    });
 
     
        if (photberry_window.width() < 769) {
          jQuery('.photberry_video_images_slider').height(jQuery(window).height() + 50);   
        } 
         else { 
            jQuery('.photberry_video_images_slider').height(jQuery(window).height());
        }


        /* Swipebox */

    if (jQuery('a.swipebox-video').length) {
        jQuery('html').addClass('photberry_swipe_box');
        jQuery('.swipebox-video').swipebox({
          selector: '.swipebox-video',
          afterOpen: function () {
            photberry_setup_box();
        }
    });
    }
    if (jQuery('a.swipebox').length) {
        jQuery('html').addClass('photberry_swipe_box');
        jQuery('.swipebox').swipebox({
          selector: '.swipebox',
          afterOpen: function () {
            photberry_setup_box();
        }
    });
    }
        function photberry_setup_box() {
         var swipe_slider = jQuery('#swipebox-slider'),
         swipe_title = jQuery('#swipebox-top-bar'),
         swipe_bottom = jQuery('#swipebox-bottom-bar'),
         setHeight = 0;
         setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
         swipe_slider.height(setHeight).css('top', swipe_title.height());
     }

     jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
         jQuery('#swipebox-next').trigger('click');
         e.stopPropagation();
     });

     jQuery(document).on("click", "#swipebox-container", function (e) {
         jQuery('#swipebox-close').trigger('click');
     });

     /* Grid Blog */
     
     jQuery('.photberry_blog_grid_element').each(function(){
        var items_set = [
        {src: 'img/8-1-1140x860.jpg', date: 'Aug 10, 2017', href: 'standard-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Portrait',
        title: 'Photographer Girl', text: 'Ligula tincidunt, laoreet ante eu, venenatis nisl. Fusce nec quam non dui finibus pretium dictum ac neque. Quisque ultrices sodales velit sed sollicitudin. Quisque...'
        },
        {src: 'img/7-1-1110x810.jpg', date: 'Aug 10, 2017', href: 'gallery-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Music',
        title: 'Blue Smoke', text: 'Tristique iaculis vestibulum. Aliquam a bibendum mauris, sed fermentum felis. Quisque non congue mauris. Proin ultricies consequat arcu non suscipit. Quisque nec...'
        },
        {src: 'img/3-2-1110x810.jpg', date: 'Aug 10, 2017', href: 'image-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Fashion',
        title: 'Ocean Hair', text: 'Consectetur adipiscing elit. Duis lectus ligula, dignissim at justo et, imperdiet suscipit neque. Aliquam urna neque, vestibulum ut egestas id, maximus a tortor....'
        },
        {src: 'img/4-2-1110x810.jpg', date: 'Aug 10, 2017', href: 'standard-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Editorial',
        title: 'Color Dreams', text: 'Phasellus hendrerit vulputate eros. Vivamus id ipsum ultrices, vulputate arcu et, dictum ligula. Curabitur ornare ac tellus sed condimentum. Proin nec augue viverra...'
        },
        {src: 'img/19-1110x810.jpg', date: 'Aug 10, 2017', href: 'gallery-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Music',
        title: 'Colored Grey', text: 'Pellentesque hendrerit. Donec scelerisque bibendum purus vel mollis. Sed odio risus, interdum ut cursus ut, accumsan vel massa. Integer a venenatis ipsum. In hac...'
        },
        {src: 'img/12-1110x810.jpg', date: 'Aug 10, 2017', href: 'image-post.html', href1: 'category.html', cat_name1: 'pixel-mafia', href2: 'category.html', cat_name2: 'Portrait',
        title: 'Shiny Girl', text: 'Nullam dolor justo, convallis sed tortor ut, ornare fermentum purus. Duis congue vulputate eleifend. Pellentesque vitae convallis eros. Morbi feugiat est a arcu...'
        }
        ];

        jQuery('#list').photberry_blog_grid_el({
            load_count: 3,
            items: items_set
        });
    });

     /* Portfolio Grid */


     jQuery('.photberry_portfolio_grid_element').each(function(){
        var items_set = [
        {src: 'img/masonry13-570x430.jpg', href: 'standard-portfolio.html', class: 'editorial', cat_name: 'editorial' ,title: 'Color Dreams'},
        {src: 'img/masonry14-570x430.jpg', href: 'audio-portfolio.html', class: 'fashion', cat_name: 'fashion' ,title: 'Ocean Hair'},
        {src: 'img/masonry15-570x430.jpg', href: 'image-portfolio.html', class: 'commercial', cat_name: 'commercial' ,title: 'Blue Smoke'},
        {src: 'img/masonry16-570x430.jpg', href: 'standard-portfolio.html', class: 'portrait', cat_name: 'portrait' ,title: 'Photographer Girl'},
        {src: 'img/masonry17-570x430.jpg', href: 'audio-portfolio.html', class: 'fashion', cat_name: 'fashion' ,title: 'Colorful Look'},
        {src: 'img/masonry18-570x430.jpg', href: 'image-portfolio.html', class: 'portrait', cat_name: 'portrait' ,title: 'Cute Sweetie'},
        {src: 'img/masonry19-570x430.jpg', href: 'video-portfolio.html', class: 'aditorial', cat_name: 'aditorial' ,title: 'Yellow Pullover'},
        {src: 'img/masonry20-570x430.jpg', href: 'standard-portfolio.html', class: 'commercial', cat_name: 'commercial' ,title: 'Sweet as Strawberry'}
        ];

        jQuery('#list').photberry_portfolio_grid_el({
            load_count: 4,
            items: items_set
        });
    });

      /* Albums Grid */


     jQuery('.photberry_album_grid_element').each(function(){
        var items_set = [
        {src: 'img/masonry13-570x430.jpg', href: 'slider-gallery.html', class: 'editorial', cat_name: 'editorial' ,title: 'Color Dreams'},
        {src: 'img/masonry14-570x430.jpg', href: 'portrait-slider.html', class: 'fashion', cat_name: 'fashion' ,title: 'Ocean Hair'},
        {src: 'img/masonry15-570x430.jpg', href: 'split-gallery.html', class: 'commercial', cat_name: 'commercial' ,title: 'Blue Smoke'},
        {src: 'img/masonry16-570x430.jpg', href: 'slider-gallery.html', class: 'portrait', cat_name: 'portrait' ,title: 'Photographer Girl'},
        {src: 'img/masonry17-570x430.jpg', href: 'portrait-slider.html', class: 'fashion', cat_name: 'fashion' ,title: 'Colorful Look'},
        {src: 'img/masonry18-570x430.jpg', href: 'split-gallery.html', class: 'portrait', cat_name: 'portrait' ,title: 'Cute Sweetie'},
        {src: 'img/masonry19-570x430.jpg', href: 'slider-witht-thumbs.html', class: 'aditorial', cat_name: 'aditorial' ,title: 'Yellow Pullover'},
        {src: 'img/masonry20-570x430.jpg', href: 'slider-gallery.html', class: 'commercial', cat_name: 'commercial' ,title: 'Sweet as Strawberry'}
        ];

        jQuery('#list').photberry_portfolio_grid_el({
            load_count: 4,
            items: items_set
        });
    });



     /* Portfolio Masonry */


     jQuery('.photberry_portfolio_masonry_element').each(function(){
        // var items_set = [
        // {src: 'img/masonry13-570x475.jpg', href: 'standard-portfolio.html', cat_name: 'editorial' ,title: 'Color Dreams'},
        // {src: 'img/masonry14-570x570.jpg', href: 'audio-portfolio.html', cat_name: 'fashion' ,title: 'Ocean Hair'},
        // {src: 'img/masonry15-570x380.jpg', href: 'image-portfolio.html', cat_name: 'commercial' ,title: 'Blue Smoke'},
        // {src: 'img/masonry16-570x475.jpg', href: 'standard-portfolio.html', cat_name: 'portrait' ,title: 'Photographer Girl'},
        // {src: 'img/masonry19-570x665.jpg', href: 'audio-portfolio.html', cat_name: 'aditorial' ,title: 'Yellow Pullover'},
        // {src: 'img/masonry17-570x570.jpg', href: 'image-portfolio.html', cat_name: 'fashion' ,title: 'Colorful Look'},
        // {src: 'img/masonry20-570x570.jpg', href: 'standard-portfolio.html', cat_name: 'commercial' ,title: 'Sweet as Strawberry'},
        // {src: 'img/masonry18-570x475.jpg', href: 'video-portfolio.html', cat_name: 'portrait' ,title: 'Cute Sweetie'}        
        // ];

        jQuery('#list').photberry_portfolio_masonry_el({
            load_count: 4,
            items: portfolioElements
        });
    });


      /* Albums Masonry */


     jQuery('.photberry_albums_masonry_element').each(function(){
        // var items_set = [
        // {src: 'img/masonry13-570x475.jpg', href: 'slider-gallery.html', class: 'editorial', cat_name: 'editorial' ,title: 'Color Dreams'},
        // {src: 'img/masonry14-570x570.jpg', href: 'portrait-slider.html', class: 'fashion', cat_name: 'fashion' ,title: 'Ocean Hair'},
        // {src: 'img/masonry15-570x380.jpg', href: 'split-gallery.html', class: 'commercial', cat_name: 'commercial' ,title: 'Blue Smoke'},
        // {src: 'img/masonry16-570x475.jpg', href: 'slider-gallery.html', class: 'portrait', cat_name: 'portrait' ,title: 'Photographer Girl'},
        // {src: 'img/masonry19-570x665.jpg', href: 'portrait-slider.html', class: 'editorial', cat_name: 'aditorial' ,title: 'Yellow Pullover'},
        // {src: 'img/masonry17-570x570.jpg', href: 'split-gallery.html', class: 'fashion', cat_name: 'fashion' ,title: 'Colorful Look'},
        // {src: 'img/masonry20-570x570.jpg', href: 'slider-gallery.html', class: 'commercial', cat_name: 'commercial' ,title: 'Sweet as Strawberry'},
        // {src: 'img/masonry18-570x475.jpg', href: 'portrait-slider.html', class: 'portrait', cat_name: 'portrait' ,title: 'Cute Sweetie'}        
        // ];

        jQuery('#list').photberry_portfolio_masonry_el({
            load_count: 4,
            items: portfolioElements
        });
    });


     /* Portfolio Masonry1 */


     jQuery('.photberry_portfolio_masonry_element1').each(function(){
        // var items_set = [
        // {src: 'img/masonry13-570x475.jpg', href: 'img/masonry13.jpg', title: 'Color Dreams'},
        // {src: 'img/masonry14-570x570.jpg', href: 'img/masonry14.jpg', title: 'Ocean Hair'},
        // {src: 'img/masonry15-570x380.jpg', href: 'img/masonry15.jpg', title: 'Blue Smoke'},
        // {src: 'img/masonry16-570x475.jpg', href: 'img/masonry16.jpg', title: 'Photographer Girl'},
        // {src: 'img/masonry19-570x665.jpg', href: 'img/masonry19.jpg', title: 'Yellow Pullover'},
        // {src: 'img/masonry17-570x570.jpg', href: 'img/masonry17.jpg', title: 'Colorful Look'},
        // {src: 'img/masonry20-570x570.jpg', href: 'img/masonry20.jpg', title: 'Sweet as Strawberry'},
        // {src: 'img/masonry18-570x475.jpg', href: 'img/masonry18.jpg', title: 'Cute Sweetie'}        
        // ];

        jQuery('#list').photberry_portfolio_masonry_el1({
            load_count: 4,
            items: portfolioElements
        });
    });

     /* Portfolio Packery */


     jQuery('.photberry_portfolio_packery_element').each(function(){
        var items_set = [
        {src: 'img/masonry12-960x960.jpg', class: 'photberry_grid_item1', href: 'standard-portfolio.html', cat_name: 'editorial', title: 'Color Dreams'},
        {src: 'img/masonry09-960x960.jpg', href: 'image-portfolio.html', cat_name: 'fashion' ,title: 'Ocean Hair'},
        {src: 'img/masonry11-960x960.jpg', href: 'video-portfolio.html', cat_name: 'commercial' ,title: 'Blue Smoke'},
        {src: 'img/masonry10-960x960.jpg', class: 'photberry_grid_item1_2' , href: 'standard-portfolio.html', cat_name: 'portrait' , title: 'Photographer Girl'},
        {src: 'img/masonry13-960x960.jpg', class: 'photberry_grid_item1' , href: 'image-portfolio.html', cat_name: 'aditorial' , title: 'Yellow Pullover'},
        {src: 'img/masonry14-960x960.jpg', href: 'video-portfolio.html', cat_name: 'fashion' ,title: 'Colorful Look'},
        {src: 'img/masonry15-960x960.jpg', href: 'audio-portfolio.html', cat_name: 'commercial' ,title: 'Sweet as Strawberry'},
        {src: 'img/masonry16-960x960.jpg', class: 'photberry_grid_item1_2', href: 'standard-portfolio.html', cat_name: 'portrait', title: 'Cute Sweetie'}        
        ];

        jQuery('#list').photberry_portfolio_packery_el({
            load_count: 4,
            items: items_set
        });

    });

    /* Albums Packery */


     jQuery('.photberry_albums_packery_element').each(function(){
        var items_set = [
        {src: 'img/masonry12-960x960.jpg', class: 'photberry_grid_item1', href: 'slider-gallery.html', cat_name: 'editorial', title: 'Color Dreams'},
        {src: 'img/masonry09-960x960.jpg', href: 'portrait-slider.html', cat_name: 'fashion' ,title: 'Ocean Hair'},
        {src: 'img/masonry11-960x960.jpg', href: 'split-gallery.html', cat_name: 'commercial' ,title: 'Blue Smoke'},
        {src: 'img/masonry10-960x960.jpg', class: 'photberry_grid_item1_2' , href: 'slider-gallery.html', cat_name: 'portrait' , title: 'Photographer Girl'},
        {src: 'img/masonry13-960x960.jpg', class: 'photberry_grid_item1' , href: 'portrait-slider.html', cat_name: 'aditorial' , title: 'Yellow Pullover'},
        {src: 'img/masonry14-960x960.jpg', href: 'split-gallery.html', cat_name: 'fashion' ,title: 'Colorful Look'},
        {src: 'img/masonry15-960x960.jpg', href: 'slider-witht-thumbs.html', cat_name: 'commercial' ,title: 'Sweet as Strawberry'},
        {src: 'img/masonry16-960x960.jpg', class: 'photberry_grid_item1_2', href: 'slider-gallery.html', cat_name: 'portrait', title: 'Cute Sweetie'}        
        ];

        jQuery('#list').photberry_portfolio_packery_el({
            load_count: 4,
            items: items_set
        });

    });


     /* Gallery Packery */


     jQuery('.photberry_gallery_packery_element').each(function(){
        var items_set = [
        {src: 'img/photo2-960x960.jpg', class: 'photberry_grid_item1', href: 'img/photo2.jpg', title: 'Sunshine Hair'},
        {src: 'img/portrait05-960x960.jpg', href: 'img/portrait05.jpg', title: 'Witing for the moment'},
        {src: 'img/photo3-960x960.jpg', href: 'img/photo3.jpg', title: 'Night walk'},
        {src: 'img/tattoos-model-sexy-look-960x960.jpg', class: 'photberry_grid_item1_2' , href: 'img/tattoos-model-sexy-look.jpg', title: 'Tattoos are Sexy'}            
        ];

        jQuery('#list').photberry_gallery_packery_el({
            load_count: 4,
            items: items_set
        });

    });


      /* Portfolio 1 Column */

      jQuery('.photberry_portfolio_1col').each(function(){
        var items_set = [
        {src: 'img/masonry05-960x724.jpg', class: 'fashion', href: 'category.html', cat_name: 'fashion' , href1: 'standart-portfolio.html', title: 'Colored Grey',
        text: 'Phasellus rutrum lorem non urna venenatis venenatis. Sed a arcu et justo porttitor imperdiet venenatis nec ante. Suspendisse efficitur sollicitudin mi, vitae imperdiet neque. Aenean eu quam purus. Vestibulum sed sollicitudin leo, quis dignissim nulla. Morbi ullamcorper, lectus aliquet consectetur mollis, risus sem scelerisque metus, sed accumsan mauris elit at mi. Etiam quam nisl, iaculis eu finibus lacinia, vulputate eget felis. Maecenas non ornare leo. Aliquam urna orci, tincidunt eu bibendum sed, aliquam non nunc. Morbi tempor, sapien eget sodales vestibulum, dolor lectus tincidunt nisi, vitae cursus lacus nulla non arcu. Donec porta est quis commodo malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut ante at tortor fringilla malesuada quis id lorem. Donec et nisl dignissim, tempor massa ac, facilisis lacus. Curabitur finibus mauris eu tortor tincidunt tristique. Donec elementum metus a sapien pellentesque malesuada. Morbi justo risus, hendrerit in egestas sit amet, dapibus in ex. Sed lobortis.'},
        {src: 'img/masonry07-960x724.jpg', class: 'editorial', href: 'category.html', cat_name: 'editorial' , href1: 'image-portfolio.html', title: 'Like a Candy Store',
        text: 'Integer molestie ex eros. Nulla vitae pretium nibh. Nulla pellentesque tellus sem, vel dictum metus maximus in. Duis ante enim, mattis id quam vitae, viverra fringilla tortor. Nunc in lacus nulla. Donec ultricies lacus porttitor neque hendrerit tristique. Maecenas ut orci non lacus posuere aliquam ac ut diam. Nullam mattis nisi in diam semper placerat. Pellentesque at lacus et tellus consectetur lobortis. Sed sed consequat urna. Mauris faucibus eget augue vitae blandit. Nam et elementum leo. Pellentesque in leo in tortor sollicitudin gravida. Cras posuere scelerisque nibh, a lobortis neque auctor at. Vivamus porta iaculis volutpat. Integer tincidunt blandit lorem quis pulvinar. Vivamus vel odio non orci varius dictum ornare id ligula. Ut nibh est, facilisis non venenatis eget, aliquet sed massa. Sed scelerisque vestibulum dolor id iaculis. Nunc vel pulvinar massa, id posuere lorem. Quisque ut tristique metus. Maecenas ac semper mi. Quisque in lorem ut lorem suscipit fermentum. Donec vestibulum vestibulum congue. Nullam quis scelerisque leo, at porta urna.'},
        {src: 'img/masonry08-960x724.jpg', class: 'portrait', href: 'category.html', cat_name: 'portrait' , href1: 'gallery-portfolio.html', title: 'Open Your Eyes',
        text: 'Ligula suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu suscipit lacus. Vestibulum dolor felis, scelerisque ac ullamcorper sit amet, pretium ac ligula. Aliquam feugiat egestas dolor at tristique. Mauris aliquet, tellus non fermentum molestie, dui quam tempor ligula, in vestibulum sem ante sed sapien. Nam sed facilisis diam, vitae commodo neque. Proin volutpat pretium dapibus. Ut ullamcorper odio ut risus bibendum finibus. Pellentesque posuere ex nisi, sit amet laoreet nunc condimentum a. Curabitur congue felis et accumsan vehicula. Donec venenatis, orci vitae tempor maximus, enim nisl rutrum odio, sit amet lobortis velit enim at velit. Nullam convallis dui vel ultricies facilisis. Aenean aliquam erat id ultrices volutpat. Suspendisse eget porta arcu. Vivamus et tellus erat. Duis in venenatis augue, sed euismod purus. Ut tincidunt aliquam metus, ut bibendum ante luctus imperdiet. Cras eleifend, felis vitae porta mollis, urna tortor accumsan elit, ac venenatis orci eros condimentum tellus. Sed ac placerat justo.'},
        {src: 'img/masonry06-960x724.jpg', class: 'commercial', href: 'category.html', cat_name: 'commercial' , href1: 'video-portfolio.html', title: 'Nike & Jordan',
        text: 'Egestas eu. Phasellus nisl nibh, dapibus nec erat sit amet, dignissim dictum tortor. Praesent fermentum in tellus non mattis. In nulla lorem, scelerisque eget turpis vel, elementum ornare felis. Maecenas id elit eu elit condimentum rutrum a nec est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer gravida rhoncus eros eu rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam placerat hendrerit tortor, vel placerat dolor volutpat id. In tempus dui et rutrum suscipit. Phasellus auctor lectus neque, vel tincidunt tellus lacinia vel. Nunc facilisis ullamcorper massa malesuada blandit. Nunc finibus pretium leo. In blandit rutrum lorem, nec efficitur nibh lacinia in. Praesent a fermentum arcu. Nunc aliquet pulvinar enim, sit amet efficitur lectus congue in. Nulla sit amet tellus lorem. Duis vitae dolor a arcu semper aliquam. Integer tristique mauris eget neque hendrerit, maximus fermentum tortor auctor. Mauris auctor ligula vel dui porttitor, quis rutrum.'},
        {src: 'img/masonry12-960x724.jpg', class: 'portrait', href: 'category.html', cat_name: 'portrait' , href1: 'standart-portfolio.html', title: 'Raindrops',
        text: 'Id mi quis vestibulum. Quisque et porttitor purus. Sed et lobortis leo. Nullam nunc lectus, fermentum gravida sapien ac, varius pretium risus. Donec ac magna volutpat ante consectetur ultrices ac rhoncus sapien. Aenean sed venenatis turpis. Etiam commodo, odio hendrerit mattis condimentum, felis ante vehicula ante, imperdiet aliquam mauris diam at elit. Suspendisse eget risus gravida, mattis nibh id, molestie mi. Morbi dictum ut metus imperdiet bibendum. Pellentesque pretium mi vitae dolor posuere ullamcorper. Mauris iaculis non nibh sit amet volutpat. Etiam quis mauris eros. Nam lacinia risus at tortor lobortis, at efficitur odio interdum. Aenean feugiat lectus quam, sit amet vestibulum nunc fermentum ac. Praesent dictum rhoncus eros, a tristique lectus malesuada ac. Pellentesque sit amet mi non metus mattis cursus quis sed ligula. Mauris id luctus tellus, in congue nulla. Donec sit amet nunc felis. Nam lorem diam, iaculis et vehicula et, ornare et arcu. Curabitur ultricies tempor turpis at fermentum. Nullam lacinia dui non neque convallis, id mattis justo.'},
        {src: 'img/masonry09-960x724.jpg', class: 'portrait', href: 'category.html', cat_name: 'portrait' , href1: 'video-portfolio.html', title: 'Light My Fire',
        text: 'Ultricies. Donec non diam semper, vestibulum enim ac, fermentum neque. Integer non placerat velit. In a dui tempus, tempor nulla eget, finibus leo. Nunc varius lacus neque, tincidunt porta purus varius in. Aenean nec felis non odio sagittis pellentesque consequat vitae magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lorem quam, tristique vel nulla varius, eleifend dapibus ante. Proin mollis augue sit amet sem convallis laoreet. Nam mollis odio ut scelerisque eleifend. In congue sem nec purus placerat pretium. Morbi pellentesque facilisis volutpat. Phasellus id posuere nibh. Fusce ligula purus, efficitur nec varius quis, porttitor nec eros. Duis blandit ipsum eget mi faucibus, sit amet scelerisque tortor ullamcorper. Maecenas sem ante, pulvinar eget leo non, rutrum lacinia ante. Sed condimentum vulputate magna, et egestas tellus lacinia quis. Quisque posuere erat elit, nec blandit massa suscipit at. Nullam porta commodo scelerisque. Praesent sed mollis ligula, id tincidunt velit. Etiam non commodo libero.'},
        {src: 'img/masonry11-960x724.jpg', class: 'commercial', href: 'category.html', cat_name: 'commercial' , href1: 'gallery-portfolio.html', title: 'Water Painting',
        text: 'Fusce ligula purus, efficitur nec varius quis, porttitor nec eros. Duis blandit ipsum eget mi faucibus, sit amet scelerisque tortor ullamcorper. Maecenas sem ante, pulvinar eget leo non, rutrum lacinia ante. Sed condimentum vulputate magna, et egestas tellus lacinia quis. Quisque posuere erat elit, nec blandit massa suscipit at. Nullam porta commodo scelerisque. Praesent sed mollis ligula, id tincidunt velit. Etiam non commodo libero. Curabitur sit amet magna at tortor ullamcorper ultrices. Sed maximus, justo sollicitudin varius tempor, risus risus iaculis dui, vel interdum nulla nibh sed nunc. Suspendisse ut efficitur tellus. Donec urna turpis, sagittis a gravida et, tincidunt a orci. Phasellus tempus ullamcorper consequat. Lorem ipsum dolor sit amet. In eu tincidunt justo. Pellentesque non pretium quam, vitae lobortis nulla. Praesent at tincidunt erat, vitae ornare nunc. Duis a viverra felis, sit amet rutrum sem. Duis ornare pretium ligula id dignissim. Duis arcu risus, tempus nec finibus non, efficitur sit amet eros. Nunc at sapien a purus viverra semper.'},
        {src: 'img/masonry10-960x724.jpg', class: 'fashion', href: 'category.html', cat_name: 'fashion' , href1: 'standart-portfolio.html', title: 'Walking on a Dream',
        text: 'Phasellus rutrum lorem non urna venenatis venenatis. Sed a arcu et justo porttitor imperdiet venenatis nec ante. Suspendisse efficitur sollicitudin mi, vitae imperdiet neque. Aenean eu quam purus. Vestibulum sed sollicitudin leo, quis dignissim nulla. Morbi ullamcorper, lectus aliquet consectetur mollis, risus sem scelerisque metus, sed accumsan mauris elit at mi. Etiam quam nisl, iaculis eu finibus lacinia, vulputate eget felis. Maecenas non ornare leo. Aliquam urna orci, tincidunt eu bibendum sed, aliquam non nunc. Morbi tempor, sapien eget sodales vestibulum, dolor lectus tincidunt nisi, vitae cursus lacus nulla non arcu. Donec porta est quis commodo malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut ante at tortor fringilla malesuada quis id lorem. Donec et nisl dignissim, tempor massa ac, facilisis lacus. Curabitur finibus mauris eu tortor tincidunt tristique. Donec elementum metus a sapien pellentesque malesuada. Morbi justo risus, hendrerit in egestas sit amet, dapibus in ex. Sed lobortis.'}
        ];

        jQuery('#list').photberry_portfolio_col1_el({
            load_count: 4,
            items: items_set
        });
    });

     /* Portfolio 2 Column */


     jQuery('.photberry_portfolio_2col_elem').each(function(){
        var items_set = [
        {src: 'img/masonry08-800x604.jpg', class: 'fashion', class1: 'photberry_2col' , href: 'standard-portfolio.html', title: 'Open Your Eyes'},
        {src: 'img/masonry06-800x604.jpg', class: 'commercial', class1: 'photberry_2col' , href: 'image-portfolio.html', title: 'Nike & Jordan'},
        {src: 'img/masonry12-800x604.jpg', class: 'portrait', class1: 'photberry_2col' , href: 'gallery-portfolio.html', title: 'Raindrops'},
        {src: 'img/masonry09-800x604.jpg', class: 'editorial' , class1: 'photberry_2col' , href: 'video-portfolio.html', title: 'Light My Fire'},
        {src: 'img/masonry11-800x604.jpg', class: 'commercial' , class1: 'photberry_2col' , href: 'image-portfolio.html', title: 'Water Painting'},
        {src: 'img/masonry10-800x604.jpg', class: 'fashion', class1: 'photberry_2col' , href: 'audio-portfolio.html', title: 'Walking on a Dream'},
        {src: 'img/masonry13-800x604.jpg', class: 'portrait', class1: 'photberry_2col' , href: 'gallery-portfolio.html', title: 'Color Dreams'},
        {src: 'img/masonry14-800x604.jpg', class: 'editorial', class1: 'photberry_2col' , href: 'gallery-portfolio.html', title: 'Ocean Hair'},
        {src: 'img/masonry15-800x604.jpg', class: 'commercial', class1: 'photberry_2col' , href: 'gallery-portfolio.html', title: 'Blue Smoke'},
        {src: 'img/masonry16-800x604.jpg', class: 'portrait', class1: 'photberry_2col' , href: 'standard-portfolio.html',  title: 'Photographer Girl'}        
        ];

        jQuery('#list').photberry_portfolio_col_el({
            load_count: 2,
            items: items_set
        });

    });

      /* Portfolio 3 Column */


     jQuery('.photberry_portfolio_3col_elem').each(function(){
        var items_set = [
        
        {src: 'img/masonry09-800x604.jpg', class: 'editorial' , class1: 'photberry_3col' , href: 'video-portfolio.html', title: 'Light My Fire'},
        {src: 'img/masonry11-800x604.jpg', class: 'commercial', class1: 'photberry_3col',  href: 'image-portfolio.html', title: 'Water Painting'},
        {src: 'img/masonry10-800x604.jpg', class: 'fashion', class1: 'photberry_3col', href: 'audio-portfolio.html', title: 'Walking on a Dream'},
        {src: 'img/masonry13-800x604.jpg', class: 'portrait', class1: 'photberry_3col', href: 'gallery-portfolio.html', title: 'Color Dreams'},
        {src: 'img/masonry14-800x604.jpg', class: 'editorial', class1: 'photberry_3col', href: 'gallery-portfolio.html', title: 'Ocean Hair'},
        {src: 'img/masonry15-800x604.jpg', class: 'commercial', class1: 'photberry_3col', href: 'gallery-portfolio.html', title: 'Blue Smoke'},
        {src: 'img/masonry16-800x604.jpg', class: 'portrait', class1: 'photberry_3col', href: 'standard-portfolio.html',  title: 'Photographer Girl'},
        {src: 'img/masonry19-800x604.jpg', class: 'fashion', class1: 'photberry_3col', href: 'image-portfolio.html', title: 'Yellow Pullover'},
        {src: 'img/masonry17-800x604.jpg', class: 'portrait', class1: 'photberry_3col', href: 'standard-portfolio.html',  title: 'Colorful Look'}        
        ];

        jQuery('#list').photberry_portfolio_col_el({
            load_count: 3,
            items: items_set
        });

    });

     if (jQuery('.photberry_js_bg_image').length) {
        jQuery('.photberry_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

    if (jQuery('.photberry_tabs_container').length) {
        $(function() {
            $(".photberry_tabs_container").organicTabs({
                "speed": 200
            });
    
        });
    }
    jQuery('.photberry_grid_item1_2').innerHeight(jQuery('.photberry_grid_item').innerHeight()/2) ; 
     jQuery('.photberry_portfolio_packery_margin .photberry_grid_item1_2').innerHeight(jQuery('.photberry_grid_item').innerHeight()/2 - 5) ;


    if (jQuery('#multiscroll').length) {
     $('#multiscroll').multiscroll({
        anchors: ['first', 'second', 'third', 'last'],
        css3: true,
        loopBottom: true,
        loopTop: true,
        paddingTop: '0px',
        paddingBottom: '0px'
    });
     $("#scrollbuttons").on('click', ".sb_down", function () {
        $.fn.multiscroll.moveSectionDown();
        // updateScrollButtons();
    });
     $("#scrollbuttons").on('click', ".sb_up", function () {
        $.fn.multiscroll.moveSectionUp();
        // updateScrollButtons();
    });
    }
     if (photberry_window.width() < 769) { 
        jQuery('.photberry_split_slider_page .photberry_main_wrapper').height(jQuery(window).height() + 50);                           
        jQuery('.photberry_split_slider').height(jQuery(window).height() + 50); 
        $('.photberry_split_slider_page, .photberry_split_slider_page body').css({
            'overflow' : 'visible',
            'overflow-x' : 'hidden',
            'height' : 'auto'
        });           
        } 
    else {
        jQuery('.photberry_split_slider_page .photberry_main_wrapper').height(jQuery(window).height());            
        jQuery('.photberry_split_slider').height(jQuery(window).height());       
        }


    $('.photberry_thumbs_slider').on('click', '.owl-prev' , function() {
        var getvalue = $('.active .photberry_slider_item').attr('data-count');
        $('.photberry_slide_counter_current').html(getvalue);
    });
    $('.photberry_thumbs_slider').on('click', '.owl-next' , function() {
        var getvalue = $('.active .photberry_slider_item').attr('data-count');
        $('.photberry_slide_counter_current').html(getvalue);
    });

    $('.photberry_thumbs_slider').on('click', '.photberry_image_fader' , function() {
    var index = $( ".photberry_image_fader" ).index( this );
     $( ".photberry_slide_counter_current" ).text(index +1); 
     if (index < 9) {
       $( ".photberry_slide_counter_current" ).text("0" +(index +1)); 
     }      
    });

    photberry_nav.on('mousewheel', function(event) {
        if(photberry_nav.height() < jQuery('.photberry_sub_menu.now_opened').height()){
            event.preventDefault();
            if (photberry_nav.find('.now_opened').length > 0) {
                var current_menu = jQuery('.now_opened:not(.opened)');
            } else {
                var current_menu = jQuery('.photberry_sub_menu');
            }
            var ground_value = photberry_nav.height() - current_menu.height(),
            menu_step = 100,
            current_step = parseInt(current_menu.css('top')),
            new_step = 0;
            if (event.deltaY > 0) {
                //Scroll Up (Move Menu Down)
                new_step = current_step + menu_step;
            }
            if (event.deltaY < 0) {
                //Scroll Down (Move Menu Up)
                new_step = current_step - menu_step;
            }
            if (new_step <= 0) {
                photberry_nav.addClass('overflowed_top');
            }
            if (new_step >= 0) {
                new_step = 0;
                photberry_nav.removeClass('overflowed_top');
                photberry_nav.addClass('overflowed_bottom');
            }
            if (new_step < ground_value) {
                new_step = ground_value;
                photberry_nav.addClass('overflowed_top');
                photberry_nav.removeClass('overflowed_bottom');
            }
            current_menu.css('top', new_step + 'px');
        }
        
    });
    

});


jQuery(window).on('load', function(){ 
   
});
jQuery(window).resize(function(){

});


$(".photberry_split_slider").append('<div id="scrollbuttons"> <div class="sb_up"></div> <div class="sb_down"></div> </div>');

jQuery(document).on("click" , '.photberry_menu_btn', function () {
  jQuery('html').toggleClass('photberry_show_header');
});

jQuery('.photberry_mobile_header').on("click", ".photberry_mobile_menu_btn", function () {
  jQuery('html').toggleClass('photberry_show_mobile_header');
  jQuery('.photberry_mobile_header_container').slideToggle(400);
});

    // Slider


if (jQuery('.photberry_fullwidth_slider').length) {
    $('.photberry_fullwidth_slider').owlCarousel({
        slideSpeed:200, 
        items:1,
        autoplay: true,
        navText: ["",""],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        URLhashListener:true,
        startPosition: 'slide1',   
        autoplayTimeout:4000,
        smartSpeed:200,
        video:true,
        autoplayHoverPause:true,
        nav: true,
        loop:true
    });
    }



if (jQuery('.photberry_testimonials_slider').length) {
    $('.photberry_testimonials_slider').owlCarousel({
        slideSpeed:200, 
        items:1,
        autoplayTimeout:4000,
        smartSpeed:200,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ["",""],
        autoplayHoverPause:true,
        autoHeight:true,
        nav: true,
        loop:true
    });
}

    
if (jQuery('.photberry_testimonials_slider1').length) {
    $('.photberry_testimonials_slider1').owlCarousel({
        slideSpeed:200, 
        items:3,
        autoplayTimeout:4000,
        smartSpeed:200,
        autoplayHoverPause:true,
        autoHeight:true,
        center: true,
        nav: true,
        loop:true,
        responsive: {
                     0: {
                         items: 1
                        },
                     760: {
                         items: 1
                        },
                     992: {
                      items: 2
                        },
                    1200: {
                            items: 3
                        }    
                    }
    });
}

if (jQuery('.photberry_center_slider').length) {
    $('.photberry_center_slider').owlCarousel({
        center: true,
        slideSpeed:200,
        items:2,
        autoplayTimeout:4000,
        smartSpeed:200,
        autoplayHoverPause:true,
        autoHeight:true,
        center: true,
        margin:10,
        loop:true,
        responsive:{
                767:{
                    items:4
                }
            }
    });
}


    /* Isopope */
    
if (jQuery('.photberry_grid').length) {
    var $grid = $('.photberry_grid').imagesLoaded().progress( function() {
     $grid.isotope({
        layoutMode: 'packery',
        itemSelector: '.photberry_grid_item'   
     });
 }); 
}
if (jQuery('.photberry_grid1').length) {
    var $grid = $('.photberry_grid1').imagesLoaded().progress( function() {
     $grid.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.photberry_grid_item'    
    });
 });

    $('.filters-button-group').on( 'click', 'button', function() {
     var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({ filter: filterValue });
            jQuery('.photberry_load_more').removeAttr( 'style' );
        });
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
         var $buttonGroup = $( buttonGroup );
         $buttonGroup.on( 'click', 'button', function() {
             $buttonGroup.find('.is-checked').removeClass('is-checked');
             $( this ).addClass('is-checked');
         });
     })
    }

if (jQuery('.photberry_grid2').length) {
    var $grid = $('.photberry_grid2').imagesLoaded().progress( function() {
     $grid.isotope({
        itemSelector: '.photberry_grid_item2'    
     });
 }); 

    $('.filters-button-group').on( 'click', 'button', function() {
     var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({ filter: filterValue });
            jQuery('.photberry_load_more').removeAttr( 'style' );
        });
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
         var $buttonGroup = $( buttonGroup );
         $buttonGroup.on( 'click', 'button', function() {
             $buttonGroup.find('.is-checked').removeClass('is-checked');
             $( this ).addClass('is-checked');
         });
     })
}


jQuery.fn.photberry_blog_grid_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid1');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item added">' +
                '<div class="photberry_posts_item">' +
                '<a class="photberry_image_link" href="' + addon_options.items[i].href + '">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</a>' + 
                '<div class="photberry_post_meta">' +
                '<div class="photberry_post_meta_item">' + addon_options.items[i].date + '</div>' +
                '<div class="photberry_post_meta_item">by <a href="' + addon_options.items[i].href1 + '">' + addon_options.items[i].cat_name1 + '</a></div>' +
                '<div class="photberry_post_meta_item"><a href="' + addon_options.items[i].href2 + '">' + addon_options.items[i].cat_name2 + '</a></div>' +
                '</div>' +
                '<h4 class="photberry_post_title"><a href="' + addon_options.items[i].href + '">' + addon_options.items[i].title + '</a></h4>' +
                '<p class="photberry_excerpt">' + addon_options.items[i].text + '</p>' +
                '</div>' +                   
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};

jQuery.fn.photberry_portfolio_grid_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid1');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item ' + addon_options.items[i].class + ' added">' +
                '<a href="' + addon_options.items[i].href + '">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                
                '<div class="photberry_grid_content">' +
                '<h6 class="photberry_portfolio_category">' + addon_options.items[i].cat_name + '</h6>' +
                '<h4 class="photberry_portfolio_title">' + addon_options.items[i].title + '</h4>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};

jQuery.fn.photberry_portfolio_masonry_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el         = jQuery(this),
    global_addon_options = addon_options,
    global_img_count     = addon_options.items.length,
    addon_base           = this,
    img_count            = addon_options.items.length,
    img_per_load         = addon_options.load_count,
    $newEls              = '',
    loaded_object        = '',
    $container           = jQuery('.photberry_grid2');

    jQuery('.photberry_load_more').removeAttr( 'style' );

    jQuery('.photberry_load_more').on('click', function () {

        var $checkedFilter = $( '.filters-button-group' ).find( '.is-checked' );
        if( $checkedFilter.length ){
            var filterValue = '';
            var dataFilter  = $( $checkedFilter ).attr( 'data-filter' ).replace( '.', '' );
            if( dataFilter != '*' ){
                filterValue = dataFilter;

                var dataArray = global_addon_options.items.filter( function( item ){
                    return item.cat_name == filterValue;
                } );

                addon_options = { load_count: 4, items: dataArray };
                img_count     = addon_options.items.length;
                img_per_load  = addon_options.load_count;

            }
        }

        $newEls       = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item2 ' + addon_options.items[i].cat_name + ' photberry_grid_item added">' +
                '<a href="">' +
                '<img src="/assets/img/' + addon_options.items[i].cat_name + '/' + addon_options.items[i].src + '" alt="">' +
                
                '<div class="photberry_grid_content">' +
                '<h6 class="photberry_portfolio_category">' + addon_options.items[i].cat_name + '</h6>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });


    jQuery('.category_grid_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item2 ' + addon_options.items[i].cat_name + ' photberry_grid_item added">' +
                '<a href="/assets/img/' + addon_options.items[i].cat_name + '/' + addon_options.items[i].src + '" class="swipebox">' +
                '<img src="/assets/img/' + addon_options.items[i].cat_name + '/' + addon_options.items[i].src + '" alt="">' +
                
                '<div class="photberry_grid_content">' +
                '<h6 class="photberry_portfolio_category">' + addon_options.items[i].cat_name + '</h6>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });


};

jQuery.fn.photberry_portfolio_masonry_el1 = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid2');

    jQuery('.category_grid_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item2 photberry_grid_item added">' +
                '<a href="' + addon_options.items[i].src + '" class="swipebox">' +
                '<img src="/assets/img/' + addon_options.items[i].src + '" alt="">' +
                
                '<div class="photberry_grid_content">' +
                '<h4 class="photberry_portfolio_title">' + addon_options.items[i].cat_name + '</h4>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};


jQuery.fn.photberry_portfolio_packery_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item ' + addon_options.items[i].class + ' added">' +
                '<a href="' + addon_options.items[i].href + '">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                
                '<div class="photberry_grid_content">' +
                '<h6 class="photberry_portfolio_category">' + addon_options.items[i].cat_name + '</h6>' +
                '<h4 class="photberry_portfolio_title">' + addon_options.items[i].title + '</h4>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;

            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            jQuery('.photberry_grid_item1_2').innerHeight(jQuery('.photberry_grid_item').innerHeight()/2) ;
            jQuery('.photberry_portfolio_packery_margin .photberry_grid_item1_2').innerHeight(jQuery('.photberry_grid_item').innerHeight()/2 - 5) ; 
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");

         });
            
        }
    });
};

jQuery.fn.photberry_gallery_packery_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item ' + addon_options.items[i].class + ' added">' +
                '<a href="' + addon_options.items[i].href + '" class="swipebox">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +               
                '<div class="photberry_grid_content">' +
                '<h4 class="photberry_portfolio_title">' + addon_options.items[i].title + '</h4>' +
                '</div>' +
                '</a>' +           
                '</div>' 

                ;

            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            jQuery('.photberry_portfolio_packery_margin .photberry_grid_item1_2').innerHeight(jQuery('.photberry_grid_item').innerHeight()/2 - 10) ; 
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");

         });
            
        }
    });
};


jQuery.fn.photberry_portfolio_col1_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid1');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item photberry_portfolio_1col_item ' + addon_options.items[i].class + ' added">' +
                '<div class="row">' +
                '<div class="col col-6">' +
                '<div class="photberry_img_block">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</div>' +
                '</div>' +
                '<div class="col col-6">' +
                '<div class="photberry_portfolio_cont">' +
                '<h6 class="photberry_portfolio_category"><a href="' + addon_options.items[i].href + '">' + addon_options.items[i].cat_name + '</a></h6>' +
                '<h2 class="photberry_portfolio_title"><a href="' + addon_options.items[i].href1 + '">' + addon_options.items[i].title + '</a></h2>' +
                '<p class="photberry_portfolio_excerpt">' + addon_options.items[i].text + '</p>' +
                '<a class="photberry_read_more_button" href="' + addon_options.items[i].href1 + '">Read More</a>' +
                '</div>' +
                '</div>' +
                '</div>' + 
                '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};

jQuery.fn.photberry_portfolio_col_el = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photberry_grid1');

    jQuery('.photberry_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photberry_grid_item ' + addon_options.items[i].class1 + ' ' + addon_options.items[i].class + ' added">' +
                '<div class="photberry_portfolio_grid_item">' +
                '<a class="photberry_image_link" href="' + addon_options.items[i].href + '">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</a>' +
                '<div class="photberry_portfolio_cont">' +
                '<h3 class="photberry_portfolio_title"><a href="' + addon_options.items[i].href + '">' + addon_options.items[i].title + '</a></h3>' +
                '</div>' +
                '</div>' +                           
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};