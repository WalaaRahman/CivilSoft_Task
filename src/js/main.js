var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

// Essay Question Creation
let essay = `<div class="main-container Essay">
<div class="main-parent main-parent2">
    <section class=" creation-sec-2">
        <div class="container">
        <label class="">Question type : <b> Essay </b></label> <br> <br>
            <div class="row">
                <div class=" col-md-10 mt-1">
                    <div class="d-flex creation-name">
                        <label for="">Weight : </label>
                        <div class="input-parent">
                            <input type="text" class="essay_weight inputweight">
                            <span>&nbsp;%</span>
                        </div>
                    </div>
                </div>
                <div class=" col-md-10 mt-1">
                    <div class="d-flex creation-name">
                        <label for="">Maximum allowed characters : </label>
                        <div class="input-parent" >
                            <input type="text" class="essay_max_char">
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="d-flex creation-name">
                <label for="">Content :</label>
                <div class="essay-textarea-parent">
                <textarea class="essay_text" rows="" cols=""></textarea>
                <span class="en-btn essay-btn en-btn2 lang-btn selected-lang-btn">en</span>
                <span class="ar-btn essay-btn ar-btn2 lang-btn">ar</span>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-danger delete-btn delete_essay" data-delete="Essay" ><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    </section>
</div>
</div>`;

let yesNo = `<div class="main-container YesNo">
<div class="main-parent main-parent2">
    <section class=" creation-sec-2">
        <div class="container">
            <label class="">Question type : <b> Yes / No </b></label> <br> <br>
            <div class="row">
                <div class="col-sm-5">
                    <div class="d-flex creation-name">
                        <label for="">Weight : </label>
                        <div class="input-parent">
                            <input type="text" class="yn_weight inputweight">
                            <span>&nbsp;%</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="d-flex creation-name">
                        <button class="btn btn-light preferred question-btn shadow-sm clicked" id="2" data-question="1">Preferred</button>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="d-flex creation-name">
                        <button class="btn btn-danger disqualifier question-btn" id="1" data-question="2">Disqualifier</button>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="d-flex creation-name">
                <label for="">Content :</label>
                <div class="essay-textarea-parent">
                    <textarea class="yn_text" rows="" cols=""></textarea>
                    <span class="en-btn en-btn3 lang-btn selected-lang-btn yn-btn" data-objLang="en">en</span>
                    <span class="ar-btn ar-btn3 lang-btn yn-btn" data-objLang="ar">ar</span>
                </div>
            </div>
            <div>
                <h4 for="">Question Choices</h4>
                <div class="row ">
                    <div class="col-sm-4">
                        <h5>a- Yes</h5>
                    </div>
                    <div class="col-sm-4 form-check form-switch switches hide">
                        <input class="form-check-input switch-btn " type="checkbox" id="mySwitch1" data-check="2" name="darkmode" value="yes" unchecked>
                    </div>
                    <div class="col-sm-4 preferred_weights  ">
                        <input class="weight_input" type="text" id="yesWeight"> %
                    </div>
                </div>
                <div class="row ">
                    <div class="col-sm-4">
                        <h5>b- No</h5>
                    </div>
                    <div class="col-sm-4 form-check form-switch switches hide">
                        <input class="form-check-input switch-btn " type="checkbox" id="mySwitch2" data-check="1" name="darkmode" value="no" unchecked>
                    </div>
                    <div class="col-sm-4 preferred_weights">
                        <input class="weight_input" type="text" id="noWeight"> %
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-danger delete-btn" data-delete='YesNo'><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    </section>
</div>
</div>`;
let attachment = `<div class="main-container Attachment">
<div class="main-parent main-parent2">
    <section class=" creation-sec-2">
        <div class="container">
            <label class="">Question type : <b> Attachment</b></label> <br> <br>
            <div class="row">
                <div class="col-sm-5">
                    <div class="d-flex creation-name">
                        <label for="">Weight : </label>
                        <div class="input-parent">
                            <input type="text" class="attachment_weight inputweight">
                            <span>&nbsp;%</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <br>
            <br>
            <div class="d-flex creation-name">
                <label for="">Content :</label>
                <div class="essay-textarea-parent">
                    <textarea class="attachment_text" rows="" cols=""></textarea>
                    <span class="en-btn en-btn4 lang-btn selected-lang-btn attachment-btn" data-objLang="en">en</span>
                    <span class="ar-btn ar-btn4 lang-btn attachment-btn" data-objLang="ar">ar</span>
                </div>
            </div>
            <br>
            <br>

            <div class="d-flex ddl_div ">
                <label for="">Select the supported format : &nbsp; </label>
                <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Supported Format 
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-format="format1">Format 1</a></li>
                            <li><a class="dropdown-item" href="#" data-format="format2">Format 2</a></li>
                            <li><a class="dropdown-item" href="#" data-format="format3">Format 3</a></li>
                        </ul>
                </div>
            </div>
            
            <div class="d-flex justify-content-end">
                <button class="btn btn-danger delete-btn" data-delete='Attachment'><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    </section>
</div>
</div>`;
// drop down open and close
let dropDown = document.querySelector(".dropdown-title");
let dropDownBody = document.querySelector(".dropdown-content");
dropDown.addEventListener("click", ShowDropDownMenu);

