

/* This script contains the interaction logic of the Task: Memory
 */


var picSelectedPart1Trial = false;
var selectedPicIdPart1Trial;
var picSelectedPart2Trial = false;
var selectedPicIdPart2Trial;
var willCorrect = false;
var canForwardToBridgingPage = false;
var clickedFieldIdTrial;



var picSelectedPart1 = false;
var hintPopupText = "Wollen Sie sich korrigieren? Tippen Sie erneut das Bild an, dann verschwindet die Markierung. Sonst drücken Sie 'Weiter'";
var hintPopuptext2 = "Falls Sie sich korrigieren möchten: Tippen Sie das Bild erneut an und wählen Sie eine andere Position oder ein freies Feld am linken Rand";
var hintpopupText3 = "Bitte positionieren Sie das Bild zuerst";

var canSwitchToNextTask = false;
var selectedPicIdPart2Task1;
var willCorrectTask1 = false;
var picSelectedPart2Task1 = false;

var selectedPicsCountTask2 = 0;
var selectedPicIdPart2Task2;
var willCorrectTask2 = false;
var picSelectedPart2Task2 = false;

var selectedPicsCountTask2Rep = 0;
var selectedPicIdPart2Task2Rep;
var willCorrectTask2Rep = false;
var picSelectedPart2Task2Rep = false;

var selectedPicsCountTask3 = 0;
var selectedPicIdPart2Task3;
var willCorrectTask3 = false;
var picSelectedPart2Task3 = false;

var selectedPicsCountTask3Rep = 0;
var selectedPicIdPart2Task3Rep;
var willCorrectTask3Rep = false;
var picSelectedPart2Task3Rep = false;

var selectedPicsCountTask4 = 0;
var selectedPicIdPart2Task4;
var willCorrectTask4 = false;
var picSelectedPart2Task4 = false;

var selectedPicsCountTask4Rep = 0;
var selectedPicIdPart2Task4Rep;
var willCorrectTask4Rep = false;
var picSelectedPart2Task4Rep = false;

var selectedPicsCountTask5 = 0;
var selectedPicIdPart2Task5;
var willCorrectTask5 = false;
var picSelectedPart2Task5 = false;

var selectedPicsCountTask5Rep = 0;
var selectedPicIdPart2Task5Rep;
var willCorrectTask5Rep = false;
var picSelectedPart2Task5Rep = false;

var selectedPicsCountTask6 = 0;
var selectedPicIdPart2Task6;
var willCorrectTask6 = false;
var picSelectedPart2Task6 = false;

var selectedPicsCountTask6Rep = 0;
var selectedPicIdPart2Task6Rep;
var willCorrectTask6Rep = false;
var picSelectedPart2Task6Rep = false;


