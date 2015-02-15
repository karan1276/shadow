#Shadow.js by Karan S.
A simple jQuery plugin that will cast a long shadow, just like flat design icons :) 
Created by [Karan S.](http://www.thepetedesign.com)

License: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)


## Demo
[View demo]()

## Usage
To use this on your website, simply include the latest jQuery library found [here](http://jquery.com), together with `shadow.js` into your document, follow by the html markup and a function call as follows:
  
````html
<div class="long-shadow">Shadow.js</div>
...
````

````javascript
$(".long-shadow").shadow({
    // These are the defaults.
    color: "#1976D2",//color of the cast shadow
    length:550,//lenght of the shadow
    angle:315,//angle of the shadow with +ve X-axis
});
````


## Future of this plugin
You will notice that the shadow ends sharply, ill try to make it fade away, probably add another option to define the length during which the shadow fades away.
