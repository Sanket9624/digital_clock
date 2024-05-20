const date = document.querySelector('#clock');
setInterval(function(date){
            const time = new Date();
            clock.innerHTML = time.toLocaleTimeString();
},1000)