// shows an empty table and then given page
function showEmptyTable(nextPage) {

    try
    {
        // show hint page
        $.mobile.changePage('#emptyTablePage', {transition: "flip"});

        // then show next page 
        setTimeout(function () {
            $.mobile.changePage('#' + nextPage, {transition: "flip"});
        }, 2000);
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows end page
function showEndPage() {

    try
    {
       
        setTimeout(function () {
            $.mobile.changePage('#endPage', {transition: "flip"});
        }, 2000);
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}

// shows hint page and then the given next page as param
function showHintPage(nextPage) {

    try
    {
        // show hint page
        $.mobile.changePage('#hintPage', {transition: "flip"});

        // then show next page 
        setTimeout(function () {
            $.mobile.changePage('#' + nextPage, {transition: "none"});
        }, 4000);

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


// shows given page after showing empty page
function showFollowingPage(nextPage) {

    try
    {

        //  show next page 
        setTimeout(function () {
            $.mobile.changePage('#' + nextPage, {transition: "flip"});
        }, 3000);

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


// selects one pic in the trial page
function selectPicPart1Trial(clickedTd, tdsTable) {


    var clickedId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedId).attr('class');
    var noPicSelected = true;

    try
    {
        // pic is unselected
        if (currentClass !== "selectedPic")
        {
            // select pic
            $("#" + clickedId).attr("class", "selectedPic");
            picSelectedPart1Trial = true;
            selectedPicIdPart1Trial = clickedId;
            // deselct other pics

            for (var i = 0; i < allTds.length; i++) {
                var id = allTds[i].id;

                if (id !== clickedId) {

                    $('#' + id).attr('class', '');
                }

            }

            // show hint popup
            $("#hintPopupTrial1").html(hintPopupText);
            $("#hintPopupTrial1").css("visibility", "visible");

        }

        // pic is already selected
        else if (currentClass === "selectedPic")
        {

            // deselect pic
            $("#" + clickedId).attr("class", "");

            // hide hint popup if no pic is selected
            for (var i = 0; i < allTds.length; i++) {
                var id = allTds[i].id;

                if ($('#' + id).attr('class') === "selectedPic")
                    noPicSelected = false;


            }

            if (noPicSelected)
            {
                $("#hintPopupTrial1").css("visibility", "hidden");
                picSelectedPart1Trial = false;
                selectedPicIdPart1Trial = null;
            }

        }



    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the trial task
function switchToNextPartTrial() {

    try
    {
        // if no pic is selected
        if (!picSelectedPart1Trial)
        {
            // show hint popup
            $("#hintPopupTrial1").html("Bitte wählen Sie ein Bild aus");
            $("#hintPopupTrial1").css("visibility", "visible");
        }

        // if a pic was selected
        else
        {
            $.mobile.changePage('#memoryTrial5', {transition: "none"});
            // deselect selected pic for evtl. invoke again
            $("#"+selectedPicIdPart1Trial).attr("class", "");
        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }


}


// shows bridging page 2
function showBridgingPage() {

    try
    {
        if (canForwardToBridgingPage){
            $.mobile.changePage('#bridgingPage2', {transition: "flip"});
            // move image back for an invoke again of trial
            setTimeout(function () {
            $("#" + clickedFieldIdTrial).children('img').clone().appendTo("#" + selectedPicIdPart2Trial);
                    $("#" + clickedFieldIdTrial).find('img').remove();
                    }, 1000);
            
        }

        else
        {
            // show selection hint
            $("#hintPopupTrial2").html(hintpopupText3);
            $("#hintPopupTrial2").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopupTrial2").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of trialtask
function selectPicPart2Trial(clickedPic) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');

    try
    {

        if (willCorrect)
        {
            selectTargetFieldTrial(clickedPic);
            willCorrect = false;
            canForwardToBridgingPage = false;
        }

        else
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Trial = true;
                selectedPicIdPart2Trial = clickedPicId;


            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Trial = false;
                selectedPicIdPart2Trial = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during trial task
function selectTargetFieldTrial(clickedField) {

    var clickedFieldId = clickedField.id;
    willCorrect = $("#" + clickedFieldId).children('img').length > 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Trial)
        {
            // reset status
            picSelectedPart2Trial = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Trial !== clickedFieldId)
                {
                    clickedFieldIdTrial = clickedFieldId;
                    $("#" + selectedPicIdPart2Trial).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Trial).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Trial).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopupTrial2").html("Falls Sie sich korrigieren möchten: Tippen Sie das Bild erneut an und wählen Sie eine andere Position oder ein freies Feld am linken Rand");
                    $("#hintPopupTrial2").css("visibility", "visible");
                }

            }, 300);

            canForwardToBridgingPage = true;
        }

        // if user will correct selection
        else if (willCorrect)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Trial = clickedFieldId;
            picSelectedPart2Trial = true;
            canForwardToBridgingPage = false;
        }



    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



function selectPicPart1Task1(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        if (currentClass !== "selectedPic")
        {
            // highlight pic
            $("#" + clickedTdId).attr("class", "selectedPic");

            picSelectedPart1 = true;
            // deselect other pics
            for (var i = 0; i < allTds.length; i++) {
                var id = allTds[i].id;

                if (id !== clickedTdId) {

                    $('#' + id).attr('class', '');
                }

            }

            // show hint popup
            $("#hintPopupTask1").html(hintPopupText);
            $("#hintPopupTask1").css("visibility", "visible");

        }

        else if (currentClass === "selectedPic")
        {
            // deselct pic
            $("#" + clickedTdId).attr("class", "");
            picSelectedPart1 = false;
            $("#hintPopupTask1").css("visibility", "hidden");
        }


    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


function selectPicPart1Task1Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        if (currentClass !== "selectedPic")
        {
            // highlight pic
            $("#" + clickedTdId).attr("class", "selectedPic");

            picSelectedPart1 = true;
            // deselect other pics
            for (var i = 0; i < allTds.length; i++) {
                var id = allTds[i].id;

                if (id !== clickedTdId) {

                    $('#' + id).attr('class', '');
                }

            }

            // show hint popup
            $("#hintPopupTask1Rep").html(hintPopupText);
            $("#hintPopupTask1Rep").css("visibility", "visible");

        }

        else if (currentClass === "selectedPic")
        {
            // deselct pic
            $("#" + clickedTdId).attr("class", "");
            picSelectedPart1 = false;
            $("#hintPopupTask1Rep").css("visibility", "hidden");
        }


    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask1() {

    try
    {
        // if no pic is selected
        if (!picSelectedPart1)
        {
            // show hint popup
            $("#hintPopupTask1").html("Bitte wählen Sie ein Bild aus");
            $("#hintPopupTask1").css("visibility", "visible");
        }

        // if a pic was selected
        else
        {
            // show overlays

            $("#task1Overlay1").css("visibility", "visible");
            $("#task1Overlay2").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask1', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask1Rep() {

    try
    {
        // if no pic is selected
        if (!picSelectedPart1)
        {
            // show hint popup
            $("#hintPopupTask1Rep").html("Bitte wählen Sie ein Bild aus");
            $("#hintPopupTask1Rep").css("visibility", "visible");
        }

        // if a pic was selected
        else
        {
            // show overlays

            $("#task1Overlay1Rep").css("visibility", "visible");
            $("#task1Overlay2Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask1Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}



// selects pic during 2. part of trialtask
function selectPicPart2Task1(clickedPic) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');

    try
    {

        if (willCorrectTask1)
        {
            selectTargetFieldTask1(clickedPic);
            willCorrectTask1 = false;
            canSwitchToNextTask = false;
        }

        else
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task1 = true;
                selectedPicIdPart2Task1 = clickedPicId;


            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task1 = false;
                selectedPicIdPart2Task1 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during trial task
function selectTargetFieldTask1(clickedField) {

    var clickedFieldId = clickedField.id;
    willCorrectTask1 = $("#" + clickedFieldId).children('img').length > 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task1)
        {
            // reset status
            picSelectedPart2Task1 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task1 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task1).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task1).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task1).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task1").html(hintPopuptext2);
                    $("#hintPopup2Task1").css("visibility", "visible");
                }

            }, 300);

            canSwitchToNextTask = true;
        }

        // if user will correct selection
        else if (willCorrectTask1)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task1 = clickedFieldId;
            picSelectedPart2Task1 = true;
            canSwitchToNextTask = false;
        }



    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



// selects target Field during trial task
function selectTargetFieldTask1Rep(clickedField) {

    var clickedFieldId = clickedField.id;
    willCorrectTask1 = $("#" + clickedFieldId).children('img').length > 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task1)
        {
            // reset status
            picSelectedPart2Task1 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task1 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task1).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task1).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task1).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task1Rep").html(hintPopuptext2);
                    $("#hintPopup2Task1Rep").css("visibility", "visible");
                }

            }, 1000);

            canSwitchToNextTask = true;
        }

        // if user will correct selection
        else if (willCorrectTask1)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task1 = clickedFieldId;
            picSelectedPart2Task1 = true;
            canSwitchToNextTask = false;

        }



    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



// switches to next task
function switchToNextTask1() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask1Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task1").html(hintpopupText3);
            $("#hintPopup2Task1").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task1").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



// switches to next task
function switchToNextTask1Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask2');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;
        }

        else
        {
            // show selection hint
            $("#hintPopup2Task1Rep").html(hintpopupText3);
            $("#hintPopup2Task1Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task1Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task2(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask2 < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");


                // deselect other pics
//            for (var i = 0; i < allTds.length; i++) {
//                var id = allTds[i].id;
//
//                if (id !== clickedTdId) {
//
//                    $('#' + id).attr('class', '');
//                }
//
//            }
                // increment counter
                selectedPicsCountTask2++;

                // set flag when selection completed
                if (selectedPicsCountTask2 === 2)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask2").html(hintPopupText);
                $("#hintPopupTask2").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask2--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask2 === 0)
                    $("#hintPopupTask2").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask2 >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask2--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask2 === 0)
                    $("#hintPopupTask2").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask2() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask2 === 0)
        {
            // show hint popup
            $("#hintPopupTask2").html("Bitte wählen Sie 2 Bilder aus");
            $("#hintPopupTask2").css("visibility", "visible");
        }

        // if one pic is selected
        else if (selectedPicsCountTask2 === 1)
        {
            // show hint popup
            $("#hintPopupTask2").html("Bitte wählen Sie ein Bild aus");
            $("#hintPopupTask2").css("visibility", "visible");
        }

        // if 2 pics were selected
        else if (selectedPicsCountTask2 === 2)
        {
            // show overlays

            $("#task2Overlay1").css("visibility", "visible");
            $("#task2Overlay2").css("visibility", "visible");
            $("#task2Overlay3").css("visibility", "visible");
            $("#task2Overlay4").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask2', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of trialtask
function selectPicPart2Task2(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask2 && !hasPic)
        {
            selectTargetFieldTask2(clickedPic);
            willCorrectTask2 = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask2 && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task2 = true;
                selectedPicIdPart2Task2 = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task2 = false;
                selectedPicIdPart2Task2 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during trial task
function selectTargetFieldTask2(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask2 = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task2;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task2 && isEmpty)
        {
            // reset status
            picSelectedPart2Task2 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task2 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task2).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task2).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task2).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task2").html(hintPopuptext2);
                    $("#hintPopup2Task2").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask2 && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task2 = clickedFieldId;
            picSelectedPart2Task2 = true;
            canSwitchToNextTask = false;
        }

        // check if 2 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 2)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask2() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask2Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task2").html(hintpopupText3);
            $("#hintPopup2Task2").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task2").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}

