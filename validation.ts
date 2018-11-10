import express from 'express';
import $ from 'jquery';
const app = express();

//Webserver
app.use(express.static('./dist'));
app.listen(8080);

// window.onload = () => {
//     $("#firstName").change(function(){
//         $("#firstNameMandatory").hide();
//     });
// };

$(app).ready(function () {
    $("#firstName").change(function(){
        $("#firstNameMandatory").hide();
    });
});

// => Error: jQuery requires a window with a document