function ShowDropDownMenu() {
    dropDownBody.classList.toggle("shown");
}
let dropDownOption = document.querySelectorAll(".dropdown-content span");
dropDownOption.forEach((option) => {
    option.addEventListener("click", dropDowngetValue);
});

function dropDowngetValue(e) {
    ShowDropDownMenu();
}

let section_obj = {
    en_name: "",
    ar_name: "",
    weight: 0
}
let essay_obj = {
    weight: 0,
    max_char: 0,
    content_en: '',
    content_ar: ''
}
let yesOrno_obj = {
    weight: 0,
    en_question: 'English',
    ar_question: 'Arabic',
    preferred_yes_answer: '',
    preferred_no_answer: '',
    disqualifier_answer: ''
}
let attachment_obj = {
    weight: 0,
    en_question: 'English',
    ar_question: 'Arabic',
    file_type: []
}

let qCount = 0;
let essay_ques_count = 0;
let yesNo_ques_count = 0;
let attachment_ques_count = 0;
let total_weight = 0;


// question generator ar/en btns
$('.sec0-btn').click(function() {
    let inputValue;
    let langSelector = $(this).attr("data-objLang");
    $(this).siblings().removeClass('selected-lang-btn')
    $(this).addClass('selected-lang-btn');
    inputValue = section_obj[`${langSelector}_name`];
    $('.sectionName').val(inputValue);
})




$('.dropdown-content span').click(function() {
        _this = $(this);
        qType = $(this).attr('data-value');
        if (qType == 'essay') {
            $('.ques-div').append(essay);
            $('.delete_essay').click(function(e) {})
            qCount += 1;
            essay_ques_count += 1;
        } else if (qType == 'yesOrNo') {
            $('.ques-div').append(yesNo);
            qCount += 1;
            yesNo_ques_count += 1;
        } else if (qType == 'attachment') {
            $('.ques-div').append(attachment);
            qCount += 1;
            attachment_ques_count += 1;
        }
    })
    // section weight
let sec_weight = 0;
$('.secWeight').change(function() {
        $('.secWeight').removeClass('error');
        $('.secWeight').removeClass('required');
        sec_weight = parseInt($('.secWeight').val());
        console.log({ sec_weight });
    })
    // ---------------------- Essay --------------------//
    // Essay weight
let essay_weight = 0;
let arr_weight = [essay_weight]

$(document).on('change', '.essay_weight', function() {

    // total_weight = total_weight - essay_weight;
    $('.essay_weight').removeClass('error');
    $('.essay_weight').removeClass('required');


    essay_weight = parseInt($('.essay_weight').val());


    total_weight = parseInt($('.essay_weight').val());

    console.log("total weight after add essay", essay_weight);
})

// Essay max allowed char
$(document).on('focusout', '.essay_max_char', function() {
    $('.essay_max_char').removeClass('error');
    $('.essay_max_char').removeClass('required');
    essay_max_char = parseInt($('.essay_max_char').val());

    console.log("max allowed chars : ", essay_max_char);
})

// Delete Button

$(document).on('click', '.delete-btn', function(e) {
    let section = $(this).attr('data-delete');
    console.log({ section });
    $(this).parent().parent().parent().parent().parent().remove();

    console.log($(this).parent().find(".inputweight"));




});

// Essay English and  Arabic input