function selectPicPart1Task2Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask2Rep < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");


                // deselect other pics
//            for (var i = 0; i < allTds.length; i++) {
//                var id = allTds[i].id;
//
//                if (id !== clickedTdId) {
//
//                    $('#' + id).attr('class', '');
//                }
//
//            }
                // increment counter
                selectedPicsCountTask2Rep++;

                // set flag when selection completed
                if (selectedPicsCountTask2Rep === 2)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask2Rep").html(hintPopupText);
                $("#hintPopupTask2Rep").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask2Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask2Rep === 0)
                    $("#hintPopupTask2Rep").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask2Rep >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask2Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask2Rep === 0)
                    $("#hintPopupTask2Rep").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}

// switches to next part of the task
function switchToNextPartTask2Rep() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask2Rep === 0)
        {
            // show hint popup
            $("#hintPopupTask2Rep").html("Bitte wählen Sie 2 Bilder aus");
            $("#hintPopupTask2Rep").css("visibility", "visible");
        }

        // if one pic is selected
        else if (selectedPicsCountTask2Rep === 1)
        {
            // show hint popup
            $("#hintPopupTask2Rep").html("Bitte wählen Sie ein Bild aus");
            $("#hintPopupTask2Rep").css("visibility", "visible");
        }

        // if 2 pics were selected
        else if (selectedPicsCountTask2Rep === 2)
        {
            // show overlays

            $("#task2Overlay1Rep").css("visibility", "visible");
            $("#task2Overlay2Rep").css("visibility", "visible");
            $("#task2Overlay3Rep").css("visibility", "visible");
            $("#task2Overlay4Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask2Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of trialtask
function selectPicPart2Task2Rep(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask2Rep && !hasPic)
        {
            selectTargetFieldTask2Rep(clickedPic);
            willCorrectTask2Rep = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask2Rep && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task2Rep = true;
                selectedPicIdPart2Task2Rep = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task2Rep = false;
                selectedPicIdPart2Task2Rep = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during trial task
function selectTargetFieldTask2Rep(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask2Rep = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task2Rep;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task2Rep && isEmpty)
        {
            // reset status
            picSelectedPart2Task2Rep = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task2Rep !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task2Rep).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task2Rep).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task2Rep).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task2").html(hintPopuptext2);
                    $("#hintPopup2Task2").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask2Rep && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task2Rep = clickedFieldId;
            picSelectedPart2Task2Rep = true;
            canSwitchToNextTask = false;
        }

        // check if 2 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 2)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask2Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask3');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task2Rep").html(hintpopupText3);
            $("#hintPopup2Task2Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task2Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task3(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask3 < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask3++;

                // set flag when selection completed
                if (selectedPicsCountTask3 === 3)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask3").html(hintPopupText);
                $("#hintPopupTask3").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask3--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask3 === 0)
                    $("#hintPopupTask3").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask3 >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask3--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask3 === 0)
                    $("#hintPopupTask3").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask3() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask3 === 0)
        {
            // show hint popup
            $("#hintPopupTask3").html("Bitte wählen Sie 3 Bilder aus");
            $("#hintPopupTask3").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask3 === 2)
        {
            // show hint popup
            $("#hintPopupTask3").html("Bitte wählen Sie 1 Bilder aus");
            $("#hintPopupTask3").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask3 === 1)
        {
            // show hint popup
            $("#hintPopupTask3").html("Bitte wählen Sie 2 Bild aus");
            $("#hintPopupTask3").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask3 === 3)
        {
            // show overlays

            $("#task3Overlay1").css("visibility", "visible");
            $("#task3Overlay2").css("visibility", "visible");
            $("#task3Overlay3").css("visibility", "visible");
            $("#task3Overlay4").css("visibility", "visible");
            $("#task3Overlay5").css("visibility", "visible");
            $("#task3Overlay6").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask3', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task3(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask3 && !hasPic)
        {
            selectTargetFieldTask3(clickedPic);
            willCorrectTask3 = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask3 && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task3 = true;
                selectedPicIdPart2Task3 = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task3 = false;
                selectedPicIdPart2Task3 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask3(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask3 = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task3;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task3 && isEmpty)
        {
            // reset status
            picSelectedPart2Task3 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task3 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task3).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task3).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task3).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task3").html(hintPopuptext2);
                    $("#hintPopup2Task3").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask3 && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task3 = clickedFieldId;
            picSelectedPart2Task3 = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 3)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask3() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask3Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task3").html(hintpopupText3);
            $("#hintPopup2Task3").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task3").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task3Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask3Rep < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask3Rep++;

                // set flag when selection completed
                if (selectedPicsCountTask3Rep === 3)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask3Rep").html(hintPopupText);
                $("#hintPopupTask3Rep").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask3Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask3Rep === 0)
                    $("#hintPopupTask3Rep").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask3Rep >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask3Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask3Rep === 0)
                    $("#hintPopupTask3Rep").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask3Rep() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask3Rep === 0)
        {
            // show hint popup
            $("#hintPopupTask3Rep").html("Bitte wählen Sie 3 Bilder aus");
            $("#hintPopupTask3Rep").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask3Rep === 2)
        {
            // show hint popup
            $("#hintPopupTask3Rep").html("Bitte wählen Sie 1 Bilder aus");
            $("#hintPopupTask3Rep").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask3Rep === 1)
        {
            // show hint popup
            $("#hintPopupTask3Rep").html("Bitte wählen Sie 2 Bild aus");
            $("#hintPopupTask3Rep").css("visibility", "visible");
        }

        // if a pic was selected
        else if (selectedPicsCountTask3Rep === 3)
        {
            // show overlays

            $("#task3Overlay1Rep").css("visibility", "visible");
            $("#task3Overlay2Rep").css("visibility", "visible");
            $("#task3Overlay3Rep").css("visibility", "visible");
            $("#task3Overlay4Rep").css("visibility", "visible");
            $("#task3Overlay5Rep").css("visibility", "visible");
            $("#task3Overlay6Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask3Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task3Rep(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask3Rep && !hasPic)
        {
            selectTargetFieldTask3Rep(clickedPic);
            willCorrectTask3Rep = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask3Rep && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task3Rep = true;
                selectedPicIdPart2Task3Rep = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task3Rep = false;
                selectedPicIdPart2Task3Rep = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask3Rep(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask3Rep = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task3Rep;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task3Rep && isEmpty)
        {
            // reset status
            picSelectedPart2Task3Rep = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task3Rep !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task3Rep).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task3Rep).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task3Rep).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task3Rep").html(hintPopuptext2);
                    $("#hintPopup2Task3Rep").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask3Rep && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task3Rep = clickedFieldId;
            picSelectedPart2Task3Rep = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 3)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}

