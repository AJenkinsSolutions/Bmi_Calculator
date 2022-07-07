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
        let results_message = calculateBmi(w, hf, hi, res);
        res.send('<h1 style="color:#EB4747;text-align:center;background-color: #ABC9FF;">' + results_message + '</h1>');

})


// Create a result page html 
// Displays resultse 
// Design a simple one page layout 
// add favicon 
// add body, header, footer style 


function calculateBmi(weight, height_feet, height_inches){

    let hstring = height_feet + '.' + height_inches;
    
    let height_i = hstring * 12;

    //Bmi Calculation
    let bmi = Math.floor((weight/height_i/height_i) * 703);

    if (bmi >= 35){
        return('Your BMI is ' + ' ' + bmi + ' Extermely Obese');
    }
    if (bmi > 29)
    {
        return('Your BMI is ' + ' ' + bmi + 'Obese');
    
    }
    if (bmi > 24 && bmi < 29){
            return('Your BMI is ' + ' ' + bmi + ' Overweight');

    }
    if (bmi > 18 && bmi <= 24 ){
            return('Your BMI is ' + ' ' + bmi + ' Normal');

    }else{
            return('Your BMI is ' + ' ' + bmi + 'underweight');

}

}

