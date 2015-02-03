/* 
 * This script contains the interaction logic of the Task: Memory
 */


var picSelectedPart1Trial = false;
var selectedPicIdPart1Trial;
var picSelectedPart2Trial = false;
var selectedPicIdPart2Trial;
var willCorrect = false;
var canForwardToBridgingPage = false;



var picSelectedPart1 = false;
var hintPopupText = "Wollen Sie sich korrigieren? Tippen Sie erneut das Bild an, dann verschwindet die Markierung. Sonst drücken Sie 'Weiter'";
var hintPopuptext2 = "Falls Sie sich korrigieren möchten: Tippen Sie das Bild erneut an und wählen Sie eine andere Position oder ein freies Feld am linken Rand";
var hintpopupText3 = "Bitte positionieren Sie das Bild zuerst";
var canSwitchToNextTask = false;
var selectedPicIdPart2Task1;
var willCorrectTask1 = false;


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
        // show hint page
        $.mobile.changePage('#hintPage', {transition: "flip"});

        // then show next page 
        setTimeout(function () {
            $.mobile.changePage('#' + nextPage, {transition: "flip"});
        }, 4000);

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
        if (canForwardToBridgingPage)
            $.mobile.changePage('#bridgingPage2', {transition: "flip"});

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
function switchToNextPartTaks1() {

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
function switchToNextPartTaks1Rep() {

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
                picSelectedPart2Trial = true;
                selectedPicIdPart2Task1 = clickedPicId;


            }

            else
            {
                // deselect pic
                $("#" + clickedPicId).attr("class", "fieldBorder");
                picSelectedPart2Trial = false;
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
        if (picSelectedPart2Trial)
        {
            // reset status
            picSelectedPart2Trial = false;

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
            picSelectedPart2Trial = true;
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
        if (picSelectedPart2Trial)
        {
            // reset status
            picSelectedPart2Trial = false;

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
            picSelectedPart2Trial = true;
            canSwitchToNextTask = false;
        }



    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



// switches to next task
function switchToNextTask1(){
    
    try
    {
        if (canSwitchToNextTask)
        {
            showEmptyTable('tableWithPicsTask1Rep');
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
function switchToNextTask1Rep(){
    
    try
    {
        if (canSwitchToNextTask)
        {
            showEmptyTable('tableWithPicsTask2');
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