// switches to next task
function switchToNextTask3Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask4');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task3Rep").html(hintpopupText3);
            $("#hintPopup2Task3Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task3Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task4(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask4 < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask4++;

                // set flag when selection completed
                if (selectedPicsCountTask4 === 4)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask4").html(hintPopupText);
                $("#hintPopupTask4").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask4--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask4 === 0)
                    $("#hintPopupTask4").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask4 >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask4--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask4 === 0)
                    $("#hintPopupTask4").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask4() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask4 === 0)
        {
            // show hint popup
            $("#hintPopupTask4").html("Bitte wählen Sie 4 Bilder aus");
            $("#hintPopupTask4").css("visibility", "visible");
        }
         // if only 3 pics are selected
        else if (selectedPicsCountTask4 === 3)
        {
            // show hint popup
            $("#hintPopupTask4").html("Bitte wählen Sie 1 Bild aus");
            $("#hintPopupTask4").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask4 === 2)
        {
            // show hint popup
            $("#hintPopupTask4").html("Bitte wählen Sie 2 Bilder aus");
            $("#hintPopupTask4").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask4 === 1)
        {
            // show hint popup
            $("#hintPopupTask4").html("Bitte wählen Sie 3 Bild aus");
            $("#hintPopupTask4").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask4 === 4)
        {
            // show overlays

            $("#task4Overlay1").css("visibility", "visible");
            $("#task4Overlay2").css("visibility", "visible");
            $("#task4Overlay3").css("visibility", "visible");
            $("#task4Overlay4").css("visibility", "visible");
            $("#task4Overlay5").css("visibility", "visible");
            $("#task4Overlay6").css("visibility", "visible");
            $("#task4Overlay7").css("visibility", "visible");
            $("#task4Overlay8").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask4', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}

// selects pic during 2. part of task
function selectPicPart2Task4(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask4 && !hasPic)
        {
            selectTargetFieldTask4(clickedPic);
            willCorrectTask4 = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask4 && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task4 = true;
                selectedPicIdPart2Task4 = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task4 = false;
                selectedPicIdPart2Task4 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask4(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask4 = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task4;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task4 && isEmpty)
        {
            // reset status
            picSelectedPart2Task4 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task4 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task4).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task4).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task4).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task4").html(hintPopuptext2);
                    $("#hintPopup2Task4").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask4 && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task4 = clickedFieldId;
            picSelectedPart2Task4 = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 4)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}

