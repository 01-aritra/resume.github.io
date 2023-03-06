console.log("Script running")
document.querySelector('.crs').style.display='none'
document.querySelector('.ham,.crs').addEventListener("click",()=>
{
    document.querySelector('.sidebar').classList.toggle('sidebargGo');
        if (document.querySelector('.sidebar').classList.contains('sidebargGo'))
        {
            document.querySelector('.ham').style.display='inline'
            document.querySelector('.crs').style.display='none' 
        }
        else
        {
            document.querySelector('.ham').style.display='none'
            document.querySelector('.crs').style.display='inline' 
        }
    })