/**
 * Created by Mariam on 10.12.13.
 */
var  text="'''Հովհաննես Թադևոսի Թումանյան''' ([[Փետրվար 19]], [[1869]], [[Դսեղ]] - [[Մարտ 23]], [[1923]], [[Մոսկվա]]),\
     [[հայ]] բանաստեղծ, արձակագիր, գրական, ազգային և հասարակական գործիչ:\
     Հովհաննես Թումանյանի ստեղծագործություններում մարմնավորված են հայ ժողովրդի\
     հավաքական իմաստնությունն ու հանճարը, նրա տենչերն ու երազանքները։";
/*var text="'''Աղայան''' Ղազարոս Ստեփանի ([[Ապրիլի 5]], [[1840]] - [[Հունիսի 20]], [[1911]])," +
    " հայ գրող, մանկավարժ, հրապարակախոս: Աղայանը ամենահայտի հայ հեքիաթագիրներից է: Նրա հեղինակած հեքիաթներից շատերը հիմնված են ժողովրդական ավանդությունների վրա։";*/
function getDataFromArticleText()
{
    var NameObject= {
        name: "",
        description: ""
    }
    var pos1=text.search("'''")+"'''".length;
    var pos2=text.indexOf("(",pos1);
    NameObject.name=text.slice(pos1,pos2);
    var  pos3=text.indexOf(")");
    var pos4=text.indexOf(":",pos3);
    NameObject.description=text.slice(pos3+1,pos4);
    //alert(NameObject.description);
    NameObject.name=NameObject.name.replace("'''","");
    NameObject.description=NameObject.description.replace(","," ");
    NameObject.description=NameObject.description.replace("[[","");
    NameObject.description=NameObject.description.replace("]]","");
    NameObject.name=NameObject.name.trim();
    NameObject.description=NameObject.description.trim();


    //document.getElementById('demo').innerHTML=NameObject.name+"- "+NameObject.description;
    //return NameObject;
    alert(NameObject.name+" "+NameObject.description);
}
var result=getDataFromArticleText();
console.log(result);

