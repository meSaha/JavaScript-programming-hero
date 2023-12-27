const sections = document.querySelectorAll('section')
// console.log(sections)
for(const section of sections){
    section.style.border = '2px solid steeblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor ='lightgray';
}