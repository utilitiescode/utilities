const inputDetails = $('input');
const customNote = $('textarea');
const form = $('form');
const select = $('select');
const customType = $('#customType');


// setting certificateType logic
select.on('change', () => {
if(select.val() !== 'CUSTOM') {
$.session('certificateType', select.val()); 
customType.hide();
} else {
customType.show();
customType.html(`<input type="text" id="custom" placeholder="Enter custom certificate type">`);
const customValue = $('#custom');
customValue.on('input', () => {
$.session('certificateType', customValue.val().trim());    
});
}
});


// image upload logic
$('#file').on('change', (e) => {
     const file = e.target.files[0];
    const reader = new FileReader();     
    reader.onload = function () {
    const imgDetails = reader.result;
    $.session('img', imgDetails);    
    }        
    reader.onerror = function () {
alert("Error reading file. ple5try again");        
    }    
  reader.readAsDataURL(file);     
 });



// store recipient name to sessionStorage 
inputDetails.at(0).input((e) => {
$.session('name', inputDetails.at(0).val().trim());
});


// store recipient eventName to sessionStorage
inputDetails.at(1).input((e) => {
$.session('eventName', inputDetails.at(1).val().trim());
});


// store recipient selected date to sessionStorage 
inputDetails.at(2).input((e) => {
$.session('date', inputDetails.at(2).val().trim());
});


// store recipient institution name to sessionStorage 
inputDetails.at(3).input((e) => {
$.session('institute', inputDetails.at(3).val().trim());
});


// store customNote to sessionStorage if provided 
customNote.input((e) => {
$.session('customNote', customNote.val().trim());
});


// submitting form logic
form.submit((e) => {
e.preventDefault();
const certificateType = $.session('certificateType');
const name = $.session('name');
const date = $.session('date');
const institute = $.session('institute'); 
const eventName = $.session('eventName');


if(!$.empty(certificateType) && !$.empty(name) && !$.empty(date) && !$.empty(institute) && !$.empty(eventName)) {
$.session('flag', 'true');
$.redirect('preview.html');
}
});


 