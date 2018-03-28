            var clickedTime;
            var reactionTime;
            var createdTime
            function getRandomColor()
            {
                    var letters = '0123456789ABCDEF'.split('');
                    var color = '#';
                    for (var i = 0; i < 6; i++ )
                    {
                        color += letters[Math.round(Math.random() * 15)];
                    }
                return color;
            }
            function makeBox()
            {
                var time = Math.random();
                time = time* 5000;
                setTimeout(
                    function()
                    {
                        if(Math.random()<0.5)
                            {
                                document.getElementById("box").style.borderRadius="100px";
                            }
                        else 
                            {
                                document.getElementById("box").style.borderRadius="0";
                            }
                        var top=Math.random();
                        top=top*350;
                        var left=Math.random();
                        left=left*900;
                        
                        document.getElementById("box").style.marginTop=top+"px";
                        
                        document.getElementById("box").style.marginLeft=left+"px";
                        
                       
                        document.getElementById("box").style.backgroundColor=getRandomColor();
                        
                        document.getElementById("box").style.display="block";
                        
                        createdTime=Date.now();
                    } , time)
            }
            
            document.getElementById("box").onclick=function()
            {
                clickedTime=Date.now();
                
                reactionTime=(clickedTime-createdTime)/1000;
                
                document.getElementById("time").innerHTML=reactionTime;
                
                this.style.display="none";
                
                makeBox();
            }
            makeBox();
            