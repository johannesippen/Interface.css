# Interface.css

When it comes to designing or prototyping a mobile interface with HTML5, complex frameworks like *Sencha* or *jQuery Mobile* are sometimes just too much.

**Interface.css** does much less: It allows you to control the look of your mobile interface, but leaves out the whole JavaScript shebang. For you as a developer this means: You write some semantic HTML code, let **Interface.css** handle the visuals and use your own jQuery, MooTools, Prototype, Zepto or whatever you like best.

## Installation

	<!DOCTYPE html>
	<html>
	<head>
	  <link href="path/to/interface.css" rel="stylesheet">
	  <meta name="apple-mobile-web-app-capable" content="yes">
	  <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
	</head>
	<body class="ios"></body>
	</html>

## Usage

### Header

	  <header data-position="fixed">
		<button>Left Button</button>
	    <h1>Headline</h1>
	    <button>Right Button</button>
	  </header>

### Lists

	  <ul>
		<li>Regular List Item</li>
	    <li>List Item with<span>Right-aligned Value</span></li>
	    <li>List Item with Switch<input type="checkbox"></li>
	    <li><a href="#">Navigation Item</a></li>
	    <li><a href="#">Navigation Item with <span>Value</span></a></li>
	    <li><a href="#"><img src="icon.png">Navigation Item with Icon</a></li>
	  </ul>

### Text Input

	  <ul>
	    <li><label>Username</label><input type="text"></li>
	    <li><label>Password</label><input type="password"></li>
	  </ul>

	  <form data-layout="shorttext">
	    <textarea placeholder="Enter Text here"></textarea>
	  </form>


