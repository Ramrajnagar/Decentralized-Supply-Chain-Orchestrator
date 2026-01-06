function loadAgents(){
 document.getElementById("agents").textContent=JSON.stringify(
   {supplier:{}, warehouse:{}, transporter:{}}, null,2);
}
function sendNegotiation(){
 let i=document.getElementById("negInput").value;
 document.getElementById("negOutput").textContent="Processed: "+i;
}
function optimizeRoute(){
 let f=document.getElementById("from").value;
 let t=document.getElementById("to").value;
 document.getElementById("route").textContent=`Optimized route from ${f} to ${t}.`;
}
function loadLogs(){
 document.getElementById("logs").textContent="TX#AE921 — Secure contract stored.";
}