// switches to next task
function switchToNextTask4() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask4Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task4").html(hintpopupText3);
            $("#hintPopup2Task4").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task4").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task4Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask4Rep < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask4Rep++;

                // set flag when selection completed
                if (selectedPicsCountTask4Rep === 4)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask4Rep").html(hintPopupText);
                $("#hintPopupTask4Rep").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask4Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask4Rep === 0)
                    $("#hintPopupTask4Rep").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask4Rep >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask4Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask4Rep === 0)
                    $("#hintPopupTask4Rep").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask4Rep() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask4Rep === 0)
        {
            // show hint popup
            $("#hintPopupTask4Rep").html("Bitte wählen Sie 4 Bilder aus");
            $("#hintPopupTask4Rep").css("visibility", "visible");
        }
         // if only 3 pics are selected
        else if (selectedPicsCountTask4Rep === 3)
        {
            // show hint popup
            $("#hintPopupTask4Rep").html("Bitte wählen Sie 1 Bild aus");
            $("#hintPopupTask4Rep").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask4Rep === 2)
        {
            // show hint popup
            $("#hintPopupTask4Rep").html("Bitte wählen Sie 2 Bilder aus");
            $("#hintPopupTask4Rep").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask4Rep === 1)
        {
            // show hint popup
            $("#hintPopupTask4Rep").html("Bitte wählen Sie 3 Bild aus");
            $("#hintPopupTask4Rep").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask4Rep === 4)
        {
            // show overlays

            $("#task4Overlay1Rep").css("visibility", "visible");
            $("#task4Overlay2Rep").css("visibility", "visible");
            $("#task4Overlay3Rep").css("visibility", "visible");
            $("#task4Overlay4Rep").css("visibility", "visible");
            $("#task4Overlay5Rep").css("visibility", "visible");
            $("#task4Overlay6Rep").css("visibility", "visible");
            $("#task4Overlay7Rep").css("visibility", "visible");
            $("#task4Overlay8Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask4Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task4Rep(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask4Rep && !hasPic)
        {
            selectTargetFieldTask4Rep(clickedPic);
            willCorrectTask4Rep = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask4Rep && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task4Rep = true;
                selectedPicIdPart2Task4Rep = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task4Rep = false;
                selectedPicIdPart2Task4Rep = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask4Rep(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask4Rep = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task4Rep;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task4Rep && isEmpty)
        {
            // reset status
            picSelectedPart2Task4Rep = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task4Rep !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task4Rep).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task4Rep).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task4Rep).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task4Rep").html(hintPopuptext2);
                    $("#hintPopup2Task4Rep").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask4Rep && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task4Rep = clickedFieldId;
            picSelectedPart2Task4Rep = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 4)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}