$(document).on('click', 'essay-btn', function() {
    let inputValue;
    let langSelector = $(this).attr("data-objLang");
    $(this).siblings().removeClass('selected-lang-btn')
    $(this).addClass('selected-lang-btn');

    inputValue = essay_obj[`content_${langSelector}`];
    $('.essay_text').val(inputValue);

})



// ----------------- Yes / No Section ----------------------------  //


//  ------ switch buttons ---------

$(document).on('click', ".switch-btn", function() {
    console.log($(this).is(":checked"));
    let switch_value = $(this).attr('value');

    let otherChoice = $(this).attr("data-check");
    let checker = $(this).is(":checked")
    $(`#mySwitch${otherChoice}`).prop("checked", !checker)
    if ($(this).is(":checked")) {
        yesOrno_obj.disqualifier_answer = $(this).attr('value');
    } else {
        yesOrno_obj.disqualifier_answer = $(`#mySwitch${otherChoice}`).attr('value');
    }
});

// Preferred and Disqualifier
$(document).on('click', '.question-btn', function() {
    let question = $(this).attr('data-question');
    $(this).addClass('clicked');
    $(`#${question}`).removeClass('clicked')
        // if preferred
    if (question == 1) {
        $('.preferred_weights').removeClass('hide');
        $('.switches').addClass('hide');
    }
    // if disqualifier
    else if (question == 2) {
        $('.preferred_weights').addClass('hide');
        $('.switches').removeClass('hide');
    }
})




//Yes / No  Endlish and  Arabic btns
$(document).on('click', '.yn-btn', function(e) {
    let inputValue;
    let langSelector = $(this).attr("data-objLang");
    $(this).siblings().removeClass('selected-lang-btn');
    $(this).addClass('selected-lang-btn');
    inputValue = yesOrno_obj[`${langSelector}_question`];

    $('.yn_text').val(inputValue);


});
// ---------------- Attachment ---------------------------
$(document).on('click', '.attachment-btn', function(e) {
    let inputValue;
    let langSelector = $(this).attr("data-objLang");
    $(this).siblings().removeClass('selected-lang-btn');
    $(this).addClass('selected-lang-btn');
    inputValue = attachment_obj[`${langSelector}_question`];

    $('.attachment_text').val(inputValue);


});
// $(document).on('click', 'dropdown-item', function() {
//     let value = $(this).attachment('data-format');
//     console.log({ value });
// })


// --------------- Validation Functions ------------------- //

let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
let num_pattern = /[0-9]*/g;

function validate(field, type, ques) {
    if (type == 'empty') {
        if (field === "") {
            return false;
        } else {
            return true;
        }
    } else if (type == 'number') {
        if (!(num_pattern.test(field))) {
            return false;
        } else {
            return true;
        }
    } else if (type == 'weight') {
        if (field > 100) {
            return `${ques} weight should not exced 100 % `;
        } else if (field <= 0 && field != '') {

            return `${ques} weight should not be -ve value `;
        } else {
            return `true`;
        }
    }
}




// ----- Save Section ----- //


