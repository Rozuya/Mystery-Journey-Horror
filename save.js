"use strict";

const SAVE_KEY="mystery_journey_horror_save_v1";

window.SaveSystem={

 save(game){
   try{
     localStorage.setItem(
       SAVE_KEY,
       JSON.stringify(game)
     );
     return true;
   }catch(e){
     console.error(e);
     return false;
   }
 },

 load(){
   try{
     const data=localStorage.getItem(SAVE_KEY);
     return data?JSON.parse(data):null;
   }catch(e){
     console.error(e);
     return null;
   }
 },

 exists(){
   return !!localStorage.getItem(SAVE_KEY);
 },

 clear(){
   localStorage.removeItem(SAVE_KEY);
 },

 volume(){
   const v=localStorage.getItem("mjh_volume");
   return v===null?.45:Number(v);
 },

 setVolume(v){
   localStorage.setItem("mjh_volume",v);
 }

};