// switches to next task
function switchToNextTask4Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask5');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task4Rep").html(hintpopupText3);
            $("#hintPopup2Task4Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task4Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function selectPicPart1Task5(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask5 < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask5++;

                // set flag when selection completed
                if (selectedPicsCountTask5 === 5)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask5").html(hintPopupText);
                $("#hintPopupTask5").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask5--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask5 === 0)
                    $("#hintPopupTask5").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask5 >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask5--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask5 === 0)
                    $("#hintPopupTask5").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask6() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask6 === 0)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 6 Bilder aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }
        
        // if only 4 pics are selected
        else if (selectedPicsCountTask6 === 5)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 1 Bild aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }
        
        // if only 3 pics are selected
        else if (selectedPicsCountTask6 === 4)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 2 Bild aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }
        
         // if only 3 pics are selected
        else if (selectedPicsCountTask6 === 3)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 3 Bild aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask6 === 2)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 4 Bilder aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask6 === 1)
        {
            // show hint popup
            $("#hintPopupTask6").html("Bitte wählen Sie 5 Bild aus");
            $("#hintPopupTask6").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask6 === 6)
        {
            // show overlays

            $("#task6Overlay1").css("visibility", "visible");
            $("#task6Overlay2").css("visibility", "visible");
            $("#task6Overlay3").css("visibility", "visible");
            $("#task6Overlay4").css("visibility", "visible");
            $("#task6Overlay5").css("visibility", "visible");
            $("#task6Overlay6").css("visibility", "visible");
            $("#task6Overlay7").css("visibility", "visible");
            $("#task6Overlay8").css("visibility", "visible");
            $("#task6Overlay9").css("visibility", "visible");
            $("#task6Overlay10").css("visibility", "visible");
            $("#task6Overlay11").css("visibility", "visible");
            $("#task6Overlay12").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask6', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task5(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask5 && !hasPic)
        {
            selectTargetFieldTask5(clickedPic);
            willCorrectTask5 = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask5 && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task5 = true;
                selectedPicIdPart2Task5 = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task5 = false;
                selectedPicIdPart2Task5 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask5(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask5 = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task5;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task5 && isEmpty)
        {
            // reset status
            picSelectedPart2Task5 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task5 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task5).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task5).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task5).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task5").html(hintPopuptext2);
                    $("#hintPopup2Task5").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask5 && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task5 = clickedFieldId;
            picSelectedPart2Task5 = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 5)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask5() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask5Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task5").html(hintpopupText3);
            $("#hintPopup2Task5").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task5").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



