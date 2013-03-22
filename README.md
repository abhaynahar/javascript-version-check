javascript-version-ceck
=======================

javascript version ceck

USEAGE

version_check("version to be checked","from versioin", "to version", "Boolean to include boundry or not" )

"to version", "Boolean to include boundry or not" are optional arguments

example
version_check("1.65","1.64") returns true

version_check("1.65","1.64","1.45") returns false

version_check("1.65","1.64","1.65",true) returns true

version_check("1.65","1.64","1.65",false) returns false

version_check("1.65a","1.64a","1.65",false) returns true

version_check("1.64.1a","1.64.1b","1.65",true) returns false

Handles alfa and beta version aslo
