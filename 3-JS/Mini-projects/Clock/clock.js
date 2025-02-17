function updateClocks() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    
    const meridian = hours >= 12? 'PM' : 'AM';

    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`
    
    document.querySelector('#clock').textContent = timeString;
}

updateClocks();
setInterval(updateClocks, 1000);