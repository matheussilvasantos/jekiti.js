# jekiti.js

An incredible way to show your ads on a website

## Why jekiti.js?

Nowadays you must show your ads in a way that you get your users engaged. The jekiti methodology is a new way to show your ads. You show it and then you hide it. It is good because your users will be curious about it and because it will not be appearing for them all the time.

## Good practices

If you want your users really get engaged with your ads, you should show it several times and you can do it easily with jekiti.js. You can simply set an interval to show your ad. For example:

```
setInterval(function() {
  jekiti('.your-incredible-ad', 500);
}, 50000);
```

The code above is going to show your ad every 50 seconds during 500 milliseconds. This is not the perfect time to show your ad, it depends on your business.

## Demo

Access this [site](https://jekiti.matheussilva.site/) and wait 10 seconds to see the ad for 500 milliseconds: [https://jekiti.matheussilva.site/](https://jekiti.matheussilva.site/).

## How to use

First of all, get the script in your site:

```
<script src="dist/jekiti.js"></script>
```

Then you can use it in two ways:

- Passing a selector and a duration in milliseconds (optional)

```
jekiti('.your-incredible-ad', 1000)
```

- Passing an HTML and a duration in milliseconds (optional)
```
jekiti('<h1>Hi, call 12 99999-9999 to fix your car!</h1>', 1000)
```

- The default duration is 500 milliseconds

## IE Support

I think it will work in all browsers, it does not use modern JavaScript in the source code.