function selectPicPart1Task5Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask5Rep < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask5Rep++;

                // set flag when selection completed
                if (selectedPicsCountTask5Rep === 5)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask5Rep").html(hintPopupText);
                $("#hintPopupTask5Rep").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask5Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask5Rep === 0)
                    $("#hintPopupTask5Rep").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask5Rep >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask5Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask5Rep === 0)
                    $("#hintPopupTask5Rep").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask5Rep() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask5Rep === 0)
        {
            // show hint popup
            $("#hintPopupTask5Rep").html("Bitte wählen Sie 5 Bilder aus");
            $("#hintPopupTask5Rep").css("visibility", "visible");
        }
        
        // if only 3 pics are selected
        else if (selectedPicsCountTask5Rep === 4)
        {
            // show hint popup
            $("#hintPopupTask5Rep").html("Bitte wählen Sie 1 Bild aus");
            $("#hintPopupTask5Rep").css("visibility", "visible");
        }
        
         // if only 3 pics are selected
        else if (selectedPicsCountTask5Rep === 3)
        {
            // show hint popup
            $("#hintPopupTask5Rep").html("Bitte wählen Sie 2 Bild aus");
            $("#hintPopupTask5Rep").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask5Rep === 2)
        {
            // show hint popup
            $("#hintPopupTask5Rep").html("Bitte wählen Sie 3 Bilder aus");
            $("#hintPopupTask5Rep").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask5Rep === 1)
        {
            // show hint popup
            $("#hintPopupTask5Rep").html("Bitte wählen Sie 4 Bild aus");
            $("#hintPopupTask5Rep").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask5Rep === 5)
        {
            // show overlays

            $("#task5Overlay1Rep").css("visibility", "visible");
            $("#task5Overlay2Rep").css("visibility", "visible");
            $("#task5Overlay3Rep").css("visibility", "visible");
            $("#task5Overlay4Rep").css("visibility", "visible");
            $("#task5Overlay5Rep").css("visibility", "visible");
            $("#task5Overlay6Rep").css("visibility", "visible");
            $("#task5Overlay7Rep").css("visibility", "visible");
            $("#task5Overlay8Rep").css("visibility", "visible");
            $("#task5Overlay9Rep").css("visibility", "visible");
            $("#task5Overlay10Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask5Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task5Rep(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask5Rep && !hasPic)
        {
            selectTargetFieldTask5Rep(clickedPic);
            willCorrectTask5Rep = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask5Rep && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task5Rep = true;
                selectedPicIdPart2Task5Rep = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task5Rep = false;
                selectedPicIdPart2Task5Rep = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask5Rep(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask5Rep = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task5Rep;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task5Rep && isEmpty)
        {
            // reset status
            picSelectedPart2Task5Rep = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task5Rep !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task5Rep).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task5Rep).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task5Rep).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task5Rep").html(hintPopuptext2);
                    $("#hintPopup2Task5Rep").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask5Rep && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task5Rep = clickedFieldId;
            picSelectedPart2Task5Rep = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 5)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask5Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask6');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task5Rep").html(hintpopupText3);
            $("#hintPopup2Task5Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task5Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



function selectPicPart1Task6(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask6 < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask6++;

                // set flag when selection completed
                if (selectedPicsCountTask6 === 6)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask6").html(hintPopupText);
                $("#hintPopupTask6").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask6--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask6 === 0)
                    $("#hintPopupTask6").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask6 >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask6--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask6 === 0)
                    $("#hintPopupTask6").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}

// selects pic during 2. part of task
function selectPicPart2Task6(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask6 && !hasPic)
        {
            selectTargetFieldTask6(clickedPic);
            willCorrectTask6 = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask6 && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task6 = true;
                selectedPicIdPart2Task6 = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task6 = false;
                selectedPicIdPart2Task6 = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask6(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask6 = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task6;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task6 && isEmpty)
        {
            // reset status
            picSelectedPart2Task6 = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task6 !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task6).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task6).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task6).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task6").html(hintPopuptext2);
                    $("#hintPopup2Task6").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask6 && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task6 = clickedFieldId;
            picSelectedPart2Task6 = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 6)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask6() {

    try
    {
        if (canSwitchToNextTask)
        {
            showHintPage('tableWithPicsTask6Rep');
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task6").html(hintpopupText3);
            $("#hintPopup2Task6").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task6").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



function selectPicPart1Task6Rep(clickedTd, tdsTable, rightPicsCount) {

    var clickedTdId = clickedTd.id;
    var allTds = tdsTable.getElementsByTagName('td');
    var currentClass = $("#" + clickedTdId).attr('class');

    try
    {
        // only if less than 2 pics selected
        if (selectedPicsCountTask6Rep < rightPicsCount)
        {

            if (currentClass !== "selectedPic")
            {
                // highlight pic
                $("#" + clickedTdId).attr("class", "selectedPic");

                // increment counter
                selectedPicsCountTask6Rep++;

                // set flag when selection completed
                if (selectedPicsCountTask6Rep === 6)
                    picSelectedPart1 = true;
                // show hint popup
                $("#hintPopupTask6Rep").html(hintPopupText);
                $("#hintPopupTask6Rep").css("visibility", "visible");

            }

            else if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask6Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask6Rep === 0)
                    $("#hintPopupTask6Rep").css("visibility", "hidden");
            }

        }

        // if already 2 pics selected
        else if (selectedPicsCountTask6Rep >= rightPicsCount)
        {
            // allow only deselection
            if (currentClass === "selectedPic")
            {
                // deselct pic
                $("#" + clickedTdId).attr("class", "");

                // decrement counter 
                selectedPicsCountTask6Rep--;
                picSelectedPart1 = false;
                if (selectedPicsCountTask6Rep === 0)
                    $("#hintPopupTask6Rep").css("visibility", "hidden");
            }
        }

    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// switches to next part of the task
function switchToNextPartTask6Rep() {

    try
    {
        // if no pic is selected
        if (selectedPicsCountTask6Rep === 0)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 6 Bilder aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }
        
        // if only 4 pics are selected
        else if (selectedPicsCountTask6Rep === 5)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 1 Bild aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }
        
        // if only 3 pics are selected
        else if (selectedPicsCountTask6Rep === 4)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 2 Bild aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }
        
         // if only 3 pics are selected
        else if (selectedPicsCountTask6Rep === 3)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 3 Bild aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }

        // if only 2 pics are selected
        else if (selectedPicsCountTask6Rep === 2)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 4 Bilder aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }
        
        // if only 1 pic is selected
        else if (selectedPicsCountTask6Rep === 1)
        {
            // show hint popup
            $("#hintPopupTask6Rep").html("Bitte wählen Sie 5 Bild aus");
            $("#hintPopupTask6Rep").css("visibility", "visible");
        }

        // if 3 pics were selected
        else if (selectedPicsCountTask6Rep === 6)
        {
            // show overlays

            $("#task6Overlay1Rep").css("visibility", "visible");
            $("#task6Overlay2Rep").css("visibility", "visible");
            $("#task6Overlay3Rep").css("visibility", "visible");
            $("#task6Overlay4Rep").css("visibility", "visible");
            $("#task6Overlay5Rep").css("visibility", "visible");
            $("#task6Overlay6Rep").css("visibility", "visible");
            $("#task6Overlay7Rep").css("visibility", "visible");
            $("#task6Overlay8Rep").css("visibility", "visible");
            $("#task6Overlay9Rep").css("visibility", "visible");
            $("#task6Overlay10Rep").css("visibility", "visible");
            $("#task6Overlay11Rep").css("visibility", "visible");
            $("#task6Overlay12Rep").css("visibility", "visible");


            // switch to next page
            setTimeout(function () {

                $.mobile.changePage('#bridgingPageTask6Rep', {transition: "flip"});
            }, 3000);
        }
    }

    catch (error)
    {
        console.log("An error has been occured! " + error);
    }

}


