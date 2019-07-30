
window.addEventListener('load', ()=> {

    const menuList = document.querySelectorAll('.menu');
    const sectionList = document.querySelectorAll('.section');
    const imgList = document.querySelectorAll('.imgtag');
    const content = document.querySelector('.content-wrap');
    const change = (sectionName) => {
        let i;
        for(i=0; i<3; i++){
            sectionList[i].classList.add("dpnone");
        }
        sectionName.classList.remove('dpnone');
    }

    const menuBar = (className)=>{
        let i;
        for(i=0; i<3; i++){
            menuList[i].classList.remove("selected");
        }
        className.classList.add('selected');
    }

    menuList[2].addEventListener('click',()=>{
        change(sectionList[2]);
        menuBar(menuList[2]);
    });
    menuList[1].addEventListener('click',()=>{
        change(sectionList[1]);
        menuBar(menuList[1]);
    });
    menuList[0].addEventListener('click',()=>{
        change(sectionList[0]);
        menuBar(menuList[0]);
    });



   


    async function imgLoad(imgname,tagName){
        const response = await fetch('img/'+imgname+'.png');
        console.log(response);
        const url = await response.url;
        tagName.src = url;
    }

    imgLoad('app',imgList[0]);
    imgLoad('ssem_home',imgList[1]);
    imgLoad('mac',imgList[2]);
    
});