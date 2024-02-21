
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.7a3a4a4b99f7252412bb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/456.latest.en.6ad11b7c37558109a81d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/835.latest.en.c60bd4bab29ab30e678f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.latest.en.43731eb585ef4ff8d8b1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.16059b8aaa53e45796ab.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.latest.en.d48b54ea867b809eedba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.en.2004013e445b7353dc80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.latest.en.ed5da7e5a1dddfca0e79.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.cebf4984f2e22fea85fa.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/456.latest.en.800164302d4c7459140d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e5a7f63ca146c0549466.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.en.4d273af8acf76b1eb555.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.latest.en.e1642cfc6f66f7c0c2a5.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.5460e0463a398b1075386f51084d8aa756bafb17.woff2?h1=aG9veC5jbw&hmac=e05742de6018ac28955f6ad214e8e0a00f29827af41f30e3b8f0d8dc6d255b6d","https://fonts.shopifycdn.com/open_sans/opensans_n6.63a74f6cbbfef729fb07955b2d5b4cc83273862e.woff2?h1=aG9veC5jbw&hmac=513351f86a844734baaa431ffcfa6c498870c83ac84efb8c97cb3eb40641cd81"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0625/4136/5406/files/hoox_745ba86d-e89d-4651-8669-b63c7a4e4a7a_x320.png?v=1669644299","https://cdn.shopify.com/s/files/1/0625/4136/5406/files/hooxcheckout_banner_2000x.jpg?v=1672314670"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  