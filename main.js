function showclock(){
    var date = new Date();                       //  date هنسميه nwe Date();  اختصار لل 
    var hours = date.getHours();                 // المتغير المسؤول عن معرفة الساعة
    var minutes = date.getMinutes();             // المتغير المسؤول عن معرفة الدقايق
    var second = date.getSeconds();              // المتغير المسؤول عن معرفة الثواني

    if(hours > 12){                             // لو رقم الساعة اكبر من 12 اطرح الرقم من 12 علشان الساعة تبقي بنظام ال12 ساعة
        hours = hours - 12;
    } 
    if(hours < 10){                              // لو رقم الساعة اقل من 10 حط جمب الرقم زيرو 
        hours = '0' + hours;
    }
    else{
        hours;
    }
    if(minutes < 10){                            // لو رقم الدقايق اقل من 10 حط جمب الرقم زيرو 
        minutes = '0' + minutes;
    }
    else{
        minutes;
    }
    if(second < 10){                             // لو رقم الثواني اقل من 10 حط جمب الرقم زيرو 
        second = '0' + second;
    }
    else{
        second;
    }
    
    var printclock = document.getElementById('clock');    //  وبعدين ننادي عليه ( خطوة اختيارية ) لاننا ممكن نطبع علطول document.getElementById('clock'); امتغير هنحط جواه ال
    printclock.innerHTML = hours + ":" + minutes + ":" + second; 
}
setInterval(showclock, 1000);                     //  للـسـاعـة علشان تفضل شغالة update المسؤولة عن انها تعمل // 











// ملحوظة ع الرايق 
// null == undefiend ? true
// null === undefiend ? flase 
//  مختلفين date type يعني هما الاتنين متساويين لكن ف ال 
// object من نوع  nullال 
// undefiend من نوع  undefiend وال 