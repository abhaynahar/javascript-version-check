javascript-version-ceck
=======================

javascript version ceck

USEAGE

version_check("version to be checked","from versioin", "to version", "Boolean to include boundry or not" )

example
version_check("1.65","1.64",null,true) returns true

version_check("1.60","1.64",null,true) returns false

version_check("1.65","1.64","1.78",true) returns true

version_check("1.85","1.64","1.78",true) returns false


Handles alfa and beta version aslo
