//confirmar reserva
new Vue({
    el:"#converter",
    data:{
        degrees:"",
        from:"",
        to:"",
        result:"",
        type:""
    },
    methods:{
        convertTo: function(event){
            this.to= event.target.value;
        },
        convertFrom: function(event){
            this.from= event.target.value;
        },
        convert: function(){
            this.type=this.to;
            if(this.from=="°F"&this.to=="°C"){
                this.result=((parseFloat(this.degrees)-32)*(5/9)).toFixed(2);
            }
            else if(this.from=="°C"&this.to=="°F"){
                this.result=(parseFloat(this.degrees)*(9/5)+32).toFixed(2);
            }
            else if(this.from=="°C"&this.to=="K"){
                this.result=(parseFloat(this.degrees)+273.15).toFixed(2);
            }
            else if(this.from=="°F"&this.to=="K"){
                this.result=(parseFloat(this.degrees)*(5/9)+255.37).toFixed(2);
            }
            else if(this.from=="K"&this.to=="°C"){
                this.result=(parseFloat(this.degrees)-273.15).toFixed(2);
            }
            else if(this.from=="K"&this.to=="°F"){
                this.result=(parseFloat(this.degrees)*(9/5)-459.67).toFixed(2);
            }
            else{
                this.result=this.degrees;
            }
        }
    }
}); 
