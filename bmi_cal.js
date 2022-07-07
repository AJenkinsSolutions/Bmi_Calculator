const express = require('express');
const app = express();
const port = 3000; 

//Init our Express-Parser
app.use(express.urlencoded({extended: true}));



app.listen(port, ()=> {
    console.log('Server Listening Port:' + port);
})

//Home Route
app.get('/', (req, res)=> {

    // Sending the file we want to display
    // Results for get requests
    res.sendFile(__dirname + '/index.html');

})

app.post('/', (req, res) => {

        // express Parser to get HTML Form inputs
        let w = req.body.weight;
        let hf = Number(req.body.height_f);
        let hi = Number(req.body.height_i);
        calculateBmi(w, hf, hi, res);

})

 // Morning todos 
// Create a result page html 
// Displays resultse 
// Design a simple one page layout 
// add favicon 
// add body, header, footer style 
// add css 
// commit to verison control 


function calculateBmi(weight, height_feet, height_inches, res){

    let hstring = height_feet + '.' + height_inches;
    
    
    let height_i = hstring * 12;

    //Bmi Calculation
    let bmi = Math.floor((weight/height_i/height_i) * 703);

    if (bmi >= 35){
        res.send('Your BMI is ' + ' ' + bmi + ' Extermely Obese');
    }
    if (bmi > 29)
    {
        res.send('Your BMI is ' + ' ' + bmi + 'Obese');
    
    }
    if (bmi > 24 && bmi < 29){
            res.send('Your BMI is ' + ' ' + bmi + ' Overweight');

    }
    if (bmi > 18 && bmi <= 24 ){
            res.send('Your BMI is ' + ' ' + bmi + ' Normal');

    }else{
            res.send('Your BMI is ' + ' ' + bmi + 'underweight');

}

}

