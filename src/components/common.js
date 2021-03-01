export function addEvent()  //addEvent的判断是IE还是其他浏览器
{
    if (window.addEventListener) 
    {
        return true;
    }
    else                        //IE
    {
        return false;
    }
}