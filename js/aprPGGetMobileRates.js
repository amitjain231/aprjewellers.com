jsGlobalColorRateUp="#58BA16";jsGlobalColorRateDown="#CC0606";jsGlobalColorRateUnchanged="transparent";jsGlobalDataStreamingOffHTML="<div class='cl_stream_off' ><span style='color:#E35E1B'>oops!!! </span>&nbsp; No Data Connection...   </div>";jsGlobalUserVisitURL="http://www.aprjewellers.com/dynamic/aprPGUpdateMobileUserVisitCount.php";jsGlobalJsonpUrl="http://www.aprjewellers.com/dynamic/aprPGGetMobileRatesDynGet.php";function initAPRMobileApp(){$("#id_btn_updateapp").css("display","none");jsAprAjaxUdpateUserVisitCount();jsMobRefAPRRates()}function jsAprAjaxUdpateUserVisitCount(){var a;a="";a=a+"TOKEN=DUMMY";$.ajax({type:"GET",async:"true",url:jsGlobalUserVisitURL,dataType:"jsonp",data:a,crossDomain:true,cache:false,contentType:"application/json; charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsProcessMobileJSONPResult",success:onAjaxAprMobileUserVisitSuccess,error:onAjaxAprMobileUserVisitError})}function onAjaxAprMobileUserVisitSuccess(a){}function onAjaxAprMobileUserVisitError(a){}function jsProcessMobileJSONPResult(a){}function jsMobRefAPRRates(){var a;jsMobUpdAPRRates();a=setTimeout("jsMobRefAPRRates()",3000)}function jsMobUpdAPRRates(){var a,s,c,t;var h,o,e,b;var v,f;var u,g;h=new Date();o=h.getUTCFullYear();e=h.getUTCMonth();b=h.getUTCDate();e=e+1;if(e<10){v="0"+e.toString()}else{v=e}if(b<10){jsCurrDateStr="0"+b.toString()}else{jsCurrDateStr=b}f=o.toString()+v.toString()+jsCurrDateStr.toString();var r,q,p,n,m;var l,k,j,i,d;r=document.getElementById("id_hid_mob_param1").value;q=document.getElementById("id_hid_mob_param2").value;p=document.getElementById("id_hid_mob_param3").value;n=document.getElementById("id_hid_mob_param4").value;m=document.getElementById("id_hid_mob_param5").value;l=document.getElementById("id_hid_mob_param6").value;k=document.getElementById("id_hid_mob_param7").value;j=document.getElementById("id_hid_mob_param8").value;i=document.getElementById("id_hid_mob_param9").value;d=document.getElementById("id_hid_mob_param10").value;g="";g=g+"PIN="+f;g=g+"&";g=g+"P001="+r;g=g+"&";g=g+"P002="+q;g=g+"&";g=g+"P003="+p;g=g+"&";g=g+"P004="+n;g=g+"&";g=g+"P005="+m;g=g+"&";g=g+"P006="+l;g=g+"&";g=g+"P007="+k;g=g+"&";g=g+"P008="+j;g=g+"&";g=g+"P009="+i;g=g+"&";g=g+"P010="+d;$.ajax({type:"GET",async:"true",url:jsGlobalJsonpUrl,dataType:"jsonp",data:g,crossDomain:true,cache:false,contentType:"application/json; charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsProcessJSONPResult",success:onAjaxMobGetRatesSuccess,error:onAjaxMobGetRatesError})}function onAjaxMobGetRatesSuccess(a){}function onAjaxMobGetRatesError(){}function jsProcessJSONPResult(b){var n,k,r,c,s,m;var f,j,h,d,g;var e,p;var a;var u,t;var q;e="&nbsp;";n=b.RESULT[0].KEY;r=b.RESULT[0].FLAG;s=b.RESULT[0].DESC;p=document.getElementById("id_div_grid_outer");if(r=="E"){p.innerHTML=jsGlobalDataStreamingOffHTML}else{if(r=="S"){var o;for(var l=1;l<=b.RESULT[0].PARAMS.length;l++){o=l-1;m=b.RESULT[0].PARAMS[o];jsKeyArr=m.split("~");if(jsKeyArr[0]=="APPUPDATE"&&jsKeyArr[1]=="Y"){$("#id_btn_updateapp").css("display","block")}else{$("#id_btn_updateapp").css("display","none")}}p.innerHTML="";for(var l=1;l<b.RESULT.length;l++){n=b.RESULT[l].KEY;k=b.RESULT[l].ACT;j=b.RESULT[l].DESC1;h=b.RESULT[l].DESC2;f=b.RESULT[l].CSYM;d=b.RESULT[l].ASK;g=b.RESULT[l].DIR;if(k=="Y"){u="<div class='ui-block-a cl_td_label' >"+j+"&nbsp;<span class='cl_td_label_2'>"+h+"</span></div>";if(g=="-1"){a=jsGlobalColorRateDown}else{if(g=="1"){a=jsGlobalColorRateUp}else{a=jsGlobalColorRateUnchanged}}t="<div class='ui-block-b cl_td_data' style='background-color: "+a+" '> "+d+"</div>";p.innerHTML+=u.toString()+t.toString();q="id_hid_mob_param"+l.toString();document.getElementById(q).value=d}}}}};