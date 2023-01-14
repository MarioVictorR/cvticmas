    document.getElementById('mostrar').addEventListener('click',function(){
    document.getElementById('hidden-info').style.display="grid";
    document.getElementById('mostrar').style.display="none";
    document.getElementById('ocultar').style.display="grid";
    
})


    document.getElementById('ocultar').addEventListener('click',function(){
    document.getElementById('hidden-info').style.display="none";
    document.getElementById('mostrar').style.display="grid";
    document.getElementById('ocultar').style.display="none";
    
})