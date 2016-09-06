Styling HTML Elements: the basic basics
=======================================

- tags make boxes (aka containers)
- elements have a default style, which depends on the browser
- the styling of the elements in the tag depend on the CSS
- there are 2 _basic_ types of elements (there are more than 2, but we are only worried about 2)
	- `block` elements take up the entire `width` of their container
		- `display: block;`
	- `inline` elements take up the `width` of the content they contain, 
	   and they wrap along the display horizontally
- _usually_, `div` elements are blocks and `span` elements are inline
- `div` and `span` are basic containers that allow us to 
   group and apply styles to the contents they contain
- other tags (`p`, `header`, `footer`, `article`, `section`, `aside`, `h1`...`h6`, `nav`, etc.) are also basic containers
	- but they also contain **semantic** meaning--e.g. the tags describe the type of content they contain
	- they are more likely to have a default style or interpretation that matches their semantic meaning
- there are two (basic) types of margins around boxes
	- `margin` describes the _outer_ margin between this element and other elements (above, below, or adjacent)
	- `padding` describes the _inner_ margin between the elements borders and the content within it
- HTML/CSS has its own [units of measurement](http://www.w3schools.com/cssref/css_units.asp)
	- the most common are `px`, `%`, and `em`
	- `px` are "pixels", and are an exact(ish) measurement
		- a pixel is the smallest point on a display that can glow/have a color
		- they are usually (but not always) square
		- you can measure a display's (i.e. screen) dimensions in pixels
		- e.g. an HD display must have 1290 pixels across by 1080 pixels high
			- obviously, the actually physical size of a pixel on a 70" HDTV is much larger than the those of a 7" phone
			- measuring HTML/CSS elements in pixels is good when:
				- you know how big the display is that you're working with
				- you know how big the content is that you're working with
				- you want to set _hard_ upper or lower limits to your HTML elements
	- `%` measures an element's dimensions based on the percent of its parent container or default/current measurement
		- using `%` is a good way to make your layouts/designs reflow sensibly for different sized displays or to handle different sizes of content
		- `%` can work well to adjust elements based on sensible defaults
	- `em` (Ms), are a relative measurement based on the font size
		- 1 `em` is the width of an "M" in the current font
 




