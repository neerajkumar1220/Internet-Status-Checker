

window.addEventListener("load",checkinternetconnection);

function checkinternetconnection(){
    const StatusText=document.getElementById('StatusText');
    const ipAddress=document.getElementById('ipAddress');
    const Network=document.getElementById('Network');
    StatusText.textContent='Cecking...';


    if(navigator.onLine)
    {
fetch('https://api.ipify.org?format=json')
.then((Response)=> Response.json())
.then((data) => {
        ipAddress.textContent=data.ip;
        StatusText.textContent='Connected'
        const connection = navigator.connection;
        const Network = connection?connection.downlink +'Mbps' : 'Unknown';

        Network.textContent=Network;
})
    }
    else
    {
        StatusText.textContent='Disconnect';
        ipAddress.textContent='-';
        Network.textContent='-';
    }

}