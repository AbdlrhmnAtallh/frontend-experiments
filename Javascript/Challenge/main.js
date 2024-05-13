let sectionTitle, sectionDescription, sectionDate;

sectionTitle = "Section A"
sectionDescription = "This is section A"
sectionDate = "5\\13\\2024"

// Method 1: Using Template Literals
let markUp = `<div>
<h3>Hello, ${sectionTitle} </h3>
<p>${sectionDescription}</p>
<span>${sectionDate}</span>
</div>` 

// Method 2: Using String Concatenation
let myDiv = "<div>\
<h3> Hello, "+sectionTitle+" </h3>\n\
<p> "+sectionDescription+" </p>\n\
<span> "+sectionDate+" </span>\n\
</div>"

// Write method 1
document.write(markUp)

// Write method 2
document.write(myDiv)