$('.saveSec').click(function() {
    total_weight = 0;

    console.log("Saveeeee");

    let weight_arr = Array.from(document.querySelectorAll(".inputweight"))
    weight_arr.forEach(input => {
        total_weight += Number(input.value)
    });

    if (qCount == 0) {
        alert('You must add one question at least ')
    } else {
        // Section Validation
        if ($('.en-btn').hasClass('selected-lang-btn')) {
            if ($('.sectionName').val() == '') {
                $('.sectionName').addClass('required')

            } else {
                $('.sectionName').removeClass('required');
                section_obj.en_name = $('.sectionName').val();

            }
        } else if ($('.ar-btn').hasClass('selected-lang-btn')) {
            if ($('.sectionName').val() == '') {
                $('.sectionName').addClass('required');

            } else {
                $('.sectionName').removeClass('required');
                section_obj.ar_name = $('.sectionName').val();

            }
        }
        if (sec_weight == 0) {
            $('.secWeight').addClass('required');

        } else {

            if (!(num_pattern.test(sec_weight))) {
                $('.secWeight').addClass('error');
                alert("Section Weight accepts only numbers !!!")
            } else {
                $('.secWeight').removeClass('error');
                $('.secWeight').removeClass('required');
                section_obj.weight = sec_weight;
            }


        }

        if (essay_ques_count > 0) {
            // Essay Validation
            let essay_content = $('.essay_text').val();
            essay_weight = parseInt($('.essay_weight').val());

            let essay_max_char = parseInt($('.essay_max_char').val());
            let is_essayWieght_empty = validate(essay_weight, 'empty', 'Essay');
            let is_essayWieght_num = validate(essay_weight, 'number', 'Essay');
            let is_essayWieght_valid = validate(essay_weight, 'weight', 'Essay');
            let is_essayMaxChar_empty = validate(essay_max_char, 'empty', 'Essay');
            let is_essayMaxChar_num = validate(essay_max_char, 'number', 'Essay');
            let is_essayContent_empty = validate(essay_content, 'empty', 'Essay');

            //  Validate Essay Weight

            //  -----------  1 - Empty
            if (!is_essayWieght_empty) {

                alert("Essay Weight should not be Empty")
                $('.essay_weight').addClass('required')

            } else if (is_essayWieght_empty) {



                //   -----------   2- number
                if (!is_essayWieght_num) {
                    alert("Essay Weight should be a number ")
                    $('.essay_weight').addClass('required')


                } else if (is_essayWieght_num) {

                    //  -----------  3 - Valid weight

                    if ((is_essayWieght_valid) == "true") {
                        essay_obj.weight = $('.essay_weight').val();



                    } else if (!is_essayWieght_valid) {
                        $('.essay_weight').addClass('error')
                        alert(is_essayWieght_valid);
                    }
                }

            }

            //  Validate Essay Max Char

            if (!is_essayMaxChar_empty) {

                alert("Essay Maximum characters should not be Empty")
                $('.essay_max_char').addClass('required')

            } else if (is_essayMaxChar_empty) {

                $('.essay_max_char').removeClass('required')
                console.log({ essay_max_char });

            }


            // Validate Essay Question Content

            if (!is_essayContent_empty) {

                alert("Essay Question  should not be Empty")
                $('.essay_text').addClass('required')

            } else if (is_essayContent_empty) {

                $('.essay_text').removeClass('required')
                if ($('.en-btn2').hasClass('selected-lang-btn')) {
                    essay_obj.content_en = essay_content;
                } else if ($('.ar-btn2').hasClass('selected-lang-btn'))
                    essay_obj.content_ar = essay_content;
            }





        }
        // Yes / No Validation

        // ------ Yes / No Weight
        if (yesNo_ques_count > 0) {
            let yn_weight = $('.yn_weight').val();
            let yn_content = $('.yn_text').val();
            let is_yesNoWieght_empty = validate(yn_weight, 'empty', 'Essay');
            let is_yesNoWieght_num = validate(yn_weight, 'number', 'Essay');
            let is_yesNoWieght_valid = validate(yn_weight, 'weight', 'Essay');
            let is_yesNoContent_empty = validate(yn_content, 'empty', 'Essay');


            if (!is_yesNoWieght_empty) {

                alert("Yes / No Weight should not be Empty")
                $('.yn_weight').addClass('required')

            } else if (is_yesNoWieght_empty) {


                //   -----------   2- number
                if (!is_yesNoWieght_num) {
                    alert("Yes / No Weight should be a number ")
                    $('.yn_weight').addClass('error')

                    console.log({ yn_weight });

                } else if (is_yesNoWieght_num) {
                    $('.yn_weight').removeClass('error')

                    //  -----------  3 - Valid weight

                    if ((is_yesNoWieght_num) == "true") {
                        yesOrno_obj.weight = $('.yn_weight').val();



                    } else if (!is_yesNoWieght_valid) {
                        $('.yn_weight').addClass('error')
                        alert(is_yesNoWieght_valid);
                    } else {
                        $('.yn_weight').removeClass('error');
                        $('.yn_weight').removeClass('required');
                        yesOrno_obj.weight = yn_content;
                        console.log("Yn weight Done");
                    }
                }

            }

            // -------- Yes / No Question Content
            if (!is_yesNoContent_empty) {

                alert("Yes / No Question  should not be Empty")
                $('.yn_text').addClass('required')

            } else if (is_yesNoContent_empty) {

                $('.yn_text').removeClass('required')
                if ($('.en-btn3').hasClass('selected-lang-btn')) {
                    yesOrno_obj.en_question = yn_content;
                } else if ($('.ar-btn3').hasClass('selected-lang-btn'))
                    yesOrno_obj.ar_question = yn_content;
            }

            if ($("#yesWeight").val() == '' || $("#noWeight").val() == '') {
                alert("Preferred Should have an answer ");
                $("#yesWeight , #noWeight").addClass('error');
            } else {
                console.log(parseInt(($("#yesWeight").val())) + parseInt(($("#noWeight").val())));

                if (parseInt(($("#yesWeight").val())) + parseInt(($("#noWeight").val())) > 100 || parseInt(($("#yesWeight").val())) + parseInt(($("#noWeight").val())) < 100) {
                    alert("Preferred Weight must equal 100%");
                    $("#yesWeight , #noWeight").addClass('error');
                } else {
                    $("#yesWeight , #noWeight").removeClass('error');
                    yesOrno_obj.preferred_yes_answer = parseInt(($("#yesWeight").val()));
                    yesOrno_obj.preferred_no_answer = parseInt(($("#noWeight").val()));
                }
            }

            if (yesOrno_obj.disqualifier_answer == '' || yesOrno_obj.disqualifier_answer == 'null' || yesOrno_obj.disqualifier_answer == 'undefined') {
                alert("Disqualifier must have an  answer")
                $(".switches").addClass('error');
            } else {
                $(".switches").removeClass('error');
            }
        }

        // ---------- Attachment ---------------

        if (attachment_ques_count > 0) {

            // -------- Weight-------
            let attach_weight = $('.attachment_weight').val();
            let attach_content = $('.attachment_text').val();
            let is_attachWieght_empty = validate(attach_weight, 'empty', 'Essay');
            let is_attachWieght_num = validate(attach_weight, 'number', 'Essay');
            let is_attachWieght_valid = validate(attach_weight, 'weight', 'Essay');
            let is_attachContent_empty = validate(attach_content, 'empty', 'Essay');


            if (!is_attachWieght_empty) {

                alert("Attachment Weight should not be Empty")
                $('.attachment_weight').addClass('required')

            } else if (is_attachWieght_empty) {


                //   -----------   2- number
                if (!is_attachWieght_num) {
                    alert("Attachment Weight should be a number ")
                    $('.attachment_weight').addClass('error')

                    console.log({ yn_weight });

                } else if (is_attachWieght_num) {
                    $('.attachment_weight').removeClass('error')

                    //  -----------  3 - Valid weight

                    if ((is_attachWieght_num) == "true") {
                        attachment_obj.weight = $('.attachement_weight').val();



                    } else if (!is_attachWieght_valid) {
                        $('.attachment_weight').addClass('error')
                        alert(is_attachWieght_valid);
                    } else {
                        $('.attachment_weight').removeClass('error');
                        $('.attachment_weight').removeClass('required');
                        yesOrno_obj.weight = attach_content;
                        // console.log("Attachment weight Done");
                    }
                }

            }
            //--------- Quection Content-----------
            if (!is_attachContent_empty) {

                alert("Attachment Question  should not be Empty")
                $('.attachment_text').addClass('required')

            } else if (is_attachContent_empty) {

                $('.attachment_text').removeClass('required')
                if ($('.en-btn4').hasClass('selected-lang-btn')) {
                    attachment_obj.en_question = attach_content;
                } else if ($('.ar-btn4').hasClass('selected-lang-btn'))
                    attachment_obj.ar_question = attach_content;
            }
        }



        let required = $(document).find('.required').length;
        let errors = $(document).find('.error').length;
        console.log({ required });


        if (required > 0) {
            alert("Please fill in the required Fields ...")


            console.log({ required });

        } else if (errors > 0) {

            console.log({ errors });

        } else if (total_weight > 100 || total_weight < 100) {
            alert("Total weight must be equal  100% ")
        } else {
            alert("Section saved successfully")
                // Clearing inputs and removing appended questions
            $('.Essay').remove();
            $('.YesNo').remove();
            $('.Attachment').remove();

            $('input').val('');
            $('textarea').val('');
        }




    }



})



$('.showName').click(function() {
    console.log("English Name", section_obj.en_name);
    console.log("Arabic Name", section_obj.ar_name);
    console.log("sec Weight", section_obj.weight);
})