// selects pic during 2. part of task
function selectPicPart2Task6Rep(clickedPic, choiceTableId) {

    var clickedPicId = clickedPic.id;
    var currentClass = $("#" + clickedPicId).attr('class');
    var allDivs = choiceTableId.getElementsByTagName('div');
    var hasPic = $("#" + clickedPicId).children('img').length > 0;

    try
    {

        if (willCorrectTask6Rep && !hasPic)
        {
            selectTargetFieldTask6Rep(clickedPic);
            willCorrectTask6Rep = false;
            canSwitchToNextTask = false;
        }

        else if (!willCorrectTask6Rep && hasPic)
        {

            if (currentClass !== "selectedPic")
            {
                // select pic
                $("#" + clickedPicId).attr("class", "selectedPic");
                picSelectedPart2Task6Rep = true;
                selectedPicIdPart2Task6Rep = clickedPicId;

                // deselect other pics
                for (var i = 0; i < allDivs.length; i++) {
                    var id = allDivs[i].id;

                    if (id !== clickedPicId) {

                        $('#' + id).attr('class', 'fieldBorder');
                    }

                }

            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Task6Rep = false;
                selectedPicIdPart2Task6Rep = null;
            }

        }

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// selects target Field during  task
function selectTargetFieldTask6Rep(clickedField, targetsTable) {

    var clickedFieldId = clickedField.id;
    willCorrectTask6Rep = $("#" + clickedFieldId).children('img').length > 0 && !picSelectedPart2Task6Rep;
    var isEmpty = $("#" + clickedFieldId).children('img').length <= 0;

    try
    {
        // only if a pic was selected
        if (picSelectedPart2Task6Rep && isEmpty)
        {
            // reset status
            picSelectedPart2Task6Rep = false;

            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");
            // move selected pic to target field
            setTimeout(function () {

                // not to same field
                if (selectedPicIdPart2Task6Rep !== clickedFieldId)
                {
                    $("#" + selectedPicIdPart2Task6Rep).children('img').clone().appendTo("#" + clickedFieldId);
                    $("#" + selectedPicIdPart2Task6Rep).find('img').remove();
                    // remove highlighting from selected pic and target field
                    $("#" + selectedPicIdPart2Task6Rep).attr("class", "fieldBorder");
                    $("#" + clickedFieldId).attr("class", "fieldBorder");

                    // show correction hint
                    $("#hintPopup2Task6Rep").html(hintPopuptext2);
                    $("#hintPopup2Task6Rep").css("visibility", "visible");
                }

            }, 300);


        }

        // if user will correct selection
        else if (willCorrectTask6Rep && !isEmpty)
        {
            // highlight target field
            $("#" + clickedFieldId).attr("class", "selectedPic");

            selectedPicIdPart2Task6Rep = clickedFieldId;
            picSelectedPart2Task6Rep = true;
            canSwitchToNextTask = false;
        }

        // check if 3 iamges are placed delayed
        setTimeout(function () {
            var placedPics = targetsTable.getElementsByTagName('img');
            if (placedPics.length === 6)
                canSwitchToNextTask = true;
        }, 1300);


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// switches to next task
function switchToNextTask6Rep() {

    try
    {
        if (canSwitchToNextTask)
        {
            showEndPage();
            canSwitchToNextTask = false;
            picSelectedPart1 = false;

        }

        else
        {
            // show selection hint
            $("#hintPopup2Task6Rep").html(hintpopupText3);
            $("#hintPopup2Task6Rep").css("visibility", "visible");

            setTimeout(function () {
                // hide hint
                $("#hintPopup2Task6Rep").css("visibility", "hidden");
            }, 2000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}

