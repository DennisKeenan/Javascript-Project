window.onload=function(){
    var m_second=0;
    var second=0;
    var minute=0;
    var interval;
    var m_second_text=document.getElementById("m_second");
    var second_text=document.getElementById("second");
    var minute_text=document.getElementById("minute");
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    var reset=document.getElementById("reset");

    function increase_timer(){
        // Milisecond Script //
        m_second=m_second+1;
        if(m_second<=9){
            m_second_text.innerHTML="0"+m_second;
        }
        else{
            m_second_text.innerHTML=m_second;
        }
        if(m_second>=99){
            m_second=0;
            second=second+1;
            second_text.innerHTML=second;
        }
        // Second Script //
        if(second<=9){
            second_text.innerHTML="0"+second;
        }
        else{
            second_text.innerHTML=second;
        }
        if(second>=59){
            second=0;
            minute=minute+1;
            minute_text.innerHTML=minute;
        }
        // Minute Script //
        if(minute<=9){
            minute_text.innerHTML="0"+minute;
        }
        else{
            minute_text.innerHTML=minute;
        }
    }
    start.onclick=function(){
        clearInterval(interval);
        interval=setInterval(increase_timer,10);
    }
    stop.onclick=function(){
        clearInterval(interval);
    }
    reset.onclick=function(){
        clearInterval(interval);
        m_second=0;
        second=0;
        minute=0;
        m_second_text.innerHTML="00"
        second_text.innerHTML="00"
        minute_text.innerHTML="00"
    }
}
