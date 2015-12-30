# knockout-cmdrjs (knockout.cmdr.js)

A Knockout component for [cmdrjs](https://github.com/cmdrjs/cmdrjs).

[![Build status](https://travis-ci.org/cmdrjs/knockout-cmdrjs.png)](https://travis-ci.org/cmdrjs/knockout-cmdrjs)
[![Bower version](https://badge.fury.io/bo/knockout-cmdrjs.svg)](http://badge.fury.io/bo/knockout-cmdrjs)

## Installing the plugin

#### Bower
```
bower install knockout-cmdrjs
```

#### Manual

Download files from the [releases](https://github.com/cmdrjs/knockout-cmdrjs/releases) page.

## Basic usage

```html
<script src="knockout.js"></script>
<script src="cmdr.js"></script>
<script src="knockout.cmdr.js"></script>

<cmdr params="{ shell: shell, options: options"></cmdr>

<script>    
    var vm = { 
        shell: ko.observable() //will be set to instance of cmdr.Shell created by component.
        options: {} //set Shell class options here.
    };
    
    ko.applyBindings(vm);
</script>
```

This component creates a new cmdrjs [Shell](https://github.com/cmdrjs/cmdrjs/wiki/shell-class) object and injects it into the template.
